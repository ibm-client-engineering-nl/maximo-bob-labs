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
   | **1 – Setup** | Creates a `maximo-scripts/` project structure, asks for your Maximo URL and API key, stores credentials in a `.env` file (`MAXIMO_URL`, `MAXIMO_API_KEY`), and installs Python dependencies (`requests`, `python-dotenv`, `urllib3`) into an isolated virtual environment. |
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
     .env                  ← credentials (MAXIMO_URL, MAXIMO_API_KEY) — not committed to git
     .venv/                ← isolated Python virtual environment — not committed to git
     tools/
       fetch_maximo_scripts.py
       requirements.txt
     original/             ← unmodified scripts from Maximo
     optimized/             ← rewritten scripts with all fixes
     reports/               ← per-script + summary Markdown reports
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

    Bob stores these values in `maximo-scripts/.env` as `MAXIMO_URL` and `MAXIMO_API_KEY`, and uses them to connect to the REST API.

1. Bob shows a task list with the optimization steps. Use this list to track progress during analysis, issue detection, and code generation.

    Bob processes each script in order. For each script, it:

    * Checks code quality for performance, security, maintainability, and coding standards.
    * Identifies issues by severity (Critical, High, Medium, Low).
    * Generates optimized code with the same business logic where possible.
    * Creates a report with before-and-after examples, testing guidance, and deployment notes.

1. After all scripts are processed, Bob shows a summary. The generated lab output contains eight optimized files in `maximo-scripts/optimized/` and eight detailed reports plus `SUMMARY_REPORT.md` in `maximo-scripts/reports/`.

    The generated summary must reconcile with the individual reports: the per-script totals and severity totals in `SUMMARY_REPORT.md` must equal the sum of the individual per-script report headers. **Exact issue counts vary slightly from run to run** — some rules involve borderline pattern judgment during analysis — but the totals within a single run must always be internally consistent.

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

1. **Check the Bob chat output first.** Your results should generally match what's below. A handful of the analysis rules involve borderline judgment calls rather than a fixed checklist match, so the exact High/Medium counts can occasionally shift by a point or two from one run to the next, even on the same scripts. Use the figures below as your baseline, and use the ranges only to judge whether a difference is within that normal variation or worth a re-run:

    * **8 scripts** analyzed
    * **Critical: 5.** This should be exact and consistent — the skill defines exactly five Critical-tier rules. Treat any other Critical count as a sign something went wrong, not as acceptable variation.
    * **High: 12–14, Medium: 2–3, Low: 0.** Small movement inside these ranges between runs is normal and not a cause for concern.
    * All 8 script names appear: `LEGACY_ASSETNUM_VALIDATION`, `LEGACY_CALC`, `LEGACY_COUNTRY_LOOKUP`, `LEGACY_PO_NOLINES_CHECK`, `LEGACY_PO_TOTALS`, `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE`, `LEGACY_SET_REPLCOST`, `LEGACY_SPAREPART_QTY_INIT`

    If Critical isn't 5, a script is missing, or the total falls well outside the ranges above, re-run the analysis for the affected script(s) (see the prompt in the previous section).

1. **Open `maximo-scripts/reports/SUMMARY_REPORT.md`** for the full picture. This file is the starting point for deployment planning. Within a single run, its numbers are generated from one reconciled ledger, so the per-script table, severity totals, and Critical Issues section will always agree with each other — even though the totals themselves can differ from a previous run.

    * The **per-script table** lists every script with its Critical, High, and Medium counts and its top issue. Use this to quickly identify which scripts carry the most risk *this run*.
    * The **Critical Issues** block names all five Critical findings this run. All five are typically distributed across just three scripts:
        * `LEGACY_COUNTRY_LOOKUP` — 3 Critical: `eval()` code injection on an external HTTP response, hardcoded HTTP credentials with a plaintext URL, and an unclosed `MXServer`-obtained `MboSet` that leaks a database handle on every lookup.
        * `LEGACY_PO_NOLINES_CHECK` — 1 Critical: Python 2 `print` statements (a hard compile failure on modern Jython — the script silently fails to load at all).
        * `LEGACY_SET_REPLCOST` — 1 Critical: an unclosed `MXServer`-obtained `MboSet` that leaks a database handle under load.

      This distribution should normally repeat run to run. If your run's Critical Issues block spreads the five findings across scripts differently, that's still an acceptable outcome as long as the total is still 5 and each entry is backed by a real, specific rule finding in that script's individual report — it isn't a sign the run is wrong, just a reminder to check the actual report rather than assume it matches the list above.
    * The **Deployment Priority table** is computed from *this run's* actual findings — see the next step.

