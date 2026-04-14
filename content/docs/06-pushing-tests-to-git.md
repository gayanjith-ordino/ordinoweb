# Pushing Tests to Git

Once your tests are passing locally, you push them to your Git repository just like any other code. Ordino automatically detects your test scripts in the repository and makes them visible and manageable in the Ordino Portal.

---

## How Ordino connects to your repository

Ordino integrates with your Git repository to sync test scripts. When you push a commit containing Playwright test files, Ordino picks them up and registers them in your portal workspace.

Before pushing for the first time, you'll need to connect your repository to Ordino. Here's how:

1. Log in to the [Ordino Portal](https://ordino.ai)
2. Go to **Settings → Repositories**
3. Click **Connect Repository**
4. Authenticate with GitHub, GitLab, or Bitbucket (depending on where your code lives)
5. Select the repository you want to connect
6. Choose the **branch** Ordino should watch (typically `main` or your default branch)
7. Specify the **test directory** (e.g., `tests/` or `e2e/`) — this tells Ordino where to look for your spec files

> You can connect multiple repositories and branches if you have multiple products.

---

## Pushing your test files

With your repo connected, push your generated tests as you normally would:

```bash
git add tests/
git commit -m "feat: add Playwright tests for login flow"
git push origin main
```

That's it. No special commands or hooks required.

---

## What happens after you push

Within a few seconds of your push, Ordino will:

1. **Detect the new test files** in your connected repository
2. **Register them** in your Ordino Portal workspace under your project
3. **Make them available** for on-demand execution or CI/CD scheduling

You'll see the tests appear in the **Test Suite** section of the Ordino Portal shortly after the push completes.

---

## Keeping tests in sync

Ordino stays in sync with your repository automatically. When you:

- **Add new tests** — they'll appear in the portal after your next push
- **Update existing tests** — Ordino picks up the latest version automatically
- **Delete a test file** — it will be removed from the portal after the next sync

This means your portal always reflects the current state of your test suite in the repository.

---

## Recommended file organisation

While Ordino works with any file structure, we recommend organising your test files to make the portal easier to navigate:

```
tests/
  web/
    auth/
      login.spec.ts
      logout.spec.ts
    dashboard/
      dashboard.spec.ts
  api/
    users/
      create-user.spec.ts
      get-user.spec.ts
```

Ordino mirrors this folder structure in the portal, making it easy to find and group related tests.

---

## Next steps

Your tests are now visible in the Ordino Portal. Let's take a tour of what you can do there.

→ [Using the Ordino Portal](./07-using-the-ordino-portal.md)
