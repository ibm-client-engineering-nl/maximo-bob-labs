::: warning 🚧 Under Construction
This section is actively being built. Content may be incomplete or subject to change.
:::

## Maximo Modernization Bob Skills

Maximo Modernization building blocks enable AI-powered automation script optimization and legacy Java-to-automation script conversion for IBM Maximo Application Suite (MAS).



### Available Assets & Skills
---
#### maximo-code-optimization.zip

A comprehensive skill for analyzing and optimizing Maximo automation scripts:

* Fetch and analyze scripts directly via Maximo REST APIs (`MXAPIAUTOSCRIPT`).
* Automated security analysis (SQL injection prevention, input validation) and performance improvements (MboSet lifecycle, caching).
* Detailed severity-ranked before/after reports and logging best practices with `MXLoggerFactory`.

If you would like to use this skill, click [maximo-code-optimization.zip](/maximo/maximo-code-optimization.zip) to download it as a ZIP archive.

#### maximo_java_conversion.zip

A comprehensive skill for converting legacy Maximo Java classes to automation scripts:

* Business logic preservation across Python/Jython, JavaScript, Nashorn, and ECMAScript.
* Automated generation of test scripts alongside converted automation scripts.
* Batch conversion capabilities with comprehensive validation reports.

If you would like to use this skill, click [maximo_java_conversion.zip](/maximo/maximo_java_conversion.zip) to download it as a ZIP archive.

### Installation and Setup
---

#### Step 1: Extract the Skills to Bob Workspace

Click the download link in the section above to download the desired skill(s). Next, extract the ZIP archive(s) into your Bob workspace skills directory. For this, change directory to your workspace.

```bash
cd /path/to/your/bob/workspace
```

and then unzip the downloaded skills into your workspace.

```bash
unzip /path/to/downloaded-zip-archive/maximo-code-optimization.zip
unzip /path/to/downloaded-zip-archive/maximo_java_conversion.zip
```

#### Step 2: Verify Installation

Check that the skill files are present:

```bash
ls -la .bob/skills/
```

### Understand the Optimization Skill
---

1. Open IBM Bob and make sure you've selected the **Ask** mode.

2. Next, write a prompt to get the Maximo Modernization Skill explained. A sample prompt would be:

   ```
   Give me a concise overview of the Maximo Code Optimization skill. Explain the workflow and what exactly will be optimized
   ```

   The output should be similar to:

   ::: info What It Does

   The skill transforms Bob into an expert Maximo automation script optimizer. It can fetch scripts directly from a live Maximo environment via REST API, analyze them for issues, rewrite them with fixes, and produce detailed reports — all in a structured, interactive workflow.

   **The 5-Phase Workflow**

   | Phase | What Happens |
   |---|---|
   | **1 – Setup** | Creates a `maximo-scripts/` project structure, asks for your Maximo URL and API key, stores credentials in a `.env` file, and installs Python dependencies (`requests`, `python-dotenv`, `urllib3`). |
   | **2 – Fetching** | Runs `fetch_maximo_scripts.py` against the Maximo REST endpoint `MXAPIAUTOSCRIPT`. Scripts are saved to `original/` with their exact Maximo names (e.g., `OSACTION.MXAPIINSPRESULT.CREATEWO.py`). |
   | **3 – Analysis** | Each script is inspected across 4 severity levels: **Critical**, **High**, **Medium**, and **Low**. |
   | **4 – Optimization** | Fixed versions are written to `optimized/` using the exact same filenames. |
   | **5 – Reporting** | Individual `{SCRIPTNAME}_report.md` files and a `SUMMARY_REPORT.md` are generated in `reports/`. |

   **What Gets Optimized**

   The skill targets **5 core capability areas**:

   - **Security** — SQL injection prevention, input validation, JSON/XML injection guards
   - **Error Handling & Logging** — `try/catch/finally` blocks, `MXLoggerFactory` logging
   - **Resource Management** — `MboSet` lifecycle management, connection and memory leak prevention
   - **Performance** — optimized `WHERE` clauses, reduced iterations, fewer redundant DB calls
   - **Code Quality** — null safety checks, dead code removal, improved comments and formatting

   **Output Structure**

   ```
   maximo-scripts/
     .env                  ← credentials (not committed to git)
     tools/
       fetch_maximo_scripts.py
       requirements.txt
     original/             ← unmodified scripts from Maximo
     optimized/            ← rewritten scripts with all fixes
     reports/              ← per-script + summary Markdown reports
   ```

   Each report includes issue locations with line numbers, before/after code comparisons, impact explanations, testing recommendations, and a deployment checklist.
   :::