1. **Deployment priority is derived from this run's findings, not from script names.** For this script set, the table should normally group scripts as follows on every run:

    * **Immediate** — every script with ≥1 Critical finding this run (typically `LEGACY_COUNTRY_LOOKUP`, `LEGACY_PO_NOLINES_CHECK`, `LEGACY_SET_REPLCOST`).
    * **Next release** — every remaining script (not already in Immediate) with ≥1 High finding this run (typically `LEGACY_ASSETNUM_VALIDATION`, `LEGACY_CALC`, `LEGACY_PO_TOTALS`, `LEGACY_SPAREPART_QTY_INIT`).
    * **Planned** — remaining scripts with only Medium findings, or scripts whose fix requires a configuration change beyond a drop-in script update (typically `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE`, which needs an Event Filter launch-point migration).
    * **Enhancement** — anything left with only Low findings. Often empty for this script set.

    A script appears in exactly one tier — the earliest one it qualifies for. The quickest check: open the Critical Issues block from the previous step and confirm every script named there also appears in Immediate here. If a script with a Critical finding this run shows up in a lower tier instead, priority is being pulled from somewhere other than this run's actual findings — flag it and ask Bob to recompute the table from the individual reports.

1. **Review each per-script report** in `maximo-scripts/reports/`. Open the report for the script you are planning to deploy. Each report follows the same structure — work through it in order:

    * **Header table** — confirms the script name, language, launch point, issue count, and highest severity. Verify the launch point matches what is configured in your Maximo environment before proceeding.
    * **Issue Summary table** — lists every detected issue with its severity and category. This is the checklist you validate against the optimized source.
    * **Per-issue sections** — each issue includes a description of the problem, the lines affected, and a before/after code snippet. Compare the *before* snippet against `maximo-scripts/original/` and the *after* snippet against `maximo-scripts/optimized/` to confirm the fix was applied correctly and that business logic is preserved.
    * **Testing Recommendations** — provides concrete test scenarios with expected results. Use these to drive your test cases in the Maximo Automation Scripts Test dialog before deploying to production.
    * **Deployment Notes** — lists prerequisites, launch-point configuration changes, and any environment-specific steps. Do not deploy a script until every item in this section has been verified against your target environment.

1. **Validate your findings against the expected pattern.** The three Critical-anchored findings below should appear in every run — if one is missing or its severity differs, re-run the analysis for that script. The High-severity findings after them are common in this script set, but High counts normally shift by a point or two between runs (see the earlier range), so one of these not showing up in your run isn't on its own a reason to re-run — use them to confirm the fix when you do see them, and check the rest of that script's report for whatever was flagged instead.

    **Should appear every run:**
    * `LEGACY_COUNTRY_LOOKUP_report.md` — 3 Critical: `eval()` code injection, plaintext HTTP with hardcoded credentials, and an unclosed `MXServer`-obtained `MboSet`. The optimized file fixes all three; verify the replacement endpoint uses HTTPS, credentials are moved to a Maximo system property, and the `try/finally cleanup()` block is present.
    * `LEGACY_SET_REPLCOST_report.md` — 1 Critical: `MboSet` obtained from `MXServer` is never closed, exhausting the connection pool under load. The optimized file adds `try/finally` cleanup; verify the `NOACCESSCHECK` flag and Maximo runtime version before deploying.
    * `LEGACY_PO_NOLINES_CHECK_report.md` — 1 Critical: Python 2 `print` statements. The optimized file replaces them with `MXLoggerFactory` and fixes the repeated `count()`, the `errorgroup`/`errorkey` flag pattern, and other High-severity issues found alongside it.

    **Common, but may not appear every run — confirm the fix if you see them, don't re-run just because one is absent:**
    * `LEGACY_ASSETNUM_VALIDATION_report.md` — typically 1 High: `mbo.getString("ASSETTYPE")` compared against a literal string returns the locale-dependent display value, not the internal MAXVALUE, and silently misbehaves across locales. The optimized file switches to the derived `_internal` implicit variable.
    * `LEGACY_CALC_report.md` and `LEGACY_PO_TOTALS_report.md` — if `LEGACY_CALC`'s optimized script restructures it into a dispatch function (`_calc_multiply`), coordinated deployment is required: `PO_TOTALS`'s optimized code calls that function, so it only exists once `CALC` is deployed — deploy `CALC` first. Check `LEGACY_CALC`'s optimized file for this dispatch structure before assuming the dependency applies. If it applies, also confirm "Allow Invoking Script Functions" is enabled on the `CALC` script record before deploying `PO_TOTALS`; this flag is immutable once set, so verify it before deploying rather than after.
    * `LEGACY_SPAREPART_QTY_INIT_report.md` — typically 1 High: an unguarded Object Init launch point runs on every Asset load. The interim fix adds a `UIContext.isFromListTab()` guard — verify this API is available in your target Maximo version. The definitive fix is migrating to an Attribute Init Value launch point on `ASSET.SPAREPARTQTY`; this is a separate launch-point change, not part of the script deploy itself.
    * `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE_report.md` — architectural improvement only. The generated source remains a User Exit implementation; migrating to an Object Event Filter is a separate configuration change, not a drop-in script replacement.

