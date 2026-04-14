import { ArrowRight, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const trustItems = [
  "Free to start",
  "Connects in 5 minutes",
  "Works with your existing repo",
];

export function CTASection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          {/* Gradient border card */}
          <div className="gradient-border-card relative overflow-hidden">
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.15) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            {/* Decorative orbs */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #f97316, transparent 70%)",
                filter: "blur(40px)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-15 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #a855f7, transparent 70%)",
                filter: "blur(40px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
              >
                Start automating tests
                <br />
                <span className="gradient-text">the right way</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Join developers and QA engineers building reliable test automation
                with AI. Spend less time wrestling with test setup and more time
                shipping quality software.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href="https://portal.staging.ordino.ai/"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-sm bg-purple-600 hover:bg-purple-500 transition-all duration-200 shadow-xl shadow-purple-600/30 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started Free
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/docs"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-medium text-slate-300 hover:text-white text-sm border border-[#2d3748] hover:border-purple-500/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
                >
                  View Documentation
                </a>
              </div>

              {/* Trust bullets */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                    <span className="text-sm text-slate-500">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
