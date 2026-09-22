# IBM Bob IDE — Scavenger Hunt Lab

**Audience:** New IBM Bob IDE users  
**Goal:** Discover every key area of the Bob IDE and configure Bob's core extensibility features — MCP Servers, Modes, Skills, and Rules — by completing a series of hands-on challenges.

## Before You Begin

### Prerequisites

- IBM Bob IDE is installed and running.
- Node.js 18 or later is installed (required for the MCP challenge).

### How this lab works

Each section is a **clue** followed by a **challenge**. Read the clue, find the feature in the IDE, and complete the challenge. A ✅ **Checkpoint** at the end of each section confirms you did it right.

## 🚀 Step 0 — Create and Open Your Workspace

Before you can explore any part of the IDE, Bob needs a **workspace** — a folder on your machine that it treats as the root of your project. When you first launch Bob IDE with no folder open, the Explorer panel will be empty and most features will be unavailable.

### Create a workspace folder using the IDE terminal

Bob IDE has an **Integrated Terminal** built in. Use it now to create the lab folder — no external terminal needed.

1. Open the Integrated Terminal inside Bob IDE with the keyboard shortcut **Ctrl + `` ` ``** (backtick) on all platforms, or via the menu **View → Terminal**.
2. In the terminal panel that opens at the bottom of the IDE, run the appropriate command for your platform:

::: code-group
```[macOS / Linux]
mkdir -p ~/bob-scavenger-hunt
```
```[Windows (PowerShell)]
New-Item -ItemType Directory -Force -Path "$HOME\bob-scavenger-hunt"
```
:::

### Open the folder in Bob IDE

Now point Bob IDE at the folder you just created. You have two options:

**Option A — Via the menu:**
1. Go to **File → Open Folder…**.
2. Navigate to the `bob-scavenger-hunt` folder inside your home directory.
3. Click **Open** (macOS/Linux) or **Select Folder** (Windows).

**Option B — Via the Explorer panel:**
1. Click the **Explorer** icon (pages icon) on the left-hand activity bar.
2. If no folder is open, the Explorer shows an **Open Folder** button — click it.
3. Navigate to and select the `bob-scavenger-hunt` folder, then click **Open** / **Select Folder**.

### Trust the workspace

Bob IDE may ask: *"Do you trust the authors of the files in this folder?"*
Click **Yes, I trust the authors** to proceed. Bob requires workspace trust before it can read or write files.

### Disable auto-approval

With the workspace open, check that **auto-approval is disabled**. Look for the slider above the Bob chat input at the bottom-right of the window. If it shows two white checkmarks, click the circle to disable it. You should see **"Auto-approval disabled"**. This ensures Bob asks for your permission before making any changes during the lab.

✅ **Checkpoint:** The Explorer panel shows the `bob-scavenger-hunt` folder as the workspace root, the title bar reflects the folder name, and auto-approval is disabled.


## 🗺️ Clue 1 — The File Map (Explorer)

> *"Every great adventure begins with a map. Find the panel that shows you all of your project's files and folders."*

### Background

The **Explorer** is the file tree on the left side of the Bob IDE. It shows every file and folder in your current workspace. You can click any file to open it in the editor, right-click to create, rename, or delete files, and drag items to reorganise them.

### Challenge 1A — Open the Explorer and create a file

1. Click the **Explorer** icon (pages icon) at the top of the left-hand activity bar to open the Explorer panel.
2. In the Explorer, right-click the root of your workspace and choose **New File**.
3. Name the file `scavenger-notes.md`.
4. Verify the file appears in the Explorer tree.

✅ **Checkpoint:** `scavenger-notes.md` exists in your workspace root and is visible in the Explorer tree.


## 📝 Clue 2 — The Workshop (Editor)

> *"A craftsman's workshop is where ideas take shape. Find the surface where you read and write code."*

### Background

The **Editor** is the main central pane. Files you click in the Explorer open as tabs in the Editor. You can have multiple files open at once, split the editor, and use Bob's **Literate Coding** feature to write natural-language instructions directly inside a file.

### Challenge 2A — Edit a file

1. In the Explorer, click `scavenger-notes.md` to open it in the Editor.
2. Type the following content:

```markdown
# Scavenger Hunt Progress