3. Next, repeat this exercise for the Maximo Java Conversion skill.

Asking IBM Bob to explain a skill before you use it is a great way to quickly understand its capabilities and limitations, so you can craft better prompts and get more accurate, reliable results from the start.

### Run the Optimization Skill
---

Start the workflow with the **Agent** mode active. Enter a prompt in Bob. The system then:

* Asks for your Maximo base URL and API key, and sets up the project structure.
* Connects to your Maximo environment and fetches the target `LEGACY_` automation scripts via `MXAPIAUTOSCRIPT`.
* Analyzes each script for security, performance, resource, and code quality issues.
* Generates an optimized version of each script.
* Creates an individual report per script and an overall `SUMMARY_REPORT.md`.

After the workflow completes, review the generated files as well as the conversation output.

1. In the IBM Bob prompt field, enter:

    ```
    Optimize my automation scripts
    ```

    This prompt starts the full optimization workflow. Bob reads the workflow configuration and runs the fetch tool, which automatically retrieves the `LEGACY_` scripts used for the purpose of this lab.


1. When Bob asks for your environment details, enter:

    * **Maximo base URL**: Base URL of the asset management system.
    * **API key**: API key or authentication token.

    Bob stores these values in `maximo-scripts/.env` and uses them to connect to the REST API.

1. Bob shows a task list with the optimization steps. Use this list to track progress during analysis, issue detection, and code generation.

    Bob processes each script in order. For each script, it:

    * Checks code quality for performance, security, maintainability, and coding standards.
    * Identifies issues by severity (Critical, High, Medium, Low).
    * Generates optimized code with the same business logic where possible.
    * Creates a report with before-and-after examples, testing guidance, and deployment notes.

1. After all scripts are processed, Bob shows a summary. The generated lab output contains eight optimized files in `maximo-scripts/optimized/` and eight detailed reports plus `SUMMARY_REPORT.md` in `maximo-scripts/reports/`.

    The generated summary must reconcile with the individual reports. In the validated output, the reports contain **28 issues**: **4 Critical, 16 High, and 8 Medium**. The per-script totals and severity totals in `SUMMARY_REPORT.md` must equal these same values.

1. Review the generated files rather than relying only on the chat output. The workflow writes:

    * Original scripts to `maximo-scripts/original/`.
    * Optimized scripts with matching filenames to `maximo-scripts/optimized/`.
    * Per-script reports and `SUMMARY_REPORT.md` to `maximo-scripts/reports/`.

    Confirm that the number of originals, optimized scripts, and per-script reports is eight and that filenames match.

1. If Bob does not process all scripts, or if you want to analyze a script again, enter a new prompt:

    ```
    Re-analyze script SCRIPT_NAME and generate an optimized version
    ```

    Replace `SCRIPT_NAME` with the exact script name. The system retrieves, analyzes, and updates that script only. Review the resulting optimized file and report again.

### Review the optimization report
---

After the workflow completes, Bob surfaces findings in the chat and writes the full output to disk. Review both before applying any changes — the chat gives you the immediate picture; the files on disk give you the detail you need to deploy safely.