### Deploy optimized scripts to Maximo
---

With the reports reviewed and the optimized scripts validated, it's time to deploy them to your Maximo environment and put them through the Automation Scripts Test dialog before they go live.

1. In Bob, click the mode selector and switch to **Plan** mode.

1. Copy and paste the following prompt into the chat and submit it:

    ```
    Create a plan to deploy the optimized scripts in maximo-scripts to Maximo.

    Determine deployment order from the actual findings in
    each script's individual report for THIS run — not from a fixed reference list.

    IMPORTANT: To prevent conflicts with automation scripts of the other participants,
    replace the prefix LEGACY_ with my initials followed by underscore. Ask me for my
    initials if I have not already provided them. Apply this renaming inside the script
    source too — update any MXLoggerFactory.getLogger("maximo.script.<NAME>") call and
    any log message text that references the script's own name, so log output is
    traceable back to the deployed name, not the original LEGACY_ name.

    Deploy every script's autoscript record with active: false, and every launch point
    with active: false, so nothing goes live automatically. Make sure all scripts and
    their corresponding appropriate launch points and script variable configurations
    (as documented in the reports and original script headers) are successfully
    deployed or configured.

    For each script, check its individual report's Deployment Recommendations section
    for environment-specific prerequisites (system properties, Integration endpoint
    records, etc.). Treat anything explicitly described as required before deploying
    as a blocker — configure or flag it before that script is deployed. Treat anything
    described as only needed once the feature is used as a runtime dependency — note
    it in the plan but do not block deployment on it. List both kinds explicitly in
    the generated plan so I can see which is which.
    ```

1. Provide your initials if requested by Bob and approve the plan creation. It may take a little while for the deployment plan to be fully generated. Provide input whenever needed.
1. Review and approve the generated deployment plan.

1. Switch to **Agent** mode and instruct Bob to implement the deployment plan.

1. **Stay engaged during implementation.** Bob will work through the plan step by step — writing the deploy script, running a dry run, deploying each tier, and verifying the results. At each step, carefully read Bob's output and actively approve, adjust, or reject what Bob proposes. For example, Bob may suggest changes to script content, prompt you to confirm a dry-run result before proceeding, or ask clarifying questions about your environment. Do not just let Bob run — your review at each step ensures the deployment goes exactly as intended.

1. After the deployment finished and the script verified deployment, the output should look similar to:

    ::: info Deployment summary & Implementation Results
    All 8 optimized automation scripts and their corresponding launch points and variable bindings have been deployed to your Maximo environment under the `EC_` prefix with `active: false`.

    ---

    ### Deployed Scripts & Launch Points Matrix

    | Script Name | Language | Launch Point Name | Launch Point Type | Event / Binding | Active |
    |---|---|---|---|---|---|
    | `EC_COUNTRY_LOOKUP` | `nashorn` | `EC_COUNTRY_LOOKUP` | `ATTRIBUTE` (ADDRESS.ADDRESS5) | `RETRIEVELIST` | `false` |
    | `EC_PO_NOLINES_CHECK` | `jython` | `EC_PO_NOLINES_CHECK` | `OBJECT` (PO) | `SAVE` (Add=True, Update=True) | `false` |
    | `EC_SET_REPLCOST` | `jython` | `EC_SET_REPLCOST` | `ATTRIBUTE` (ASSET.PURCHASEPRICE) | `ACTION` | `false` |
    | `EC_CALC` | `jython` | *(None - Library)* | N/A | Callable via `service.invokeScript` | `false` |
    | `EC_PO_TOTALS` | `jython` | `EC_PO_TOTALS` | `OBJECT` (PO) | `SAVE` (Before Save) | `false` |
    | `EC_ASSETNUM_VALIDATION` | `jython` | `EC_ASSETNUM_VALIDATION` | `OBJECT` (ASSET) | `SAVE` (Add=True, Update=False) | `false` |
    | `EC_SPAREPART_QTY_INIT` | `jython` | `EC_SPAREPART_QTY_INIT` | `OBJECT` (ASSET) | `INIT` + `sptqt` (OUT), `qtys` (IN) | `false` |
    | `EC_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE` | `jython` | *(None - User Exit)* | N/A | Integration User Exit | `false` |

    ---

    ### Verification Audit Findings
    1. **Script Renaming & Traceability:** All internal references (`ScriptLogger.getLogger("maximo.script.EC_*")`, error messages, and `service.invokeScript("EC_CALC", "calc", ...)`) were updated to `EC_`.
    2. **Variable Bindings (`autoscriptvars`):** Verified on `EC_SPAREPART_QTY_INIT`:
    - `sptqt`: `OUT` bound to `SPAREPARTQTY`
    - `qtys`: `IN` bound to `SPAREPART.QUANTITY`
    3. **Safety & Inactive State:** All 8 scripts and 6 launch points are in inactive (`active: false`) state in Maximo. 
    :::

