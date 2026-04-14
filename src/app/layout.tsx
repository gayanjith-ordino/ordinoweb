import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ordino AI — Test Automation for Agentic Development",
  description:
    "Connect Claude Code, Cursor, or GitHub Copilot via MCP. Generate production-grade Playwright tests and manage the full test lifecycle — from script generation to CI/CD execution and stakeholder reporting.",
  keywords: [
    "test automation",
    "MCP server",
    "Playwright",
    "AI testing",
    "Claude Code",
    "Cursor",
    "GitHub Copilot",
    "agentic development",
    "QA automation",
  ],
  authors: [{ name: "Ordino AI" }],
  openGraph: {
    title: "Ordino AI — Test Automation for Agentic Development",
    description:
      "Connect your AI coding tool via MCP. Generate production-grade Playwright tests and manage the full test lifecycle in one platform.",
    url: "https://ordino.ai",
    siteName: "Ordino AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordino AI",
    description:
      "Test automation platform built for the age of agentic development.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#020817] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