- [x] Explorer — found it!
- [ ] Editor
- [ ] Bob Chat Panel
- [ ] Integrated Terminal
- [ ] Mode Selector
- [ ] MCP Servers
- [ ] Modes
- [ ] Skills
- [ ] Rules
```

3. Save the file with **Cmd + S** (macOS) or **Ctrl + S** (Windows/Linux).

### Challenge 2B — Use Literate Coding

Literate Coding lets you write a plain-English instruction directly in the editor, then ask Bob to act on it.

1. Open `scavenger-notes.md` in the Editor (it should still be open).
2. Enable literate coding by clicking the **magic wand icon** (🪄) in the editor toolbar, or press **Cmd + M** (macOS) / **Ctrl + M** (Windows/Linux).
3. Add the following line at the very top of the file, before any existing content:

```text
// Add a short one-sentence description under each checklist item explaining what that Bob IDE feature does.
```

4. Click **Generate** at the bottom of the document.
5. Review Bob's proposed changes and click **Accept all**.
6. Click **Exit** to leave Literate Coding mode.
7. Save the file.

✅ **Checkpoint:** `scavenger-notes.md` now has descriptions under each checklist item, and the Editor tab shows the file with the accepted changes.

## 💬 Clue 3 — The Oracle (Bob Chat Panel)

> *"There is a wise oracle in this IDE that speaks in plain language. Find where you talk to it."*

### Background

The **Bob Chat Panel** lives on the right side (or can float) of the IDE. It has three parts:

- **Chat history** — your conversation with Bob scrolls here.
- **Input field** — type your natural-language requests at the bottom.
- **Send button** — press **Enter** or click the paper-plane icon to send.

You can open or close the panel with **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux).

### Challenge 3A — Open the chat panel and ask a question

1. If the Bob Chat Panel is not visible, open it using **Option + Cmd + B** (macOS) or **Ctrl + Alt + B** (Windows/Linux), or click the **Bob icon** beside the navigation bar.
2. In the input field at the bottom, type:

```
What files are currently in my workspace?
```

3. Press **Enter** and read Bob's response.

### Challenge 3B — Ask Bob to update your notes

1. In the chat panel input field, type:

```
Open scavenger-notes.md and mark the "Editor" and "Bob Chat Panel" items as complete by changing [ ] to [x].
```

2. When Bob proposes the change, click **Save** to apply it.

✅ **Checkpoint:** In the chat panel you have a conversation history. `scavenger-notes.md` now shows `[x]` next to both **Editor** and **Bob Chat Panel**.

## 🖥️ Clue 4 — The Engine Room (Integrated Terminal)

> *"Deep below the deck lies the engine room — a place where commands are issued and the real work happens."*

### Background

The **Integrated Terminal** runs a full shell session inside Bob IDE — the same shell you would use outside the IDE, but embedded right in the window. You can open it via **View → Terminal** or the keyboard shortcut **Ctrl + `` ` ``** (backtick) on all platforms. Bob can also run commands inside the terminal on your behalf when you approve them.

Throughout this lab every shell command is run here — you never need to leave the IDE.

### Challenge 4A — Scaffold the project configuration folders

Bob stores all project-level configuration in a `.bob` folder at the root of your workspace. Use the Integrated Terminal to create the full structure now — several later clues depend on it.

