import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — Ordino AI",
  description: "Get help with Ordino AI. Reach our support team by email.",
};

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-24 overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(168,85,247,0.12) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl w-full mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-8">
              <Mail size={28} className="text-purple-400" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
              How can we help?
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Our team is here to help you get the most out of Ordino. Send us an
              email and we&apos;ll get back to you as soon as possible.
            </p>

            <a
              href="mailto:support@ordino.ai"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-purple-600 hover:bg-purple-500 transition-all duration-200 shadow-xl shadow-purple-600/30 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail size={16} />
              support@ordino.ai
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
