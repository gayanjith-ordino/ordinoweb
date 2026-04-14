// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Integrations", href: "#integrations" },
  { label: "Docs", href: "/docs" },
];

// ─── Pain Points ─────────────────────────────────────────────────────────────
export interface PainPoint {
  icon: string;
  title: string;
  body: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "Bot",
    title: "Inconsistent test generation",
    body: "AI assistants are general-purpose. They produce tests that fail to follow your conventions, miss edge cases, and require heavy manual cleanup before they're usable in production.",
  },
  {
    icon: "Layers",
    title: "Fragmented tooling",
    body: "Test scripts live in one place, results in another, reports in a third. Your team wastes hours stitching together a picture of test health across disconnected tools.",
  },
  {
    icon: "AlertTriangle",
    title: "No lifecycle ownership",
    body: "From script generation to CI/CD execution to stakeholder reporting — there's no single platform that owns the full journey. Every handoff is a place things can go wrong.",
  },
];

// ─── How It Works Steps ───────────────────────────────────────────────────────
export interface Step {
  number: string;
  title: string;
  body: string;
  code?: string;
  codeLanguage?: string;
  badge?: string;
}

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: "01",
    title: "Connect your coding tool via MCP",
    body: "Add the Ordino MCP (Model Context Protocol) server to Claude Code, Cursor, or GitHub Copilot in under 5 minutes. A single command or config entry is all it takes.",
    code: `$ claude mcp add --transport http \\
    ordino https://mcp.ordino.ai \\
    --header "Authorization: Bearer YOUR_TOKEN"

✓ Ordino MCP server connected`,
    badge: "5 min setup",
  },
  {
    number: "02",
    title: "Describe your test in plain English or Gherkin",
    body: "Tell Ordino what to test — a login flow, a checkout, an API endpoint. Ordino navigates your staging environment and generates a structured Playwright script with best practices baked in: retries, waits, and resilient selectors.",
    code: `> "Generate an end-to-end test for the
  checkout flow — add to cart, enter
  shipping details, complete payment"

✓ Generating test/checkout/e2e.spec.ts
✓ 3 scenarios · 14 assertions · 0 issues`,
    badge: "Plain English → Playwright",
  },
  {
    number: "03",
    title: "Push to Git — tests appear automatically",
    body: "Connect GitHub, GitLab, or Bitbucket once. Every time you push test scripts, Ordino Portal detects and registers them automatically within 30–60 seconds. No manual imports.",
    code: `$ git push origin main

remote: Ordino Portal syncing...
remote: ✓ 3 new test files detected
remote: ✓ test suite updated (47 total)
remote: View: ordino.ai/portal/tests`,
    badge: "Auto-sync in <60s",
  },
  {
    number: "04",
    title: "Run on demand or via CI/CD",
    body: "Trigger tests from the portal with one click, schedule them on a cron, or integrate via the REST API into your existing CI/CD pipeline — GitHub Actions, Jenkins, CircleCI, anything.",
    code: `# GitHub Actions example
- name: Run Ordino tests
  run: |
    curl -X POST https://api.ordino.ai/v1/run \\
      -H "Authorization: Bearer \${{ secrets.ORDINO_TOKEN }}" \\
      -d '{"suite": "checkout", "env": "staging"}'`,
    badge: "REST API + Portal",
  },
  {
    number: "05",
    title: "View results and share stakeholder reports",
    body: "Trace viewer, failure screenshots, flakiness detection, and console logs — everything in one place. Generate Engineering, Management, or Release sign-off reports in seconds and share a public link.",
    code: `✓ 44 passed  ✗ 2 failed  ~ 1 flaky
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✗ checkout › payment › card declined
  Screenshot captured · Trace saved

📊 Report generated: ordino.ai/r/abc123`,
    badge: "Engineering · Management · Release",
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export interface Feature {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const FEATURES: Feature[] = [
  {
    icon: "Plug",
    title: "MCP Server Integration",
    description: "Connect Claude Code, Cursor, or GitHub Copilot with a single config. Ordino adds specialized test context that generic AI tools lack.",
    highlight: true,
  },
  {
    icon: "Code2",
    title: "Playwright Test Generation",
    description: "Web and API tests generated with best practices: role-based selectors, retry logic, async handling, and consistent file structure.",
    highlight: true,
  },
  {
    icon: "GitBranch",
    title: "Git Integration",
    description: "GitHub, GitLab, and Bitbucket. Push once, tests sync automatically within 60 seconds. Branch watching with smart test detection.",
  },
  {
    icon: "LayoutDashboard",
    title: "Ordino Portal",
    description: "Central dashboard for your entire test lifecycle — runs, results, scheduling, and reports. No command line required.",
  },
  {
    icon: "Calendar",
    title: "Smart Scheduling",
    description: "Cron-based scheduling for nightly runs, release validation, and continuous monitoring. Hourly, daily, weekly, or custom expressions.",
  },
  {
    icon: "Webhook",
    title: "CI/CD REST API",
    description: "Trigger test runs from any pipeline. First-class GitHub Actions examples included. Route by project, suite, or environment.",
  },
  {
    icon: "FileBarChart",
    title: "Stakeholder Reports",
    description: "Engineering summary, management overview, and release sign-off templates. Share a public link — no account required to view.",
  },
  {
    icon: "Shield",
    title: "Role-Based Access",
    description: "Admin, Engineer, and Viewer roles — right access for every team member, including non-technical stakeholders and executives.",
  },
  {
    icon: "Bug",
    title: "Trace Viewer & Flakiness",
    description: "Full Playwright traces, failure screenshots, console and network logs, and automatic flakiness detection across runs.",
  },
];

// ─── Integrations ─────────────────────────────────────────────────────────────
export interface Integration {
  name: string;
  group: "ai-tools" | "git";
  logo: string;
  ext?: string; // file extension, defaults to "svg"
}

export const INTEGRATIONS: Integration[] = [
  { name: "Claude Code", group: "ai-tools", logo: "claude-code" },
  { name: "Cursor", group: "ai-tools", logo: "cursor", ext: "png" },
  { name: "GitHub Copilot", group: "ai-tools", logo: "github-copilot", ext: "webp" },
  { name: "GitHub", group: "git", logo: "github" },
  { name: "GitLab", group: "git", logo: "gitlab" },
  { name: "Bitbucket", group: "git", logo: "bitbucket" },
];

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Integrations", href: "#integrations" },
    { label: "Changelog", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Getting Started", href: "/docs/getting-started" },
    { label: "MCP Setup Guide", href: "/docs/connecting-your-coding-tool" },
    { label: "API Reference", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Support", href: "/support" },
  ],
};

// ─── Trust items ──────────────────────────────────────────────────────────────
export const TRUST_ITEMS = [
  "No credit card required",
  "Works with your existing Git repos",
  "Connects in under 5 minutes",
];