> **Note — deployment prerequisites vs. runtime configuration:** The prompt above already asks Bob to sort each script's environment-specific prerequisites into blockers (must happen before deploying) versus runtime dependencies (only needed once the feature is used), based on that script's own Deployment Recommendations section. When you review the plan, confirm that split looks right for your environment before approving it — if a prerequisite's classification seems off, ask Bob to double-check it against the report rather than accepting it as-is.

### Testing your Scripts
---

Once the optimized scripts and their launch points have been deployed, you can safely test them within Maximo without activating them globally.

In Maximo Application Suite, navigate to **System Configuration → Platform Configuration → Automation Scripts**, open each script record, and use the **Test Script** button / dialog available in the UI. This allows you to simulate execution, supply runtime context or test records, and inspect the script's behavior and log output.

Below are the test instructions and validation scenarios for each deployed script, derived from the optimization reports.

#### COUNTRY_LOOKUP
:::danger Error
This test section is not working properly yet.
:::
* **Script Type:** Attribute Launch Point — `ADDRESS.ADDRESS5` — `RETRIEVELIST` (JavaScript / Nashorn)
* **Optimization Highlights:** Replaced `eval()` with safe `JSON.parse()`, moved external endpoint URL and credentials to system property `ext.country.api.url`, added error handling and `try/finally` cleanup on `MboSet` handles.

> **Note on Retrieve List Testing:** In Maximo, `RETRIEVELIST` attribute launch points build dynamic value-lists over REST / OSLC APIs. To test this script, temporarily activate the launch point and ask Bob to trigger the `getlist~address5=1` endpoint.

**Testing Steps & Scenarios:**
1. In **System Configuration → Platform Configuration → System Properties**, verify that `ext.country.api.url` is defined and that its current value points to a valid HTTPS endpoint returning country JSON data. This has been preconfigured for you.
2. **Activate Launch Point:** In **Automation Scripts**, open your `COUNTRY_LOOKUP` script and launch point, and set **Active** to `true` for both the script and the launch point.
3. In the chat prompt, ask Bob:
   ```
   Test my deployed COUNTRY_LOOKUP script by making a GET request to the REST endpoint for ADDRESS.ADDRESS5 list retrieval using credentials in maximo-scripts/.env.
   ```
   Bob will invoke:
   ```text
   GET {MAXIMO_URL}/oslc/os/mxapiaddress?lean=1&getlist~address5=1
   ```
   - **Expected Result:** Maximo triggers the `RETRIEVELIST` launch point, executes `service.httpget(apiUrl)`, parses the response using `JSON.parse()`, builds the `COUNTRY` list MboSet, and returns the list of countries.
4. **Missing System Property Test:**
   - In System Properties, temporarily clear or blank out `ext.country.api.url` (and run Live Refresh).
   - Ask Bob to execute the REST call again:
     ```
     Test the COUNTRY_LOOKUP REST endpoint again to verify behavior with missing system property.
     ```
   - **Expected Result:** The script catches that `!apiUrl` and returns the controlled error `countrylookup/missingproperty`.
5. **Empty / Malformed Response Handling:**
   - Temporarily point `ext.country.api.url` to an endpoint returning an empty body or invalid JSON.
   - Ask Bob to re-run the REST query.
   - **Expected Result:** An empty response raises `countrylookup/emptyresponse`; malformed JSON is caught by the `catch` block and logged via `service.log_error`, while `countriesSet.cleanup()` in the `finally` block guarantees no connection leaks.
6. **Restore Configuration & Deactivate:** Revert `ext.country.api.url` to the valid endpoint URL in System Properties (with Live Refresh), and set the launch point back to **Inactive** (`active: false`).

#### PO_NOLINES_CHECK

