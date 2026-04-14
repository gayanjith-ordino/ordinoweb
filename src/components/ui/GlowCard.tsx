import { clsx } from "clsx";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  accentColor?: "indigo" | "amber" | "red" | "emerald";
}

export function GlowCard({
  children,
  className,
  as: Tag = "div",
  accentColor,
}: GlowCardProps) {
  return (
    <Tag
      className={clsx(
        "glow-card relative rounded-2xl bg-[#0d1117] border border-[#1e2432] overflow-hidden",
        accentColor === "amber" && "border-l-amber-500/40 border-l-2",
        accentColor === "red" && "border-l-red-500/30 border-l-2",
        accentColor === "emerald" && "border-l-emerald-500/40 border-l-2",
        className
      )}
    >
      {/* Subtle inner glow top edge */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
        }}
      />
      {children}
    </Tag>
  );
}
