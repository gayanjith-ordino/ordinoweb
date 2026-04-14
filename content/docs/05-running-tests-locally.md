# Running Tests Locally

Before pushing your generated tests to your Git repository, it's a good idea to run them locally. This lets you quickly catch any issues — like a selector that doesn't match your app's current markup — and fix them before they reach your CI/CD pipeline.

---

## Prerequisites

Make sure you have the following installed in your project:

- **Node.js** v18 or later
- **Playwright** — if you haven't installed it yet, run:

```bash
npm init playwright@latest
```

This installs Playwright and sets up the default configuration. If Playwright is already set up in your project, skip this step.

---

## Running all generated tests

From your project root, run:

```bash
npx playwright test
```

This will execute all `.spec.ts` files in your test directory and output a summary in the terminal.

---

## Running a specific test file

To run just the test you generated:

```bash
npx playwright test tests/login.spec.ts
```

Replace `tests/login.spec.ts` with the path to your generated file.

---

## Running tests with a visible browser

By default, Playwright runs tests in headless mode (no browser window). If you want to see what's happening — which is especially useful when debugging — use the `--headed` flag:

```bash
npx playwright test --headed
```

---

## Using Playwright's UI mode

For a richer debugging experience, Playwright's UI mode gives you a visual test runner with step-by-step playback and a DOM snapshot viewer:

```bash
npx playwright test --ui
```

This is highly recommended when you want to understand exactly where a test is failing.

---

## Interpreting test results

After running, you'll see an output like this:

```
Running 3 tests using 3 workers

  ✓ login.spec.ts:5 › User Login › Successful login with valid credentials (1.2s)
  ✓ login.spec.ts:20 › User Login › Redirect to dashboard after login (0.9s)
  ✗ login.spec.ts:35 › User Login › Show error for invalid credentials (2.1s)

  1 failed
```

For any failing test, Playwright generates a detailed error message and (by default) a screenshot and trace file in the `test-results/` directory.

### Viewing traces

To open the trace viewer for a failed test:

```bash
npx playwright show-trace test-results/login-spec-show-error/trace.zip
```

This gives you a step-by-step playback of exactly what happened, which is invaluable for diagnosing failures.

---

## Fixing issues in generated scripts

If a test fails because of an outdated selector or unexpected page behaviour:

1. Open the relevant `.spec.ts` file
2. Ask your agentic coding tool to fix the issue — for example:
   ```
   The selector for the password field isn't matching. Use Ordino to update 
   the test to use data-testid="password-input" instead.
   ```
3. Re-run the test to confirm the fix

---

## All tests passing?

Once all your tests are passing locally, you're ready to push them to your Git repository.

→ [Pushing Tests to Git](./06-pushing-tests-to-git.md)
