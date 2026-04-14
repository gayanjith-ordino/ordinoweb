import Link from "next/link";

export default function DocsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <p className="text-6xl font-bold mb-4" style={{ color: "#c084fc" }}>404</p>
      <h1 className="text-2xl font-semibold text-white mb-2">Page not found</h1>
      <p className="mb-8" style={{ color: "#64748b" }}>
        This documentation page doesn&apos;t exist yet.
      </p>
      <Link
        href="/docs"
        className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
        style={{ background: "#9333ea" }}
      >
        Back to Docs
      </Link>
    </div>
  );
}
