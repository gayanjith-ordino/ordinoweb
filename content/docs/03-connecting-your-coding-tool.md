# Connecting Your Agentic Coding Tool

Ordino AI works through an **MCP (Model Context Protocol) server** that integrates directly with your agentic coding tool. Once connected, your coding tool gains the ability to generate accurate, reliable Playwright test scripts using Ordino's engine.

This page covers how to connect the most popular agentic coding tools. The setup takes about 5 minutes.

---

## Before you start

Make sure you have your Ordino MCP connection details ready. If you haven't retrieved them yet:

1. Log in to the [Ordino Portal](https://ordino.ai)
2. Go to **Settings → MCP Connection**
3. Copy your **MCP Server URL** and **API Key**

You'll need these for the steps below.

---

## Connecting Claude Code

### Option A — CLI (fastest)

Run the following command in your terminal:

```bash
claude mcp add --transport http ordino YOUR_ORDINO_MCP_SERVER_URL \
  --header "Authorization: Bearer YOUR_API_KEY"
```

To confirm it was added, run:

```bash
claude mcp list
```

You should see `ordino` listed among your MCP servers.

### Option B — Manual config

1. Open your Claude Code configuration file. By default this is located at:
   - macOS/Linux: `~/.claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the Ordino MCP server under the `mcpServers` key:

```json
{
  "mcpServers": {
    "ordino": {
      "url": "YOUR_ORDINO_MCP_SERVER_URL",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

3. Save the file and restart Claude Code.

---

## Connecting Cursor

### Option A — In-app (MCP Settings)

1. Open Cursor and go to **Settings** (⌘ + ,).
2. Search for **MCP** in the settings search bar.
3. Click **Add MCP Server**.
4. Fill in the following:
   - **Name:** `Ordino`
   - **Server URL:** Your Ordino MCP Server URL
   - **Authentication:** Select **Bearer Token** and paste your API Key
5. Click **Save** and restart Cursor.

Ordino will now appear as an available tool in Cursor's AI assistant.

### Option B — mcp.json config file

1. In your project root (or `~/.cursor/` for a global config), create or open `.cursor/mcp.json`.
2. Add the Ordino server:

```json
{
  "mcpServers": {
    "ordino": {
      "url": "YOUR_ORDINO_MCP_SERVER_URL",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}
```

3. Save the file and restart Cursor.

---

## Connecting GitHub Copilot (VS Code)

### Option A — Command Palette

1. Open the **Command Palette** (⌘ + Shift + P) and search for `MCP: Add Server`.
2. Choose **HTTP** as the connection type.
3. Enter your Ordino MCP Server URL when prompted.
4. Enter your API Key as the Bearer token when prompted.
5. Save the configuration. Copilot will now be able to call Ordino tools during code generation.

> **Note:** MCP support in GitHub Copilot requires VS Code 1.99 or later and the GitHub Copilot extension v1.250 or later.

### Option B — settings.json config

1. Open your VS Code `settings.json` (⌘ + Shift + P → `Preferences: Open User Settings (JSON)`).
2. Add the following entry:

```json
{
  "mcp": {
    "servers": {
      "ordino": {
        "type": "http",
        "url": "YOUR_ORDINO_MCP_SERVER_URL",
        "headers": {
          "Authorization": "Bearer YOUR_API_KEY"
        }
      }
    }
  }
}
```

3. Save the file. VS Code will pick up the new server automatically.

---

## Verifying the connection

Once connected, ask your coding tool something like:

> "List the available Ordino tools"

or

> "Use Ordino to generate a test for the login page"

If the connection is working, your tool will respond with Ordino's available capabilities or begin generating a test. If you run into issues, see the [FAQ](./10-faq.md#connection-issues) for troubleshooting steps.

---

## Next steps

With the Ordino MCP server connected, you're ready to generate your first test scripts.

→ [Generating Test Scripts](./04-generating-test-scripts.md)