1. **Check the Bob chat output first.** When the workflow finishes, Bob prints a summary directly in the conversation. It shows the list of analyzed scripts, the total number of issues found, a severity breakdown, and the top finding per script. Before opening any file, confirm that the summary matches the expected output for this lab:

    * **8 scripts** analyzed
    * **28 issues** found: 4 Critical, 16 High, 8 Medium
    * All 8 script names appear (`LEGACY_ASSETNUM_VALIDATION`, `LEGACY_CALC`, `LEGACY_COUNTRY_LOOKUP`, `LEGACY_PO_NOLINES_CHECK`, `LEGACY_PO_TOTALS`, `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE`, `LEGACY_SET_REPLCOST`, `LEGACY_SPAREPART_QTY_INIT`)

    If the counts differ or scripts are missing, re-run the analysis for the missing scripts before continuing (see the prompt in the previous section).

1. **Open `maximo-scripts/reports/SUMMARY_REPORT.md`** for the full picture. This file is the starting point for deployment planning. It contains three sections you need to work through before touching individual scripts:

    * The **per-script table** lists every script with its Critical, High, and Medium counts and its top issue. Use this to quickly identify which scripts carry the most risk.
    * The **Critical Issues** block names the four issues that must be addressed before any deployment: `eval()` code injection and hardcoded HTTP credentials in `LEGACY_COUNTRY_LOOKUP`, Python 2 print statements in `LEGACY_PO_NOLINES_CHECK`, and the MboSet connection leak in `LEGACY_SET_REPLCOST`. Each entry explains the runtime impact and the fix applied.
    * The **Deployment Priority** table organises the eight scripts into four tiers:

        | Priority | Scripts | Reason |
        |----------|---------|--------|
        | **Immediate** | `LEGACY_COUNTRY_LOOKUP`, `LEGACY_SET_REPLCOST` | Security vulnerabilities and connection leak that worsen under load |
        | **Next release** | `LEGACY_PO_NOLINES_CHECK`, `LEGACY_ASSETNUM_VALIDATION` | Stability fixes (null safety, syntax) |
        | **Planned** | `LEGACY_CALC`, `LEGACY_PO_TOTALS`, `LEGACY_SPAREPART_QTY_INIT` | Performance and modernisation |
        | **Enhancement** | `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE` | Architecture improvement (migrate to Object Event Filter) |

1. **Review each per-script report** in `maximo-scripts/reports/`. Open the report for the script you are planning to deploy. Each report follows the same structure — work through it in order:

    * **Header table** — confirms the script name, language, launch point, issue count, and highest severity. Verify the launch point matches what is configured in your Maximo environment before proceeding.
    * **Issue Summary table** — lists every detected issue with its severity and category. This is the checklist you validate against the optimized source.
    * **Per-issue sections** — each issue includes a description of the problem, the lines affected, and a before/after code snippet. Compare the *before* snippet against `maximo-scripts/original/` and the *after* snippet against `maximo-scripts/optimized/` to confirm the fix was applied correctly and that business logic is preserved.
    * **Testing Recommendations** — provides concrete test scenarios with expected results. Use these to drive your test cases in the Maximo Automation Scripts Test dialog before deploying to production.
    * **Deployment Notes** — lists prerequisites, launch-point configuration changes, and any environment-specific steps. Do not deploy a script until every item in this section has been verified against your target environment.

