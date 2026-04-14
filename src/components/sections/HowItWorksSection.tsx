import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding relative overflow-hidden"
      aria-labelledby="how-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(168,85,247,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-20">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            From prompt to passing test —
            <br className="hidden sm:block" />
            <span className="gradient-text">in minutes</span>
          </h2>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const isLast = i === HOW_IT_WORKS_STEPS.length - 1;
            return (
              <AnimateOnScroll
                key={step.number}
                delay={0.08}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div className={`relative flex gap-6 lg:gap-10 ${isLast ? "" : "pb-12"}`}>
                  {/* Left: number + connector */}
                  <div className="relative flex flex-col items-center shrink-0">
                    {/* Number bubble */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-purple-400 font-mono">
                        {step.number}
                      </span>
                    </div>
                    {/* Connecting line */}
                    {!isLast && (
                      <div
                        className="flex-1 w-px mt-3"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(168,85,247,0.4), rgba(168,85,247,0.05))",
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="flex-1 min-w-0 pb-2">
                    {/* Badge */}
                    {step.badge && (
                      <span className="inline-block mb-3 px-2.5 py-1 rounded-md text-[10px] font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 uppercase tracking-wider">
                        {step.badge}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-5">
                      {step.body}
                    </p>

                    {/* Code block */}
                    {step.code && (
                      <div className="rounded-xl overflow-hidden border border-[#1e2432] bg-[#0d1117]">
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1e2432] bg-[#111827]">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                          </div>
                          <span className="text-[10px] text-slate-600 font-mono ml-1">
                            {step.codeLanguage ?? "bash"}
                          </span>
                        </div>
                        <pre className="p-4 text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                          {step.code.split("\n").map((line, li) => {
                            // Colour specific prefixes
                            const green = line.startsWith("✓") || line.startsWith("remote: ✓");
                            const indigo = line.startsWith("◆");
                            const cyan = line.startsWith("📊");
                            const comment = line.startsWith("#") || line.startsWith("//");
                            const red = line.startsWith("✗");
                            const muted = line.startsWith("━");
                            return (
                              <span
                                key={li}
                                className={`block ${
                                  green ? "text-emerald-400" :
                                  indigo ? "text-purple-400" :
                                  cyan ? "text-cyan-400" :
                                  comment ? "text-slate-600" :
                                  red ? "text-red-400" :
                                  muted ? "text-slate-600" :
                                  "text-slate-300"
                                }`}
                              >
                                {line || " "}
                              </span>
                            );
                          })}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
