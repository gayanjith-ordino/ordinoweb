import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDocPage, getAllDocSlugs } from "@/lib/docs";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return getAllDocSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocPage(slug);
  if (!doc) return {};
  const title = doc.frontmatter.title ?? doc.navTitle;
  return {
    title: `${title} — Ordino Docs`,
    description: doc.frontmatter.description,
  };
}

export const dynamicParams = false;

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = await getDocPage(slug);
  if (!doc) notFound();

  return (
    <article className="docs-prose max-w-3xl mx-auto px-6 py-10 lg:py-14">
      <div dangerouslySetInnerHTML={{ __html: doc.htmlContent }} />
    </article>
  );
}
