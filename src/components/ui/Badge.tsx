import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider",
        variant === "default" && "bg-purple-500/10 border border-purple-500/25 text-purple-400",
        variant === "success" && "bg-emerald-500/10 border border-emerald-500/25 text-emerald-400",
        variant === "warning" && "bg-amber-500/10 border border-amber-500/25 text-amber-400",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-glow" />
      {children}
    </span>
  );
}
