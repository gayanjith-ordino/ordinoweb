"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocNavItem } from "@/lib/docs";

interface Props {
  nav: DocNavItem[];
}

function NavItem({ item, depth = 0 }: { item: DocNavItem; depth?: number }) {
  const pathname = usePathname();
  const isActive = item.href !== null && pathname === item.href;

  if (item.isFolder) {
    return (
      <div>
        <span
          className="block px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style={{ color: "#64748b", paddingLeft: `${0.75 + depth * 0.75}rem` }}
        >
          {item.title}
        </span>
        {item.children && (
          <ul>
            {item.children.map((child) => (
              <li key={child.slug.join("/")}>
                <NavItem item={child} depth={depth + 1} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href!}
      className="flex items-center py-1.5 text-sm rounded-r-md transition-colors duration-150"
      style={{
        paddingLeft: `${0.75 + depth * 0.75}rem`,
        paddingRight: "0.75rem",
        color: isActive ? "#c084fc" : "#94a3b8",
        background: isActive ? "rgba(168,85,247,0.08)" : "transparent",
        borderLeft: isActive ? "2px solid #c084fc" : "2px solid transparent",
        fontWeight: isActive ? 500 : 400,
      }}
    >
      {item.title}
    </Link>
  );
}

export function DocsSidebar({ nav }: Props) {
  return (
    <aside className="w-64 shrink-0 hidden lg:flex flex-col border-r" style={{ borderColor: "#1e2432" }}>
      <nav
        className="sticky top-16 overflow-y-auto py-6 px-2 flex flex-col gap-4"
        style={{ height: "calc(100vh - 4rem)" }}
        aria-label="Documentation navigation"
      >
        <div className="mb-1 px-3">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#475569" }}>
            Documentation
          </span>
        </div>
        <ul className="flex flex-col gap-0.5">
          {nav.map((item) => (
            <li key={item.slug.join("/")}>
              <NavItem item={item} depth={0} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
