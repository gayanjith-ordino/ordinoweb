import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { getDocNav } from "@/lib/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const nav = getDocNav();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#020817" }}>
      <Navbar />
      <div className="flex flex-1 pt-16">
        <DocsSidebar nav={nav} />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
