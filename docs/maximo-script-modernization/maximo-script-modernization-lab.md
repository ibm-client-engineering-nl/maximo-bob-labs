::: warning 🚧 Under Construction
This section is actively being built. Content may be incomplete or subject to change.
:::

## Maximo Modernization Bob Skills

Maximo Modernization building blocks enable AI-powered automation script optimization and legacy Java-to-automation script conversion for IBM Maximo Application Suite (MAS).

### Available Assets & Skills

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

Start the workflow with the **Agent** mode active. Enter a prompt in Bob. The system then:

* Asks for your Maximo base URL and API key, and sets up the project structure.
* Connects to your Maximo environment and fetches the target `LEGACY_` automation scripts via `MXAPIAUTOSCRIPT`.
* Analyzes each script for security, performance, resource, and code quality issues.
* Generates an optimized version of each script.
* Creates an individual report per script and an overall `SUMMARY_REPORT.md`.

After the workflow completes, review the generated files as well as the conversation output.

1. In the IBM Bob prompt field, enter:

    ```
    Optimize my Maximo scripts
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

After the workflow completes, review the per-script optimization reports and the optimized source before you apply any changes.

1. In `maximo-scripts/reports/`, locate the report matching each optimized filename. Each report shows the launch point, severity-ranked issues, fixes, testing recommendations, and deployment notes. The reports do not all contain a complete before/after listing, so compare the report snippets directly with the corresponding files in `maximo-scripts/original/` and `maximo-scripts/optimized/`.

1. For each script, review the **Issue Summary** and **Testing Recommendations** sections. Check that the optimized code preserves the correct business logic. Validate the changes against your system configuration and business rules before deployment.

1. Compare the generated output with the workflow requirements:

    | Workflow requirement | Result in the tested output |
    |---|---|
    | Analyze every fetched script | **Met.** Eight originals, eight optimized scripts, and eight per-script reports are present. |
    | Preserve exact script filenames and language extensions | **Met.** Optimized files use the matching names and `.py`/`.js` extensions. |
    | Identify issues by Critical, High, Medium, and Low severity | **Partially met.** The per-script reports provide severity classifications, but the summary totals do not match the detailed reports. |
    | Fix security, resource, performance, null-safety, error-handling, and logging issues | **Partially met.** The optimized files address these categories, but some changes require Maximo configuration or version-specific validation before deployment. |
    | Generate before/after comparisons, testing guidance, and deployment recommendations | **Partially met.** Reports include issue summaries, code examples, testing recommendations, and deployment notes; not every report contains a complete before/after listing. |
    | Preserve business logic | **Requires validation.** Several optimized scripts introduce configuration or behavior changes, so this cannot be confirmed from static output alone. |

1. The tested output has these report-level findings:

    * [`LEGACY_COUNTRY_LOOKUP_report.md`](../../maximo-scripts/reports/LEGACY_COUNTRY_LOOKUP_report.md) identifies `eval()`, plaintext HTTP, and hardcoded credentials as Critical security issues. The optimized file removes `eval()` and inline credentials, but the configured endpoint must still be verified as HTTPS and authentication must be configured securely.
    * [`LEGACY_SET_REPLCOST_report.md`](../../maximo-scripts/reports/LEGACY_SET_REPLCOST_report.md) identifies an `MboSet` resource leak as Critical. The optimized file adds cleanup in `finally`, but the replacement flag and Maximo runtime compatibility require validation.
    * [`LEGACY_PO_NOLINES_CHECK_report.md`](../../maximo-scripts/reports/LEGACY_PO_NOLINES_CHECK_report.md) identifies the print statements, repeated `count()`, unclosed MboSet, and deprecated error signalling. The optimized file addresses these findings with logging, a cached count, cleanup, and `service.error()`.
    * [`LEGACY_CALC_report.md`](../../maximo-scripts/reports/LEGACY_CALC_report.md) and [`LEGACY_PO_TOTALS_report.md`](../../maximo-scripts/reports/LEGACY_PO_TOTALS_report.md) require coordinated script-variable configuration before deployment.
    * [`LEGACY_SPAREPART_QTY_INIT_report.md`](../../maximo-scripts/reports/LEGACY_SPAREPART_QTY_INIT_report.md) contains a version-dependent `isLimitedAttribute()` recommendation that must be validated against the target Maximo version.
    * [`LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE_report.md`](../../maximo-scripts/reports/LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE_report.md) recommends an Object Event Filter as an architectural improvement; the generated source remains a User Exit implementation.

1. Open the matching report for each script you plan to deploy. Review **Deployment Notes**, **Testing Recommendations**, and any prerequisite configuration. In particular, do not deploy scripts with configuration-dependent recommendations until those prerequisites and the target Maximo version have been verified.

1. Set deployment priority based on verified severity and business impact. Fix **Critical** issues first (especially `eval()`, plaintext HTTP, hardcoded credentials, and resource leaks), followed by **High** issues such as missing error handling, null safety, and performance problems. Treat architectural recommendations such as launch-point changes as configuration changes, not drop-in source replacements.