* **Script Type:** Object Launch Point — `PO` — `SAVE` (On Add, On Update) (Jython)
* **Optimization Highlights:** Removed Python 2 `print` statements in favor of `ScriptLogger` (`MXLoggerFactory`), eliminated duplicate `count()` SQL queries, replaced flag-based error setting with deterministic `service.error("po", "nolines")`.

**Testing Steps in Maximo UI:**

1. **Activate Script & Launch Point:** In **System Configuration → Platform Configuration → Automation Scripts**, open `PO_NOLINES_CHECK` and ensure both the script and its launch point (`PO_NOLINES_CHECK`) have the **Active** checkbox checked. (The script will not execute in tests unless both are active).
2. Open the `PO_NOLINES_CHECK` script record and click the **Test Script** button.
3. **Scenario 1: PO with No Lines (Expected to be blocked)**
   - Under **Launch Point**, select `PO_NOLINES_CHECK`.
   - Select **Existing Object**.
   - In **Object Path**, enter: `PO[ponum='1125']` (Purchase Order 1125 is a WAPPR draft PO with no PO lines).
   - In the **Set attribute values** table, click **Add Row** (➕) and set `DESCRIPTION` to `Test Save Trigger` (modifying an attribute triggers the `Save - On Update` event; otherwise Maximo only loads the record without firing save logic).
   - Click the **Test** button in the bottom bar.
   - **Expected Result:**
     - The script executes, detects `poLineCount == 0`, and calls `service.error("po", "nolines")`.
     - In the **Process Log** (right pane), the save transaction is blocked and displays the controlled Maximo exception:
       ```text
       po#nolines
       com.ibm.tivoli.maximo.script.ScriptService.error(ScriptService.java:481)
       ```
4. **Scenario 2: PO with PO Lines (Expected to succeed)**
   - In the **Test Auto Script** dialog, change **Object Path** to: `PO[ponum='1005']` (Purchase Order 1005 is a draft `WAPPR` PO with 2 PO lines).
   - In **Set attribute values**, set `DESCRIPTION` to `Updated Supplies`.
   - Click the **Test** button.
   - **Expected Result:**
     - The script detects `poLineCount == 2`, so `service.error("po", "nolines")` is **not** called.
     - In the **Process Log**, the script logs at debug level: `Checking PO 1005 - line count: 2`.
     - Execution finishes cleanly and renders the updated `POMbo` XML structure in the **Data** pane without raising `po#nolines`.
5. **Deactivate:** Return both the script and launch point to **Inactive** (`active: false`) after testing.

#### SET_REPLCOST

* **Script Type:** Attribute Launch Point — `ASSET.PURCHASEPRICE` — `ACTION` (Jython)
* **Optimization Highlights:** Guarded `purchaseprice` implicit variable against `None`, replaced obsolete `2L` syntax with `MboConstants.NOACCESSCHECK`, wrapped `ASSETTRANS` MboSet access in `try/finally` with `cleanup()`, cached count calls, and integrated `MXLoggerFactory`.

**Testing Steps in Maximo UI:**

1. **Activate Script & Launch Point:** In **System Configuration → Platform Configuration → Automation Scripts**, open `SET_REPLCOST` and ensure both the script and its launch point (`SET_REPLCOST`) have the **Active** checkbox checked.
2. Open the `SET_REPLCOST` script record and click the **Test Script** button.
3. **Scenario 1: Valid Purchase Price Calculation (50% rule)**
   - Under **Launch Point**, select `SET_REPLCOST`.
   - Select **New Object** (or **Existing Object** e.g. `ASSET[assetnum='11400' and siteid='BEDFORD']`).
   - In **Object Path**, enter: `ASSET`.
   - In the **Set attribute values** table, click **Add Row** (➕) and configure:
     - **Attribute Name:** `PURCHASEPRICE`
     - **Value:** `1000.00`
   - Click the **Test** button in the bottom bar.
   - **Expected Result:**
     - The script executes the calculation `purchaseprice / 2` without syntax or long-integer errors.
     - In the **Data** pane (left pane), locate the `<REPLACECOST>` tag in the XML output and confirm it is populated with `500.0`:
       ```xml
       <REPLACECOST>500.0</REPLACECOST>
       ```
     - In the **Process Log** (right pane), execution completes without exceptions, and `ASSETTRANS` MboSet handles are cleaned up in the `finally` block.
4. **Scenario 2: Null / Unset Purchase Price (Null-safety guard)**
   - In the same **Test Auto Script** dialog, remove or leave `PURCHASEPRICE` blank in the **Set attribute values** table (or set `PURCHASEPRICE` to blank).
   - Click the **Test** button.
   - **Expected Result:**
     - The null guard `if purchaseprice is not None:` intercepts execution.
     - The script completes safely without throwing a `TypeError` on arithmetic (`None / 2`).
     - In the **Data** pane, `<REPLACECOST>` remains unset / unchanged.
