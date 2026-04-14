# Generating Test Scripts

With your agentic coding tool connected to the Ordino MCP server, you're ready to generate Playwright test scripts. This is where Ordino really shines — you describe a test scenario (in plain English or as a feature file) and Ordino generates a well-structured, reliable script you can use immediately.

---

## How it works

Ordino's MCP server analyses your test input, understands the intent, and generates Playwright scripts with:

- Proper page object patterns and selectors
- Handling for async operations and dynamic content
- Built-in retry logic and wait strategies
- Consistent naming and file structure

This produces scripts that are more accurate and maintainable than what you'd typically get from an agentic coding tool working without specialised test context.

---

## Option 1: Describe the test in plain English

The simplest way to generate a test is to describe it in natural language inside your coding tool. For example:

**Example prompt:**
```
Use Ordino to generate a Playwright test for the following scenario:

A user visits the login page, enters a valid email and password, 
clicks the login button, and is redirected to their dashboard.
Verify that the dashboard header shows the user's name.
```

Ordino will generate a `.spec.ts` file with the full Playwright test, placed in your project's test directory.

**Tips for better results:**
- Be specific about what you want to verify (assertions), not just the steps
- Mention the URL or page name if it helps
- If you have specific selectors or data-testid attributes, include them
- For API tests, include the endpoint, method, expected status code, and any key response fields

---

## Option 2: Provide a feature file (BDD/Gherkin)

If your team uses BDD-style feature files, you can pass those directly to Ordino.

**Example prompt:**
```
Use Ordino to generate a Playwright test from this feature file:

Feature: User Login
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter "user@example.com" as the email
    And I enter "SecurePass123" as the password
    And I click the Login button
    Then I should be redirected to the dashboard
    And I should see "Welcome back" on the page
```

Ordino maps each step to the appropriate Playwright actions and generates a structured test file. You can also point to a `.feature` file on disk:

```
Use Ordino to generate Playwright tests from the feature file at ./features/login.feature
```

---

## Understanding the generated output

Ordino generates standard Playwright test files (`.spec.ts`) that follow best practices. Here's what a generated test typically looks like:

```typescript
import { test, expect } from '@playwright/test';

test.describe('User Login', () => {
  test('Successful login with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/login');

    // Enter credentials
    await page.getByLabel('Email').fill('user@example.com');
    await page.getByLabel('Password').fill('SecurePass123');

    // Submit the form
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText('Welcome back')).toBeVisible();
  });
});
```

The scripts use Playwright's recommended locator strategies (role-based, label-based, data-testid) for resilience against minor UI changes.

---

## Generating multiple tests at once

You can ask Ordino to generate a suite of tests in one go:

```
Use Ordino to generate Playwright tests for all the scenarios in the ./features/ directory
```

or

```
Use Ordino to generate tests for the following 3 scenarios: [paste scenarios]
```

Ordino will generate separate, well-named spec files for each scenario.

---

## Generating API tests

Ordino also supports API test generation for REST endpoints. Just describe the API call and expected behaviour:

```
Use Ordino to generate a Playwright API test for:
- POST /api/users
- Request body: { "name": "Jane Doe", "email": "jane@example.com" }
- Expected: 201 status, response body contains "id" field
```

---

## Next steps

Once you're happy with the generated scripts, the next step is to run them locally to make sure everything works before pushing to your repo.

→ [Running Tests Locally](/docs/running-tests-locally)