1. Open the Integrated Terminal with **Ctrl + `` ` ``** or via the menu **View → Terminal**.
2. In the terminal panel, run the appropriate command for your platform:

::: code-group
```[macOS / Linux]
mkdir -p .bob/rules .bob/rules-doc-writer .bob/skills/hello-skill
```
```[Windows (PowerShell)]
New-Item -ItemType Directory -Force -Path .bob/rules
New-Item -ItemType Directory -Force -Path .bob/rules-doc-writer
New-Item -ItemType Directory -Force -Path .bob/skills/hello-skill
```
:::

3. Switch to the Explorer panel and confirm the new `.bob` folder tree is visible.

### Challenge 4B — Create a placeholder file from the terminal

Still in the Integrated Terminal, create the skill placeholder file you will flesh out in Clue 8:

::: code-group
```[macOS / Linux]
echo "# My First Skill" > .bob/skills/hello-skill/SKILL.md
```
```[Windows (PowerShell)]
"# My First Skill" | Out-File -FilePath .bob/skills/hello-skill/SKILL.md -Encoding utf8
```
:::

4. Switch back to the Explorer panel and verify `SKILL.md` now appears inside `.bob/skills/hello-skill/`.

✅ **Checkpoint:** The Integrated Terminal is open, the `.bob` directory tree exists with `rules/`, `rules-doc-writer/`, and `skills/hello-skill/` subdirectories, and `SKILL.md` exists at `.bob/skills/hello-skill/SKILL.md`.

## 🎭 Clue 5 — The Costume Room (Mode Selector)

> *"Every actor needs a costume. Find the control beside the chat input that changes Bob's role."*

### Background

Bob operates in **modes**, each with a defined set of permissions and a specific role. The **Mode Selector** is the dropdown to the **left of the chat input field**. Built-in modes include:

| Mode  | What Bob can do |
|-------|----------------|
| **Agent** | Read, write, run commands, use MCP — the most capable mode |
| **Ask**   | Read files only — safe for exploring code |
| **Plan**  | Read and plan — no writes or commands |

You can also switch modes by typing a slash command (e.g. `/ask`) in the chat input, or with the keyboard shortcut **Cmd + .** (macOS) / **Ctrl + .** (Windows/Linux) to cycle through modes.

### Challenge 5A — Explore the mode selector

1. Look at the bottom of the Bob Chat Panel. To the left of the text input field you will see a dropdown showing the current mode (e.g. **Agent**).
2. Click the dropdown and switch to **Ask** mode.
3. In the chat input, type:

```
What is the purpose of the .bob folder?
```

4. Press **Enter** and read the response. Notice that in Ask mode Bob can answer questions and read files, but will not make changes.

### Challenge 5B — Switch back to Agent mode

1. Click the mode selector dropdown again and switch back to **Agent** mode.
2. Alternatively, type `/agent` in the chat input and press **Enter**.

✅ **Checkpoint:** You have successfully switched between Ask mode and Agent mode using the mode selector dropdown. The current mode shown in the selector is **Agent**.

## 🔌 Clue 6 — The Power Sockets (MCP Servers)

> *"The IDE has power sockets that let you plug in external tools. Find where to manage them."*

### Background

**Model Context Protocol (MCP)** lets you connect external tools and services to Bob. Bob discovers available tools, calls them on your behalf, and uses the results to answer your questions or complete tasks.

MCP configuration is stored in JSON files at two levels:

| Level   | File location                 | Scope             |
|---------|-------------------------------|-------------------|
| Global  | `~/.bob/mcp.json`             | All workspaces    |
| Project | `.bob/mcp.json` in project root | This workspace only |

Project-level config takes precedence when server names conflict.

### Challenge 6A — Open MCP settings via the UI

1. Open **Bob Settings** (click the ⚙️ gear icon in the Bob sidebar, or run the **Bob: Open Settings** command).
2. In the left navigation, select **MCP**.
3. Observe the MCP servers table and the **+** button to add a new server.
4. Click the **+** button, select the Configuration Scope and click the Open Configuration File button.

### Challenge 6B — Add a local MCP server entry

In the `.bob/mcp.json` file that just opened in your Editor, replace the entire contents with the following configuration. This registers a placeholder STDIO server — you will not start it, but configuring the entry teaches you the format.

```json
{
  "mcpServers": {
    "my-local-tools": {
      "command": "node",
      "args": ["tools/server.js"],
      "disabled": true,
      "env": {}
    }
  }
}
```

> **Note:** `"disabled": true` prevents Bob from trying to start the server, so no Node.js process is launched. This is intentional for the purposes of this exercise.

Save the file with **Cmd + S** (macOS) or **Ctrl + S** (Windows/Linux).

Alternatively, you can create the same file from the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: code-group
```[macOS / Linux]
cat > .bob/mcp.json << 'EOF'
{
  "mcpServers": {
    "my-local-tools": {
      "command": "node",
      "args": ["tools/server.js"],
      "disabled": true,
      "env": {}
    }
  }
}
EOF
```
```[Windows (PowerShell)]
@'
{
  "mcpServers": {
    "my-local-tools": {
      "command": "node",
      "args": ["tools/server.js"],
      "disabled": true,
      "env": {}
    }
  }
}
'@ | Out-File -FilePath .bob/mcp.json -Encoding utf8
```
:::

### Challenge 6C — Verify the configuration

1. Go back to **Settings → MCP** in the Bob panel.
2. You should see `my-local-tools` listed as a server entry with a **disabled** status.

✅ **Checkpoint:** `.bob/mcp.json` exists in your project, contains the `my-local-tools` server entry, and the MCP tab in Settings shows the server (marked disabled).

## 🎨 Clue 7 — The Wardrobe Designer (Modes)

> *"You discovered the costume room. Now find where costumes are designed and saved."*

### Background

You can create **custom modes** to give Bob a specialized role, restrict its tool permissions, and provide a default persona for specific tasks. Custom modes are stored in YAML files:

| Level   | File location                           |
|---------|-----------------------------------------|
| Global  | `~/.bob/settings/custom_modes.yaml`     |
| Project | `.bob/custom_modes.yaml`                |

You can create modes through the **Settings → Modes** UI or by editing the YAML file directly.

### Challenge 7A — Create a custom mode via the UI

1. Click the **gear icon** (⚙️) inside the **Mode Selector** dropdown (next to the mode name), or go to **Settings → Modes**.
2. Click the **+** (Add) icon to create a new mode.
3. Fill in the following values:

| Field               | Value                                                                 |
|---------------------|-----------------------------------------------------------------------|
| **Slug**            | `doc-writer`                                                          |
| **Name**            | `📝 Doc Writer`                                                       |
| **Save Location**   | Project                                                               |
| **Role Definition** | `You are a technical writer. You write clear, concise documentation.` |
| **When to Use**     | `Use this mode for writing and reviewing Markdown documentation.`     |
| **Available Tools** | Read files, Edit files                                                |

4. Click **Save**.

Bob creates (or updates) `.bob/custom_modes.yaml` with your new mode.

### Challenge 7B — Inspect the generated YAML

1. In the Explorer, open `.bob/custom_modes.yaml`.
2. Verify it contains a `customModes` array with your `doc-writer` entry.

The file should look similar to:

```yaml
customModes:
  - slug: doc-writer
    name: 📝 Doc Writer
    roleDefinition: You are a technical writer. You write clear, concise documentation.
    whenToUse: Use this mode for writing and reviewing Markdown documentation.
    groups:
      - read
      - edit
