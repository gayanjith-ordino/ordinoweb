# Using the Ordino Portal

The Ordino Portal is your central hub for managing your entire test automation workflow. Once your test scripts are in your Git repository, the portal is where you monitor, run, and share everything — no command line needed.

---

## Navigating the portal

When you log in to the Ordino Portal, you'll see the main navigation in the left sidebar:

| Section | What you'll find here |
|---|---|
| **Dashboard** | An overview of recent test runs, pass/fail rates, and activity across your projects |
| **Test Suite** | All your test scripts, organised by repository and folder structure |
| **Executions** | History of all test runs — on-demand and scheduled |
| **Reports** | Generated reports you can share with stakeholders |
| **Settings** | Repository connections, MCP config, team members, and integrations |

---

## The Dashboard

The Dashboard gives you a quick health check of your test automation at a glance. You'll see:

- **Recent runs** — the last few executions with pass/fail status and duration
- **Trend chart** — pass/fail rates over the past 7 or 30 days
- **Test coverage summary** — how many tests you have across web and API suites
- **Failing tests** — any tests that have been consistently failing, flagged for attention

---

## The Test Suite view

The Test Suite view lists all the tests Ordino has synced from your connected repositories. You can:

- **Browse by folder** — the directory structure mirrors your repo layout
- **Search** — find tests by name, tag, or file path
- **Filter** — view only web tests, API tests, or tests from a specific repository
- **View test details** — click any test to see its full script, recent execution history, and last known status

From the Test Suite view, you can also trigger a run on any individual test or group of tests directly.

---

## Understanding test statuses

Each test in the portal has a status badge based on its most recent execution:

| Status | Meaning |
|---|---|
| ✅ **Passing** | The test ran successfully in the last execution |
| ❌ **Failing** | The test failed in the last execution |
| ⚠️ **Flaky** | The test has produced inconsistent results across recent runs |
| ⏸️ **Not run** | The test hasn't been executed yet |
| 🔄 **Running** | The test is currently executing |

---

## Managing your projects

If you have multiple products or repositories, each one appears as a separate **project** in the portal. You can switch between projects using the project selector at the top of the sidebar.

Within each project you can:

- Set a default branch to sync from
- Configure environment variables for test execution (e.g., base URLs, credentials via secrets)
- Manage team member access

---

## Inviting team members

To give colleagues access to the portal:

1. Go to **Settings → Team**
2. Click **Invite Member**
3. Enter their email address and assign a role:
   - **Admin** — full access including settings and repository management
   - **Engineer** — can run tests and view results, but cannot change settings
   - **Viewer** — read-only access to results and reports (great for stakeholders)
4. They'll receive an invitation email to join your workspace

---

## Next steps

Now that you're familiar with the portal, let's look at how to execute tests and set up scheduled runs.

→ [Executing & Scheduling Tests](/docs/executing-and-scheduling-tests)
