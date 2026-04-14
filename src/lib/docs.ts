import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DocNavItem {
  title: string;
  href: string | null; // null for folders without their own page
  slug: string[];
  isFolder: boolean;
  children?: DocNavItem[];
  order: number;
}

export interface DocFrontmatter {
  title?: string;
  description?: string;
  nav_title?: string;
}

export interface DocPage {
  frontmatter: DocFrontmatter;
  htmlContent: string;
  navTitle: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Strip leading numeric sort prefix: "01-getting-started" → "getting-started" */
function stripOrder(name: string): { slug: string; order: number } {
  const match = name.match(/^(\d+)-(.+)$/);
  if (match) {
    return { slug: match[2], order: parseInt(match[1], 10) };
  }
  return { slug: name, order: 999 };
}

/** "getting-started" → "Getting Started" */
function humanize(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Read frontmatter title only (cheap — no HTML processing) */
function readNavTitle(filePath: string): string {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return (data as DocFrontmatter).nav_title ?? (data as DocFrontmatter).title ?? "";
  } catch {
    return "";
  }
}

// ─── Nav tree ────────────────────────────────────────────────────────────────

function buildNavTree(dirPath: string, urlSegments: string[]): DocNavItem[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return [];
  }

  const items: DocNavItem[] = [];

  for (const entry of entries) {
    const rawName = entry.name;

    if (entry.isDirectory()) {
      const { slug, order } = stripOrder(rawName);
      const childSegments = [...urlSegments, slug];
      const children = buildNavTree(path.join(dirPath, rawName), childSegments);
      if (children.length > 0) {
        items.push({
          title: humanize(slug),
          href: null,
          slug: childSegments,
          isFolder: true,
          children,
          order,
        });
      }
    } else if (entry.isFile() && rawName.endsWith(".md") && rawName !== "index.md") {
      const nameWithoutExt = rawName.slice(0, -3); // remove .md
      const { slug, order } = stripOrder(nameWithoutExt);
      const slugSegments = [...urlSegments, slug];
      const href = "/docs/" + slugSegments.join("/");
      const filePath = path.join(dirPath, rawName);
      const fmTitle = readNavTitle(filePath);

      items.push({
        title: fmTitle || humanize(slug),
        href,
        slug: slugSegments,
        isFolder: false,
        order,
      });
    }
  }

  return items.sort((a, b) => a.order - b.order);
}

/** Returns the full nav tree for the docs sidebar. */
export function getDocNav(): DocNavItem[] {
  return buildNavTree(DOCS_DIR, []);
}

/** Walk the nav tree and return the first leaf (non-folder) item. */
export function findFirstLeaf(nav: DocNavItem[]): DocNavItem | null {
  for (const item of nav) {
    if (!item.isFolder && item.href) return item;
    if (item.isFolder && item.children) {
      const found = findFirstLeaf(item.children);
      if (found) return found;
    }
  }
  return null;
}

// ─── Slug → file resolution ───────────────────────────────────────────────────

/**
 * Given a slug array like ["getting-started", "installation"],
 * find the matching file in content/docs/ — handling numeric prefixes.
 * Returns the absolute file path or null if not found.
 */
function resolveSlugToFile(slugSegments: string[]): string | null {
  let currentDir = DOCS_DIR;

  for (let i = 0; i < slugSegments.length; i++) {
    const segment = slugSegments[i];
    const isLast = i === slugSegments.length - 1;

    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return null;
    }

    if (isLast) {
      // Look for a matching .md file
      const match = entries.find((e) => {
        if (!e.isFile() || !e.name.endsWith(".md")) return false;
        const nameWithoutExt = e.name.slice(0, -3);
        const { slug } = stripOrder(nameWithoutExt);
        return slug === segment;
      });
      if (!match) return null;
      return path.join(currentDir, match.name);
    } else {
      // Look for a matching directory
      const match = entries.find((e) => {
        if (!e.isDirectory()) return false;
        const { slug } = stripOrder(e.name);
        return slug === segment;
      });
      if (!match) return null;
      currentDir = path.join(currentDir, match.name);
    }
  }

  return null;
}

// ─── Page rendering ───────────────────────────────────────────────────────────

/** Render a doc page given its slug segments. Returns null if not found. */
export async function getDocPage(slugSegments: string[]): Promise<DocPage | null> {
  const filePath = resolveSlugToFile(slugSegments);
  if (!filePath) return null;

  let raw: string;
  try {
    raw = fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }

  const { data, content } = matter(raw);
  const frontmatter = data as DocFrontmatter;

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, { theme: "github-dark-dimmed" })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  const lastSegment = slugSegments[slugSegments.length - 1];
  const navTitle = frontmatter.nav_title ?? frontmatter.title ?? humanize(lastSegment);

  return {
    frontmatter,
    htmlContent: String(result),
    navTitle,
  };
}

// ─── Static params ────────────────────────────────────────────────────────────

function collectSlugs(items: DocNavItem[]): { slug: string[] }[] {
  const result: { slug: string[] }[] = [];
  for (const item of items) {
    if (!item.isFolder && item.slug.length > 0) {
      result.push({ slug: item.slug });
    }
    if (item.children) {
      result.push(...collectSlugs(item.children));
    }
  }
  return result;
}

/** Returns all slug arrays for generateStaticParams. */
export function getAllDocSlugs(): { slug: string[] }[] {
  const nav = getDocNav();
  return collectSlugs(nav);
}
