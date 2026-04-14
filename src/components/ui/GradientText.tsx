import { clsx } from "clsx";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "cool" | "warm";
}

export function GradientText({ children, className, variant = "cool" }: GradientTextProps) {
  return (
    <span
      className={clsx(
        variant === "cool" ? "gradient-text" : "gradient-text-warm",
        className
      )}
    >
      {children}
    </span>
  );
}
