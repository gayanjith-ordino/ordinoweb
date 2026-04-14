# Viewing Results & Reports

After tests run, the Ordino Portal gives you a detailed view of what passed, what failed, and how your test suite is performing over time. You can also generate shareable reports for different stakeholders — from engineering teams to non-technical managers.

---

## Viewing execution results

To view the results of a test run:

1. Go to the **Executions** tab in the sidebar
2. Click on any execution to open the results view

### The results view

The results view shows:

- **Summary bar** — total tests, passed, failed, skipped, and total duration
- **Test list** — each test with its status, duration, and browser/environment it ran on
- **Filters** — filter by status (passed / failed / skipped) to focus on what matters

Click any individual test to see:

- **Test steps** — a step-by-step breakdown of what the test did
- **Error message** — the exact failure reason if the test failed
- **Screenshot** — a screenshot captured at the point of failure
- **Trace** — a full Playwright trace you can replay to see exactly what happened in the browser
- **Logs** — console and network logs captured during the test run

This gives you everything you need to understand a failure without leaving the portal.

---

## Tracking trends over time

The **Dashboard** shows how your test suite is trending:

- **Pass rate chart** — see whether quality is improving or declining over time
- **Flakiness tracker** — tests that inconsistently pass or fail are surfaced automatically
- **Slowest tests** — tests taking significantly longer than average, which may indicate performance issues

Use the date range picker to zoom in on a specific period (e.g., the last sprint, the last release).

---

## Generating reports

Ordino makes it easy to create polished reports you can share with different audiences.

### How to generate a report

1. Go to the **Reports** tab
2. Click **New Report**
3. Configure the report:
   - **Execution(s)** — select one or more runs to include (e.g., a single release run, or a week of nightly runs)
   - **Report type** — choose a template suited to your audience:
     - **Engineering summary** — detailed pass/fail breakdown with error details
     - **Management summary** — high-level pass rate, trends, and key failures without technical detail
     - **Release sign-off** — a formal report confirming which tests passed/failed for a given release
   - **Format** — PDF or HTML
4. Click **Generate Report**

Reports are saved in the Reports tab and can be downloaded or shared via a link.

---

## Sharing results with your team

### Share a report link

Any generated report can be shared via a link. The recipient doesn't need an Ordino account to view it — the link is publicly accessible (but unguessable).

To get the link:
1. Open a report from the **Reports** tab
2. Click **Share**
3. Copy the shareable link

### Share individual execution results

You can also share a direct link to any specific execution run:

1. Open the execution from the **Executions** tab
2. Click **Share** in the top right
3. Copy the link

This is useful for sharing a specific failed run with a developer or attaching it to a bug ticket.

---

## Configuring result notifications

To get notified when tests fail or when a scheduled run completes:

1. Go to **Settings → Notifications**
2. Configure:
   - **Email notifications** — get an email when a run finishes or when failures exceed a threshold
   - **Webhook** — send a POST request to a URL of your choice (useful for Slack, Teams, or PagerDuty integrations)
3. Save your preferences

---

## Coming soon: Root cause analysis

In a future release, Ordino will introduce **AI-powered root cause analysis** directly in the portal. When a test fails, Ordino will automatically analyse the error, trace, and recent code changes to suggest the most likely cause — helping your team diagnose and fix failures faster than ever.

Stay tuned for updates on this feature.

---

## You've completed the core workflow

You now know everything you need to take a test from idea to scheduled execution and reporting with Ordino AI. If you have questions, check the [FAQ](./10-faq.md) or reach out to our support team.
