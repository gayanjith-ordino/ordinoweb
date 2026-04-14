"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";

const terminalLines = [
  { delay: 0.8, color: "text-slate-500", text: "# Claude Code with Ordino MCP connected" },
  { delay: 1.2, color: "text-slate-300", text: "> Generate a checkout e2e test, login through payment" },
  { delay: 2.0, color: "text-purple-400", text: "◆ Ordino MCP  Analysing checkout flow..." },
  { delay: 2.6, color: "text-purple-400", text: "◆ Ordino MCP  Generating Playwright script..." },
  { delay: 3.2, color: "text-emerald-400", text: "✓ tests/checkout/e2e.spec.ts  created" },
  { delay: 3.6, color: "text-emerald-400", text: "✓ 5 scenarios · 18 assertions · 0 issues" },
  { delay: 4.0, color: "text-cyan-400", text: "✓ Push to Git → synced in Ordino Portal" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Radial fade mask over grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, #020817 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge className="mb-8">AI first test automation</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold tracking-tight leading-[1.08] text-white max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            Test automation built for
            <br />
            <GradientText>the age of agentic</GradientText>{" "}development
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            Describe a test in natural language — Ordino generates reliable, production-grade{" "}
            <span className="text-slate-300">Playwright scripts</span> and manages the full
            lifecycle from generation to stakeholder reporting.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <a
              href="https://portal.staging.ordino.ai/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white text-sm bg-purple-600 hover:bg-purple-500 transition-all duration-200 shadow-lg shadow-purple-600/25 hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white text-sm border border-[#1e2432] hover:border-purple-500/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200"
            >
              Read the Docs
              <ChevronRight size={16} className="opacity-60" />
            </Link>
          </motion.div>

          {/* Trust micro-text */}
          <motion.p
            className="mt-5 text-xs text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            No credit card required &nbsp;·&nbsp; Works with your existing Git repos &nbsp;·&nbsp; Connects in under 5 minutes
          </motion.p>

          {/* Terminal mockup */}
          <motion.div
            className="mt-16 w-full max-w-2xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="rounded-2xl overflow-hidden border border-[#1e2432] bg-[#0d1117] shadow-2xl shadow-black/60">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e2432] bg-[#111827]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <span className="ml-2 text-xs text-slate-500 font-mono">claude — bash</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed min-h-[220px]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className={`${line.color} mb-1.5`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: line.delay }}
                  >
                    {line.text}
                  </motion.div>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.2 }}
                >
                  <span className="terminal-cursor" aria-hidden="true" />
                </motion.span>
              </div>
            </div>

            {/* Glow beneath terminal */}
            <div
              className="h-px mt-0 mx-8 rounded-full opacity-60"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
                filter: "blur(4px)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
