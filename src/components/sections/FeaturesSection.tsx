import {
  Plug, Code2, GitBranch, LayoutDashboard,
  Calendar, Webhook, FileBarChart, Shield, Bug,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { GlowCard } from "@/components/ui/GlowCard";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Plug, Code2, GitBranch, LayoutDashboard,
  Calendar, Webhook, FileBarChart, Shield, Bug,
};

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-padding relative"
      aria-labelledby="features-heading"
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Subtle bg radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(168,85,247,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
            Features
          </p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Everything you need.
            <br />
            <span className="text-slate-400">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto">
            From test generation to CI/CD execution and stakeholder reporting —
            the full lifecycle, unified.
          </p>
        </AnimateOnScroll>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <AnimateOnScroll
                key={feature.title}
                delay={Math.floor(i / 3) * 0.08 + (i % 3) * 0.06}
              >
                <GlowCard
                  as="article"
                  className={`p-6 h-full flex flex-col ${
                    feature.highlight
                      ? "border-purple-500/25 bg-purple-950/20"
                      : ""
                  }`}
                >
                  {feature.highlight && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/25 uppercase tracking-wider">
                        Core
                      </span>
                    </div>
                  )}
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 shrink-0">
                    <Icon size={16} className="text-purple-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </GlowCard>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Coming soon strip */}
        <AnimateOnScroll className="mt-10">
          <div className="rounded-2xl border border-dashed border-[#1e2432] bg-[#0d1117]/50 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
            <p className="text-sm text-slate-500 sm:border-l sm:border-[#1e2432] sm:pl-4">
              <span className="text-slate-300">Test case management</span> &nbsp;·&nbsp;
              <span className="text-slate-300">AI-powered root cause analysis</span> &nbsp;·&nbsp;
              <span className="text-slate-300">Jira &amp; Linear integrations</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