```

Alternatively, you can create this file directly from the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: code-group
```[macOS / Linux]
cat > .bob/custom_modes.yaml << 'EOF'
customModes:
  - slug: doc-writer
    name: "📝 Doc Writer"
    roleDefinition: You are a technical writer. You write clear, concise documentation.
    whenToUse: Use this mode for writing and reviewing Markdown documentation.
    groups:
      - read
      - edit
EOF
```
```[Windows (PowerShell)]
@'
customModes:
  - slug: doc-writer
    name: "📝 Doc Writer"
    roleDefinition: You are a technical writer. You write clear, concise documentation.
    whenToUse: Use this mode for writing and reviewing Markdown documentation.
    groups:
      - read
      - edit
'@ | Out-File -FilePath .bob/custom_modes.yaml -Encoding utf8
```
:::

### Challenge 7C — Use your custom mode

1. Click the mode selector dropdown at the bottom of the Chat Panel.
2. Confirm **📝 Doc Writer** appears in the list.
3. Switch to it and send the following message:

```
What kind of tasks are you best suited for?
```

4. Read Bob's response — it should reflect the Doc Writer role definition.
5. Switch back to **Agent** mode when done.

✅ **Checkpoint:** `.bob/custom_modes.yaml` exists, the mode selector shows **📝 Doc Writer**, and Bob responded in character when you asked it about its purpose.

## 🧠 Clue 8 — The Instruction Manual (Skills)

> *"Every expert has a manual they follow. Find where Bob's specialized instruction sets are stored."*

### Background

**Skills** are reusable instruction sets stored as `SKILL.md` files inside `.bob/skills/<skill-name>/`. When you activate a skill, Bob loads its instructions and follows them for the current conversation.

A `SKILL.md` file uses YAML front matter followed by the instruction body:

```markdown
---
name: skill-name
description: A clear description so Bob knows when to activate this skill
---

