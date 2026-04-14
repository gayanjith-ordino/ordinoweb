# Frequently Asked Questions

## General

### What is Ordino AI?

Ordino AI is a test automation platform that connects to your agentic coding tools (Claude Code, Cursor, GitHub Copilot, etc.) via an MCP server to generate reliable Playwright test scripts for web and API products. The Ordino Portal lets you manage, execute, schedule, and report on your tests — all in one place.

### Who is Ordino AI for?

Ordino is built for developers and QA engineers who are already using (or want to use) AI-powered coding tools and want a better, more consistent way to generate and manage test automation.

### What kinds of tests can Ordino generate?

Currently Ordino generates:

- **Playwright web tests** — end-to-end UI tests for web applications
- **Playwright API tests** — HTTP request/response tests for REST APIs

Support for additional frameworks and test types is planned for future releases.

### Why is Ordino more accurate than just asking my coding tool to write tests?

Agentic coding tools are general-purpose — they can write tests, but they don't have deep context about Playwright's best practices, selector strategies, wait patterns, or test structure. Ordino's MCP server adds that specialised context, producing tests that are more reliable, better structured, and easier to maintain.

---

## Setup & connection

### Which agentic coding tools does Ordino support?

Any tool that supports the Model Context Protocol (MCP) can connect to Ordino. This includes Claude Code, Cursor, GitHub Copilot (VS Code), and others. See [Connecting Your Agentic Coding Tool](./03-connecting-your-coding-tool.md) for specific setup guides.

### <a name="connection-issues"></a>My coding tool isn't connecting to the Ordino MCP server. What should I check?

1. **Check your MCP Server URL** — make sure you copied it correctly from **Settings → MCP Connection** in the portal. It should start with `https://`.
2. **Check your API key** — ensure it's being passed as a Bearer token in the Authorization header.
3. **Restart your coding tool** — some tools require a restart after adding a new MCP server.
4. **Check your network** — if you're behind a corporate proxy or VPN, the connection may be blocked. Try on a different network to confirm.
5. **Rotate your API key** — if you suspect the key was entered incorrectly, generate a new one from **Settings → MCP Connection** and update your config.

If the issue persists, contact [support@ordino.ai](mailto:support@ordino.ai) with your tool name and a description of the error.

### Can I use Ordino with multiple coding tools at the same time?

Yes. Your Ordino MCP server URL and API key work across any number of tools. You can have Cursor and Claude Code both connected simultaneously.

---

## Test generation

### Can I generate tests for a private/internal application?

Yes. The Ordino MCP server generates tests based on the description or feature file you provide — it doesn't need to access your application directly. Your tests will reference your app's URL, but Ordino doesn't crawl or connect to it during generation.

### My generated test has the wrong selector. How do I fix it?

Ask your coding tool to update it. For example: *"Update the selector for the email field to use `data-testid='email-input'` instead."* If it happens frequently, try being more specific in your test descriptions — including data-testid attributes or ARIA labels in your prompt leads to more accurate selectors.

### Can Ordino generate tests from an existing spec or test plan document?

Yes. You can paste the content of any test plan, spec, or user story into your prompt and ask Ordino to generate tests from it. The more detail in the input, the better the output.

---

## The Ordino Portal

### How long does it take for tests to appear in the portal after I push to Git?

Usually within 30–60 seconds of your push being received by your Git provider.

### Can I give a colleague access to view results without giving them edit access?

Yes. When inviting team members (**Settings → Team**), assign them the **Viewer** role. Viewers can see all results and reports but cannot run tests, change settings, or modify anything.

### Can I share results with someone who doesn't have an Ordino account?

Yes. Any execution result or generated report can be shared via a public link. See [Viewing Results & Reports](./09-viewing-results-and-reports.md) for instructions.

---

## CI/CD & scheduling

### Does Ordino support parallel test execution?

Yes. When you run a suite, Ordino executes tests in parallel automatically, significantly reducing total run time for large suites.

### Can I set up Ordino to run tests on every pull request?

Yes. Use the Ordino API in your CI/CD pipeline to trigger a run on pull request events. See the [GitHub Actions example](./08-executing-and-scheduling-tests.md) in the Executing & Scheduling guide.

### What happens if a scheduled run fails?

You'll receive a notification (if you've configured them in **Settings → Notifications**). The failed run will appear in the **Executions** tab with full details on which tests failed and why.

---

## Pricing & plans

### Is there a free tier?

Please check [ordino.ai/pricing](https://ordino.ai/pricing) for the most up-to-date information on available plans.

### Can I use Ordino during the sandbox phase without connecting a real project?

Absolutely. The sandbox environment is available to all users from day one and lets you try Ordino with no commitment. See [Getting Started](./02-getting-started.md) for details.

---

## What's coming next?

After the June release, Ordino plans to introduce:

- **Test case management** — organise, track, and link your manual and automated test cases in one place
- **AI-powered root cause analysis** — automatically diagnose why a test failed based on the error, trace, and recent code changes
- **Expanded integrations** — deeper connections with Jira, Linear, and other project management tools

Have a feature request? Reach out to us at [feedback@ordino.ai](mailto:feedback@ordino.ai) — we'd love to hear from you.
