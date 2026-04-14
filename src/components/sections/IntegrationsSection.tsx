import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { INTEGRATIONS } from "@/lib/constants";

export function IntegrationsSection() {
  const aiTools = INTEGRATIONS.filter((i) => i.group === "ai-tools");
  const gitTools = INTEGRATIONS.filter((i) => i.group === "git");

  return (
    <section
      id="integrations"
      className="section-padding relative overflow-hidden"
      aria-labelledby="integrations-heading"
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
            Integrations
          </p>
          <h2
            id="integrations-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Works with the tools
            <br />
            <span className="text-slate-400">you already use</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto">
            Slots into your existing development workflow without forcing you to
            change how you write code or manage your repositories.
          </p>
        </AnimateOnScroll>

        {/* Group: AI Coding Tools */}
        <AnimateOnScroll className="mb-10">
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-6 font-medium">
            AI Coding Tools
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {aiTools.map((integration) => (
              <div
                key={integration.name}
                className="integration-pill flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0d1117] border border-[#1e2432]"
              >
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <Image
                    src={`/integrations/${integration.logo}.${integration.ext ?? "svg"}`}
                    alt={`${integration.name} logo`}
                    width={28}
                    height={28}
                    className="opacity-80"
                  />
                </div>
                <span className="text-sm font-medium text-slate-300">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Divider with MCP label */}
        <AnimateOnScroll className="flex items-center gap-4 mb-10 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-[#1e2432]" />
          <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest px-2">
            via MCP
          </span>
          <div className="flex-1 h-px bg-[#1e2432]" />
        </AnimateOnScroll>

        {/* Group: Git Platforms */}
        <AnimateOnScroll>
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-6 font-medium">
            Git Platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {gitTools.map((integration) => (
              <div
                key={integration.name}
                className="integration-pill flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0d1117] border border-[#1e2432]"
              >
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <Image
                    src={`/integrations/${integration.logo}.${integration.ext ?? "svg"}`}
                    alt={`${integration.name} logo`}
                    width={28}
                    height={28}
                    className="opacity-80"
                  />
                </div>
                <span className="text-sm font-medium text-slate-300">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Coming soon integrations */}
        <AnimateOnScroll className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            More integrations coming —{" "}
            <span className="text-slate-500">Jira, Slack, Teams, Azure DevOps, PagerDuty</span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