Your instructions go here.
```

The `description` field is required — skills without a description are ignored by Bob.

### Challenge 8A — Write a real skill

Earlier you created a placeholder `SKILL.md`. Now replace its contents with a proper skill definition.

Open `.bob/skills/hello-skill/SKILL.md` in the Editor and replace the contents with:

```markdown
---
name: hello-skill
description: Greet the user warmly and introduce the IBM Bob IDE features when asked for a welcome message.
---

When activated, greet the user with a friendly welcome message.
Include a brief, one-sentence description of these five IBM Bob IDE features:
1. Explorer
2. Editor
3. Bob Chat Panel
4. Integrated Terminal
5. Mode Selector

Keep the entire response under 150 words. Use a friendly, encouraging tone.
```

Save the file.

Alternatively, write this from the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: code-group
```[macOS / Linux]
cat > .bob/skills/hello-skill/SKILL.md << 'EOF'
---
name: hello-skill
description: Greet the user warmly and introduce the IBM Bob IDE features when asked for a welcome message.
---

When activated, greet the user with a friendly welcome message.
Include a brief, one-sentence description of these five IBM Bob IDE features:
1. Explorer
2. Editor
3. Bob Chat Panel
4. Integrated Terminal
5. Mode Selector

Keep the entire response under 150 words. Use a friendly, encouraging tone.
EOF
```
```[Windows (PowerShell)]
@'
---
name: hello-skill
description: Greet the user warmly and introduce the IBM Bob IDE features when asked for a welcome message.
---

When activated, greet the user with a friendly welcome message.
Include a brief, one-sentence description of these five IBM Bob IDE features:
1. Explorer
2. Editor
3. Bob Chat Panel
4. Integrated Terminal
5. Mode Selector

Keep the entire response under 150 words. Use a friendly, encouraging tone.
'@ | Out-File -FilePath .bob/skills/hello-skill/SKILL.md -Encoding utf8
```
:::

### Challenge 8B — Trigger the skill

1. Start a **new chat** conversation by clicking the **+** (New Chat) icon at the top of the Bob Chat Panel. This ensures a fresh context window.
2. In the chat input, type:

```
Give me a welcome message introducing the IBM Bob IDE.
```

3. Press **Enter**. Bob should detect the skill's description, activate it, and respond using the instructions you defined.

✅ **Checkpoint:** Bob responded with a structured welcome message covering the five IDE features, matching the style and length constraints you defined in the skill.

## 📋 Clue 9 — The Standing Orders (Rules)

> *"Every crew operates under standing orders. Find where you leave persistent instructions that Bob always follows."*

### Background

**Rules** are persistent instructions that Bob applies to every conversation in a given scope. They are stored as plain text or Markdown files:

| Location                          | Applies to                              |
|-----------------------------------|-----------------------------------------|
| `.bob/rules/`                     | All modes in this project               |
| `.bob/rules-{mode-slug}/`         | A specific mode in this project         |
| `~/.bob/rules/`                   | All modes globally (all workspaces)     |

Files inside the rules directory are loaded alphabetically and combined. Supported file extensions: `.md`, `.txt`.

### Challenge 9A — Create a project-wide rules file

Create a rules file that applies to all modes in this project. Run the following in the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: code-group
```[macOS / Linux]
cat > .bob/rules/project-rules.md << 'EOF'
# Project Rules

- Always respond in English.
- When suggesting file paths, use forward slashes even on Windows.
- Keep all code examples minimal — include only what is necessary to illustrate the point.
- When you are unsure about a requirement, ask a clarifying question before proceeding.
EOF
```
```[Windows (PowerShell)]
@'
# Project Rules

- Always respond in English.
- When suggesting file paths, use forward slashes even on Windows.
- Keep all code examples minimal — include only what is necessary to illustrate the point.
- When you are unsure about a requirement, ask a clarifying question before proceeding.
'@ | Out-File -FilePath .bob/rules/project-rules.md -Encoding utf8
```
:::

### Challenge 9B — Create a mode-specific rules file

Now add rules that apply **only** when Bob is in your custom `doc-writer` mode. Run the following in the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**):

::: code-group
```[macOS / Linux]
cat > .bob/rules-doc-writer/01-style.md << 'EOF'
# Doc Writer Style Rules