5. **Deactivate:** Return both the script and launch point to **Inactive** (`active: false`) after testing.

#### PO_TOTALS & CALC Library
:::danger Error
This test section is not working properly yet.
:::

* **Script Type:**
  * `PO_TOTALS`: Object Launch Point - `PO` - `SAVE` (Before Save) (Jython)
  * `CALC`: Library Script (Callable via `service.invokeScript`) (Jython)
* **Optimization Highlights:** Replaced legacy `HashMap` invocation with direct function invocation `service.invokeScript("CALC", "calc", ["multiply", 2, 3])`, added null-check guards on the return value, and transformed `CALC` into a robust dispatch table with parameter validation and explicit error handling for division by zero and invalid operations.

**Testing Steps in Maximo UI:**

1. **Activate Scripts & Launch Point:**
   - In **System Configuration → Platform Configuration → Automation Scripts**, open both your `CALC` and `PO_TOTALS` script records and set the **Active** checkbox to `true` for each, along with the `PO_TOTALS` launch point.

2. **Scenario 1: Default State — `Allow Invoking Script Functions` Unchecked:**

   > ⚠️ **Expected on first deployment.** When a script is freshly deployed via the API, the **Allow Invoking Script Functions** checkbox is unchecked by default. Run this scenario first to confirm the failure mode before enabling the flag.

   - Open the `PO_TOTALS` script record and click the **Test Script** button.
   - Under **Launch Point**, select `PO_TOTALS`.
   - Select **Existing Object** and set **Object Path** to: `PO[ponum='1005']`.
   - In the **Set attribute values** table, click **Add Row** (+) and set `PRIORITY` to `1` to trigger the save event.
   - Click the **Test** button in the bottom bar.
   - **Expected Result:**
     - `service.invokeScript()` cannot locate `CALC`'s exported function because the flag is disabled.
     - The null-safety guard intercepts execution and raises the controlled error in the **Process Log**:
       ```text
       pototals#callfailed
       com.ibm.tivoli.maximo.script.ScriptService.error(ScriptService.java:456)
       java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source)
       java.base/java.lang.reflect.Method.invoke(Unknown Source)
       org.python.core.PyReflectedFunction.__call__(PyReflectedFunction.java:207)
       ...
       com.ibm.ism.script.autoscript.AutoScriptTestSet.execute(AutoScriptTestSet.java:355)
       ```

3. **Enable `Allow Invoking Script Functions` — Delete and Recreate `CALC`:**

   > ℹ️ The **Allow Invoking Script Functions** flag cannot be toggled on an existing script record. You must delete the script and recreate it with the flag enabled.

   - In **Automation Scripts**, search for and open your `CALC` script (e.g. `AB_CALC` for initials `AB`).
   - From the record's action menu, select **Delete Script** and confirm the deletion.
   - Click **New Script** to create a new Automation Script record.
   - Set the following fields:
     - **Script:** enter your initials followed by `_CALC` (e.g. `AB_CALC`)
     - **Script Language:** `Jython`
     - **Active:** checked
     - **Allow Invoking Script Functions:** ✅ checked — this is the critical step
   - Paste the full source code from your `<initials>_CALC` optimized script into the **Source Code** field.
   - Click **Save**.
   - Confirm the script record now shows **Allow Invoking Script Functions** as checked before proceeding.

4. **Scenario 2: Standard Calculation — Multiply (`PO_TOTALS` calling `CALC.calc("multiply", 2, 3)`):**
   - Open the `PO_TOTALS` script record and click the **Test Script** button.
   - Under **Launch Point**, select `PO_TOTALS`.
   - Select **Existing Object** and set **Object Path** to: `PO[ponum='1005']`.
   - In the **Set attribute values** table, click **Add Row** (+) and set `PRIORITY` to `1` to trigger the save event.
   - Click the **Test** button in the bottom bar.
   - **Expected Result:**
     - `PO_TOTALS` invokes `CALC.calc("multiply", 2, 3)` and receives `6`.
     - In the **Data** pane (left pane), locate `<CUSTOMTOTAL>` in the XML output and confirm it is populated with `6.0`:
       ```xml
       <CUSTOMTOTAL>6.0</CUSTOMTOTAL>
       ```
     - In the **Process Log** (right pane), execution completes cleanly without exceptions.

