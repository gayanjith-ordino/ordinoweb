# Executing & Scheduling Tests

The Ordino Portal lets you run your tests on demand with a single click, or schedule them to run automatically as part of your CI/CD pipeline. This page covers both approaches.

---

## Running tests on demand

You can trigger a test run at any time from the portal — no need to open a terminal or push a commit.

### Run a single test

1. Go to **Test Suite** in the sidebar
2. Find the test you want to run
3. Click the **▶ Run** button next to it
4. The test will execute and results will appear in the **Executions** tab

### Run a test suite (folder or tag)

1. In **Test Suite**, navigate to a folder or use the filter to select a group of tests
2. Click **Run All** at the top of the list
3. All selected tests will run in parallel and results will be available in the **Executions** tab

### Run with a specific environment

If you have multiple environments configured (e.g., staging, UAT, production):

1. Click **▶ Run** on a test or suite
2. In the run dialog, select the **Environment** from the dropdown
3. Click **Confirm & Run**

Environment variables (like base URL and credentials) are applied automatically based on your environment configuration in **Settings → Environments**.

---

## Scheduling tests via CI/CD

For automated test runs triggered by your CI/CD pipeline, Ordino provides a simple API and pre-built integrations.

### Using the Ordino API

You can trigger a test run from any CI/CD tool (GitHub Actions, GitLab CI, CircleCI, Jenkins, etc.) using a simple API call:

```bash
curl -X POST https://api.ordino.ai/v1/runs \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "YOUR_PROJECT_ID",
    "suite": "all",
    "environment": "staging"
  }'
```

You can scope the run to a specific folder or tag:

```bash
# Run only API tests
-d '{ "project_id": "...", "suite": "tests/api/", "environment": "staging" }'

# Run tests tagged @smoke
-d '{ "project_id": "...", "tags": ["smoke"], "environment": "staging" }'
```

Your **project ID** is available in **Settings → Project** in the portal.

---

### GitHub Actions example

Here's a ready-to-use GitHub Actions workflow that runs your Ordino tests on every push to `main`:

```yaml
name: Run Ordino Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Ordino test run
        run: |
          curl -X POST https://api.ordino.ai/v1/runs \
            -H "Authorization: Bearer ${{ secrets.ORDINO_API_KEY }}" \
            -H "Content-Type: application/json" \
            -d '{
              "project_id": "${{ secrets.ORDINO_PROJECT_ID }}",
              "suite": "all",
              "environment": "staging"
            }'
```

Store your `ORDINO_API_KEY` and `ORDINO_PROJECT_ID` as GitHub Actions secrets.

---

### Scheduling recurring runs

You can also set up a recurring schedule (e.g., run the full test suite every night) directly from the portal:

1. Go to **Settings → Schedules**
2. Click **New Schedule**
3. Configure:
   - **Name** — e.g., "Nightly regression"
   - **Suite** — which tests to run (all, a folder, or a tag)
   - **Environment** — which environment to target
   - **Schedule** — set the frequency using a simple picker (hourly, daily, weekly) or a cron expression for full control
4. Click **Save Schedule**

Scheduled runs will appear in the **Executions** tab with a 🕐 icon to distinguish them from manual runs.

---

## Monitoring a run in progress

While a run is executing, you can watch it in real time:

1. Go to the **Executions** tab
2. Click on the active run
3. You'll see each test's status update live as it completes

Tests run in parallel where possible, so a large suite typically completes much faster than running tests sequentially.

---

## Next steps

Once your tests have run, head to the Results & Reports section to analyse what happened and share summaries with your team.

→ [Viewing Results & Reports](./09-viewing-results-and-reports.md)