- Always use sentence case for headings (not Title Case).
- Use second-person ("you") throughout.
- Avoid jargon; define technical terms on first use.
- Every code example must have a one-line comment explaining what it does.
EOF
```
```[Windows (PowerShell)]
@'
# Doc Writer Style Rules

- Always use sentence case for headings (not Title Case).
- Use second-person ("you") throughout.
- Avoid jargon; define technical terms on first use.
- Every code example must have a one-line comment explaining what it does.
'@ | Out-File -FilePath .bob/rules-doc-writer/01-style.md -Encoding utf8
```
:::

### Challenge 9C — Verify rules are loaded

1. Switch to **Agent** mode in the mode selector.
2. Start a new chat and ask:

```
Summarise the rules you are currently following for this project.
```

3. Bob should reference the project-wide rules you defined.
4. Now switch to **📝 Doc Writer** mode, start a new chat, and ask the same question. Bob should additionally reference the Doc Writer-specific style rules.

✅ **Checkpoint:** `.bob/rules/project-rules.md` and `.bob/rules-doc-writer/01-style.md` both exist. Bob's responses reflect the rules in both modes.

## 🏁 Final Checkpoint — The Complete Map

In the **IDE's Integrated Terminal** (**Ctrl + `` ` ``**), run the following command to confirm your full `.bob` folder structure is in place:

::: code-group
```[macOS / Linux]
find .bob -type f | sort
```
```[Windows (PowerShell)]
Get-ChildItem -Recurse -File .bob | Select-Object -ExpandProperty FullName | Sort-Object
```
:::

You should see output similar to:

```
.bob/custom_modes.yaml
.bob/mcp.json
.bob/rules-doc-writer/01-style.md
.bob/rules/project-rules.md
.bob/skills/hello-skill/SKILL.md
```

Open `scavenger-notes.md` in the Editor and mark all remaining items as complete:

```markdown
- [x] Explorer
- [x] Editor
- [x] Bob Chat Panel
- [x] Integrated Terminal
- [x] Mode Selector
- [x] MCP Servers
- [x] Modes
- [x] Skills
- [x] Rules
```

## 📚 What You Learned

| Feature           | Where to find it                              | Config file(s)                                          |
|-------------------|-----------------------------------------------|---------------------------------------------------------|
| **Explorer**      | Left activity bar — file tree icon            | n/a                                                     |
| **Editor**        | Central pane — tabs for open files            | n/a                                                     |
| **Bob Chat Panel**| Right-side panel (Option+Cmd+B / Ctrl+Alt+B)  | n/a                                                     |
| **Terminal**      | Bottom pane (Ctrl + `` ` ``)                  | n/a                                                     |
| **Mode Selector** | Dropdown left of chat input                   | n/a                                                     |
| **MCP Servers**   | Settings ⚙️ → MCP tab                         | `.bob/mcp.json` / `~/.bob/mcp.json`                     |
| **Modes**         | Settings ⚙️ → Modes tab or Mode Selector gear | `.bob/custom_modes.yaml` / `~/.bob/settings/custom_modes.yaml` |
| **Skills**        | `.bob/skills/<name>/SKILL.md`                 | `.bob/skills/` / `~/.bob/skills/`                       |
| **Rules**         | `.bob/rules/` or `.bob/rules-{slug}/`         | `.bob/rules/` / `~/.bob/rules/`                         |

## 🔑 Quick Reference — Keyboard Shortcuts

| Action                       | macOS               | Windows / Linux     |
|------------------------------|---------------------|---------------------|
| Open/close Bob Chat Panel    | Option + Cmd + B    | Ctrl + Alt + B      |
| Open Integrated Terminal     | Ctrl + `` ` ``      | Ctrl + `` ` ``      |
| Cycle through modes          | Cmd + .             | Ctrl + .            |
| Toggle Literate Coding       | Cmd + M             | Ctrl + M            |
| Save file                    | Cmd + S             | Ctrl + S            |

*Congratulations — you have completed the IBM Bob IDE Scavenger Hunt! 🎉*