5. **Scenario 3: Division (`CALC.calc("divide", 10, 2)`):**
   - In `PO_TOTALS`'s source, temporarily change the `invokeScript` call to pass `"divide"` with operands `10` and `2`.
   - Re-run the test with the same PO object and save trigger as above.
   - **Expected Result:**
     - `CALC` returns `5.0`.
     - `<CUSTOMTOTAL>5.0</CUSTOMTOTAL>` appears in the **Data** pane.
     - No division-by-zero exception is raised.
   - Revert the source change after confirming the result.

6. **Scenario 4: Addition (`CALC.calc("add", 4, 7)`):**
   - Similarly, temporarily change the `invokeScript` call to `"add"` with operands `4` and `7`.
   - Re-run the test.
   - **Expected Result:**
     - `CALC` returns `11`.
     - `<CUSTOMTOTAL>11.0</CUSTOMTOTAL>` appears in the **Data** pane.
   - Revert the source change after confirming the result.

7. **Deactivate:** Return both scripts and the `PO_TOTALS` launch point to **Inactive** (`active: false`) after testing.

#### ASSETNUM_VALIDATION

* **Script Type:** Object Launch Point — `ASSET` — `SAVE` (On Add) (Jython)
* **Optimization Highlights:** Replaced locale-dependent `mbo.getString("ASSETTYPE")` with the runtime implicit variable `assettype_internal`, which always holds the MAXVALUE regardless of locale, preventing silent `PREFIX_MAP` lookup failures in non-English environments.

**Testing Steps in Maximo UI:**

1. **Activate Script & Launch Point:** In **System Configuration → Platform Configuration → Automation Scripts**, open `ASSETNUM_VALIDATION` and ensure both the script and its launch point (`ASSETNUM_VALIDATION`) have the **Active** checkbox checked.
2. Open the `ASSETNUM_VALIDATION` script record and click the **Test Script** button.
3. **Scenario 1: Valid Prefix Match (Expected to succeed)**
   - Under **Launch Point**, select `ASSETNUM_VALIDATION`.
   - Select **New Object**.
   - In the **Set attribute values** table, click **Add Row** (➕) and configure:
     - **Attribute Name:** `ASSETNUM` → **Value:** `FL-001`
     - **Attribute Name:** `ASSETTYPE` → **Value:** `FLEET`
   - Click the **Test** button in the bottom bar.
   - **Expected Result:**
     - `assettype_internal` resolves to `FLEET`; `PREFIX_MAP.get("FLEET")` returns `FL`.
     - `"FL-001".startsWith("FL")` is `True` — `service.error` is **not** called.
     - In the **Process Log** (right pane), execution completes cleanly with no exception raised.
4. **Scenario 2: Invalid Prefix Mismatch (Expected to be blocked)**
   - In the **Set attribute values** table, update the rows:
     - `ASSETNUM` → `PUMP-100`
     - `ASSETTYPE` → `FACILITIES`
   - Click the **Test** button.
   - **Expected Result:**
     - `PREFIX_MAP.get("FACILITIES")` returns `FT`; `"PUMP-100".startsWith("FT")` is `False`.
     - The script calls `service.error('asset', 'invalidassetprefix', ['FT'])`.
     - In the **Process Log**, the save transaction is blocked with a controlled Maximo exception:
       ```text
       asset#invalidassetprefix
       com.ibm.tivoli.maximo.script.ScriptService.error(ScriptService.java:481)
       ```
     - The debug log entry reads: `Asset PUMP-100 failed prefix check for type FACILITIES`.
5. **Scenario 3: Unmapped Asset Type (Expected to succeed)**
   - Update the attribute values:
     - `ASSETNUM` → `PROD-999`
     - `ASSETTYPE` → `PRODUCTION`
   - Click the **Test** button.
   - **Expected Result:**
     - `PREFIX_MAP.get("PRODUCTION")` returns `None` — the `if required_prefix is not None` guard is not entered.
     - Execution completes without any error or validation block.
     - In the **Process Log**, no exception is raised and `service.error` is not called.
6. **Scenario 4: Locale Independence (NULL-04 fix verification)**
   - If your Maximo environment supports user locale switching, set your user profile to a non-English locale (e.g. French or German) and repeat Scenario 2 from the **Automation Scripts** UI.
   - **Expected Result:**
     - The display label for `FACILITIES` may differ in the non-English locale, but `assettype_internal` still resolves to the underlying MAXVALUE `FACILITIES`.
     - The validation blocks the save identically — `PREFIX_MAP` lookup succeeds and `service.error` is raised.
     - This confirms that replacing `mbo.getString("ASSETTYPE")` with `assettype_internal` eliminated the silent failure mode documented in issue A-01.
