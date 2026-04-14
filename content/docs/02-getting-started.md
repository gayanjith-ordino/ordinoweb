# Getting Started with Ordino AI

This guide walks you through creating your Ordino account, getting onboarded, and exploring the sandbox environment — so you're ready to generate your first tests.

---

## Step 1: Create your account

1. Go to [ordino.ai](https://ordino.ai)
2. Click **Get Started** (or **Sign Up**)
3. Enter your name, work email, and a password, then click **Create Account**
4. Check your inbox for a verification email and click the confirmation link

> **Already have an account?** Head straight to [ordino.ai/login](https://ordino.ai/login).

---

## Step 2: Complete onboarding

After verifying your email, you'll be taken through a short onboarding flow. This helps Ordino set up your workspace correctly.

You'll be asked a few quick questions:

- **What kind of projects do you work on?** (web apps, APIs, or both)
- **What is your team size?** (number of people in your team)
- **Which agentic coding tool do you use?** (Claude Code, Cursor, GitHub Copilot, etc.)
- **Your preferred test automation framework** — Ordino AI only supports Playwright framework for agentic workflows but it supports multiple other frameworks for manual workflows.

This takes about 2 minutes and you can update any of these settings later in your account preferences.

---

## Step 3: Explore the sandbox workspace

Once onboarding is complete, you'll land in your **Sandbox workspace**. This is a safe, pre-configured workspace you can use to:

- Try out the Ordino MCP server without touching any of your real projects
- Generate test scripts against a sample web application
- Explore the Ordino Portal with example test results already populated

The sandbox is completely isolated from any production or real project data. Feel free to experiment — nothing here affects your actual codebase.

### What's in the sandbox?

| Component | Description |
|---|---|
| Sample web app | A simple to-do application you can write tests against |
| Sample API | A REST API with a few common endpoints (GET, POST, DELETE) |
| Example test results | Pre-populated execution history so you can explore the results UI |

---

## Step 4: Get your MCP connection details

Before you can generate tests, you'll need to connect your agentic coding tool to the Ordino MCP server. Your connection details are available in the Ordino Portal:

1. In the sidebar, go to **Settings → MCP Connection**
2. You'll see your personal **MCP server URL** and **API key**
3. Keep this tab open — you'll need these details in the next step

> **Security tip:** Your API key is tied to your account. Don't share it or commit it to version control. You can rotate it at any time from the Settings page.

---

## You're all set

Your account is ready and your sandbox is waiting. Next up: connect your agentic coding tool to the Ordino MCP server.

→ [Connecting Your Agentic Coding Tool](./03-connecting-your-coding-tool.md)