1. **Validate your findings against the expected output.** Your per-script reports should contain the following findings. If a finding is missing or the severity differs, re-run the analysis for that script.

    * `LEGACY_COUNTRY_LOOKUP_report.md` — 2 Critical: `eval()` code injection and plaintext HTTP with hardcoded credentials. The optimized file removes both; verify the replacement endpoint uses HTTPS and that credentials are moved to a Maximo system property.
    * `LEGACY_SET_REPLCOST_report.md` — 1 Critical: `MboSet` obtained from `MXServer` is never closed, exhausting the connection pool under load. The optimized file adds `try/finally` cleanup; verify the `NOACCESSCHECK` flag and Maximo runtime version before deploying.
    * `LEGACY_PO_NOLINES_CHECK_report.md` — 1 Critical: Python 2 `print` statements. The optimized file replaces them with `MXLoggerFactory` and fixes the repeated `count()`, unclosed `MboSet`, and deprecated error signalling.
    * `LEGACY_ASSETNUM_VALIDATION_report.md` — 1 High: `getString()` can return `None`, causing an `AttributeError` and a silent transaction rollback. The optimized file guards both fields with `or ""` and adds `MXLoggerFactory` logging.
    * `LEGACY_CALC_report.md` and `LEGACY_PO_TOTALS_report.md` — coordinated deployment required. Both scripts share context variables; deploy together and verify script-variable configuration before activating either.
    * `LEGACY_SPAREPART_QTY_INIT_report.md` — version-dependent recommendation: `isLimitedAttribute()` must be validated against your target Maximo version before deploying.
    * `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE_report.md` — architectural improvement only. The generated source remains a User Exit implementation; migrating to an Object Event Filter is a separate configuration change, not a drop-in script replacement.

### Deploy optimized scripts to Maximo
---

1. **Before switching modes, verify your `.env` file exists.** The deploy script reads your Maximo credentials from `maximo-scripts/.env` — the same file the optimization workflow created in the earlier step. Without it, Bob will ask you for credentials interactively and deployment will stall.

    Open a terminal and run:

    ```bash
    cat maximo-scripts/.env
    ```

    You should see variables including `MAXIMO_BASE_URL` and `MAXIMO_APIKEY`. If the file is missing or empty, create it now:

    ```bash
    cat > maximo-scripts/.env << 'EOF'
    MAXIMO_BASE_URL=https://your-maximo-server.com/maximo
    MAXIMO_ROUTE=/api
    MAXIMO_APIKEY=your-api-key-here
    EOF
    ```

    Replace the values with the same URL and API key you used during the optimization step.

1. In Bob, click the mode selector and switch to **Plan** mode.

1. Copy and paste the following prompt into the chat and submit it:

    ```
    Create a plan to deploy the optimized scripts to Maximo. Deploy the scripts in the recommended order taking dependencies into account. Deploy scripts that fix critical issues first, then High, etc. IMPORTANT: To prevent conflicts with automation scripts of the other participants, replace the prefix LEGACY_ with your initials followed by underscore. Ask me if I did not provide my initials yet. Make sure all scripts and their corresponding appropriate launch points and script variable configurations (as documented in the reports and original script headers) are successfully deployed or configured.
    ```

1. Approve to use Skill create-plan.

1. If Bob asks for your initials, type your initials and submit them.

1. Approve the subagent explore to explore the generated maximo scripts.

1. Wait for Bob to finish generating the plan.

1. Review the generated plan. If anything is incorrect or needs adjusting, describe the change to Bob and wait for the updated plan.

1. Approve the plan.

1. Switch to **Agent** mode and instruct Bob to implement the deployment plan.

1. **Stay engaged during implementation.** Bob will work through the plan step by step — writing the deploy script, running a dry run, deploying each tier, and verifying the results. At each step, carefully read Bob's output and actively approve, adjust, or reject what Bob proposes. For example, Bob may suggest changes to script content, prompt you to confirm a dry-run result before proceeding, or ask clarifying questions about your environment. Do not just let Bob run — your review at each step ensures the deployment goes exactly as intended.

> **Note — deployment prerequisites vs. runtime configuration:** Bob may include environment-specific configuration steps (such as Maximo system properties or Integration endpoint records) in the deployment plan. Not all of these need to happen *before* deploying the script — some are only required before *using* the feature. For example, the `maximo.country.api.url` system property read by `LEGACY_COUNTRY_LOOKUP` does not need to exist before the script is deployed via the API. The script will deploy successfully either way; the property only needs to be configured before users trigger the country lookup field. If you are unsure whether a prerequisite is a deployment blocker or a runtime dependency, ask Bob to clarify.



