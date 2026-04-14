import { Bot, Layers, AlertTriangle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { GlowCard } from "@/components/ui/GlowCard";
import { PAIN_POINTS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bot,
  Layers,
  AlertTriangle,
};

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-padding relative overflow-hidden"
      aria-labelledby="problem-heading"
    >
      {/* Faint horizontal separator glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
            The Problem
          </p>
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Your AI coding tools weren&apos;t built
            <br className="hidden sm:block" />
            for test automation
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Agentic coding tools are general-purpose. Without specialised context they
            produce tests that are inconsistent, fragile, and scattered across tools
            you&apos;ll have to stitch together yourself.
          </p>
        </AnimateOnScroll>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <AnimateOnScroll key={point.title} delay={i * 0.12}>
                <GlowCard
                  as="article"
                  accentColor="amber"
                  className="p-7 h-full flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 shrink-0">
                    <Icon size={18} className="text-amber-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {point.body}
                  </p>
                </GlowCard>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bridge statement */}
        <AnimateOnScroll className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-purple-500/5 border border-purple-500/15">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <p className="text-sm text-slate-300">
              Ordino adds specialised test context that makes AI-generated tests{" "}
              <span className="text-white font-medium">more accurate, structured, and maintainable.</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
