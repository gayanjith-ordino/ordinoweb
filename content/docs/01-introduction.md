# Introduction to Ordino AI

## What is Ordino AI?

Ordino AI is a test automation platform built for the age of agentic development. It bridges the gap between your agentic coding tools — like Claude Code, Cursor, or GitHub Copilot — and production-grade Playwright test automation scripts, so you spend less time wrestling with test setup and more time shipping quality software.

At its core, Ordino AI works through an **MCP (Model Context Protocol) server** that you connect to your preferred agentic coding tool. Once connected, you can describe a test case in plain English or provide a feature file, and Ordino navigates through your product in a test/staging environment and generates reliable, structured Playwright scripts for your web or API products — with greater accuracy and consistency than using agentic coding tools alone or with generic MCP servers of test automation frameworks.

After tests are generated and pushed to your Git repository, the **Ordino Portal** becomes your command centre: view your test suite, trigger runs on demand, schedule executions through your CI/CD pipeline, and share results with your team and stakeholders — all in one place.

---

## Who is Ordino AI for?

Ordino AI is designed for **developers and QA engineers** who are already using (or are moving toward) agentic coding workflows and want a better, more reliable way to generate and manage test automation.

If any of the following sounds familiar, Ordino is built for you:

- You're using AI coding assistants but finding that their test generation is inconsistent or requires heavy manual fixing.
- You're managing test scripts, results, and reports across multiple disconnected tools.
- You want a single platform that covers the full test automation lifecycle — from script generation to scheduled CI/CD execution and stakeholder reporting.

---

## How it fits into your workflow

Ordino AI slots into your existing development workflow without forcing you to change how you write code or manage your repositories.

Here's the high-level picture:

```
Your agentic coding tool (Claude Code / Cursor / GitHub Copilot)
        ↕ connected via Ordino MCP server
    Describe a test case → Ordino generates Playwright scripts
        ↓
    Run tests locally to verify
        ↓
    Push to Git → tests appear in Ordino Portal
        ↓
    Execute on demand or via CI/CD pipeline
        ↓
    View results and reports in Ordino Portal
```

---

## What you get with Ordino AI

- **Ordino MCP Server** — connect your agentic coding tool and generate Playwright scripts for web and API testing
- **Sandbox environment** — a safe space to explore Ordino before connecting your real projects
- **Ordino Portal** — manage integrations, manage your test suite, trigger runs, schedule executions via CI/CD, and view results
- **Stakeholder reports** — share execution summaries with non-technical stakeholders

> **Upcoming Releases:** Test case management and AI-powered root cause analysis — so you can manage everything from test design to failure diagnosis without leaving Ordino.

---

## Next steps

Ready to get started? Head to [Getting Started](./02-getting-started.md) to create your account and explore the sandbox environment.