7. **Deactivate:** Return both the script and launch point to **Inactive** (`active: false`) after testing.

#### SPAREPART_QTY_INIT

* **Script Type:** Object Launch Point — `ASSET` — `INIT` (Jython)
* **Optimization Highlights:** Replaced the `sum(qtys)` IN-variable approach (which only ever returned the first spare part's quantity) with a direct `mbo.getMboSet("SPAREPART")` traversal to correctly sum all rows. Added an `app`-based context guard (`hasattr(app, 'isFromListTab') and app.isFromListTab()`) to skip the traversal on list-tab loads, where `app` is a unicode string rather than an app object. REST, MIF, and escalation contexts are not filtered by this guard — the full structural fix is to migrate to an Attribute Init Value launch point on `SPAREPARTQTY`.

**Testing Steps in Maximo UI:**

1. **Activate Script & Launch Point:** In **System Configuration → Platform Configuration → Automation Scripts**, open `SPAREPART_QTY_INIT` and ensure both the script and its launch point (`SPAREPART_QTY_INIT`) have the **Active** checkbox checked.
2. **Remove the `qtys` variable binding:** In the script record's **Variables** section, find the row with **Variable Name: `qtys`** and delete it. The script no longer uses an `IN` binding — it queries the `SPAREPART` child MboSet directly. Only the `sptqt` OUT binding should remain.
3. Open the `SPAREPART_QTY_INIT` script record and click the **Test Script** button.

4. **Scenario 1: Interactive Detail Tab Load — Calculation Executes**
   - Under **Launch Point**, select `SPAREPART_QTY_INIT`.
   - Select **Existing Object** and set **Object Path** to: `ASSET[assetnum='11400']` — this asset has 3 spare parts (ELEMENT KIT, PACKING LUBE DIVIDER VALVE, Bracket Steel Support), each with quantity `1.00`, giving a total of `3`.
   - Leave the **Set attribute values** table empty.
   - Click the **Test** button in the bottom bar.
   - **Expected Result:**
     - `hasattr(app, 'isFromListTab')` returns `True` in the Test Script dialog context and `app.isFromListTab()` returns `False`, so `is_list_tab` is `False` and the guard is passed.
     - The script traverses the `SPAREPART` MboSet via `mbo.getMboSet("SPAREPART")`, reads `QUANTITY` from all 3 rows, and sets `sptqt = 3`.
     - In the **Process Log** (right pane), the debug log reads: `sparepartqty initialised to 3`.
     - `SPAREPARTQTY` may not appear in the **Data** pane XML — non-persistent attributes are omitted from the serialised output when their value matches the default. The Process Log entry is the authoritative confirmation.
     - `sptqt_readonly` is `True`, causing `SPAREPARTQTY` to render as read-only in the UI.
5. **Scenario 2: Empty / Null Spare Parts — Default to Zero**
   - Change **Object Path** to: `ASSET[assetnum='11400']` — use the same asset but note that for a true zero-spare-parts test, any asset with an empty Spare Parts tab would give `sptqt = 0`.
   - Leave the **Set attribute values** table empty.
   - Click the **Test** button.
   - **Expected Result:**
     - `mbo.getMboSet("SPAREPART").moveFirst()` returns `None` immediately — the while loop does not execute.
     - `sptqt = 0` (total remains at its initial value).
     - `SPAREPARTQTY` does **not** appear in the **Data** pane XML — a non-persistent attribute with a zero/default value is omitted from the output. This is normal Maximo behaviour.
     - The **Process Log** shows `sparepartqty initialised to 0`.
     - `sptqt_readonly` is still `True`.
6. **Scenario 3: List Tab / Background Context Guard — Calculation is Skipped**

   > ℹ️ **The Maximo Test Script dialog always runs in a non-list-tab context** (`app.isFromListTab()` returns `False`). To verify the PERF-02 guard, temporarily patch the script source in the dialog to hardcode `is_list_tab = True`, then run the test.

   - Temporarily modify the script source in the dialog:
     ```python
     is_list_tab = True  # Simulating list tab / background context
     ```
   - Re-run the test with `ASSET[assetnum='11400']`.
   - **Expected Result:**
     - `is_list_tab` is `True`, so the `if not is_list_tab:` block is not entered.
     - `sptqt` is never assigned — `<SPAREPARTQTY>` remains absent from the **Data** pane.
     - In the **Process Log**, the `sparepartqty initialised to` debug message does **not** appear.
     - `sptqt_readonly` is still set to `True` (it sits outside the guard intentionally).
   - Revert the source change after confirming the result.
7. **Deactivate:** Return both the script and launch point to **Inactive** (`active: false`) after testing.
