## Maximo Modernization Bob Skills

The Maximo modernization building blocks enable AI-powered automation script optimization and legacy Java-to-automation script conversion for IBM Maximo Application Suite (MAS).



### Available Assets & Skills
---
#### maximo-code-optimization.zip

A comprehensive skill for analyzing and optimizing Maximo automation scripts:

* Fetch and analyze scripts directly via Maximo REST APIs (`MXAPIAUTOSCRIPT`).
* Automated security analysis (SQL injection prevention, input validation) and performance improvements (MboSet lifecycle, caching).
* Detailed severity-ranked before/after reports and logging best practices with `MXLoggerFactory`.

To use this skill, click [maximo-code-optimization.zip](/maximo/maximo-code-optimization.zip) to download it as a ZIP archive.

#### maximo_java_conversion.zip

A comprehensive skill for converting legacy Maximo Java classes to automation scripts:

* Business logic preservation across Python/Jython, JavaScript, Nashorn, and ECMAScript.
* Automated generation of test scripts alongside converted automation scripts.
* Batch conversion capabilities with comprehensive validation reports.

To use this skill, click [maximo_java_conversion.zip](/maximo/maximo_java_conversion.zip) to download it as a ZIP archive.

### Installation and Setup
---

#### Extract the Skills to Bob Workspace

1. Create a new directory for your Bob workspace and open it in Bob.

   ::: tabs key:MacOS/LinuxWindows
   == Windows
   ```
   New-Item -ItemType Directory -Force -Path C:\path\to\your\bob\workspace
   Set-Location C:\path\to\your\bob\workspace
   ```
   == MacOS / Linux
   ```
   mkdir -p /path/to/your/bob/workspace
   cd /path/to/your/bob/workspace
   ```
   :::

1. Click the [download](/maximo/maximo-code-optimization.zip) link in the section above to download the desired skill(s). Next, extract the ZIP archive(s) into your Bob workspace skills directory. For this, change directory to your workspace.

   ::: tabs key:MacOS/LinuxWindows
   == Windows
   ```
   Set-Location C:\path\to\your\bob\workspace
   ```
   == MacOS / Linux
   ```bash
   cd /path/to/your/bob/workspace
   ```
   :::

1. Next, unzip the downloaded skills into your workspace.

   ::: tabs key:MacOS/LinuxWindows
   == Windows
   ```
   Expand-Archive -Path C:\path\to\downloaded-zip-archive\maximo-code-optimization.zip -DestinationPath . -Force
   Expand-Archive -Path C:\path\to\downloaded-zip-archive\maximo_java_conversion.zip -DestinationPath . -Force
   ```
   == MacOS / Linux
   ```
   unzip /path/to/downloaded-zip-archive/maximo-code-optimization.zip
   unzip /path/to/downloaded-zip-archive/maximo_java_conversion.zip
   ```
   :::

#### Verify Installation

1. Check that the skill files are present:

   ::: tabs key:MacOS/LinuxWindows
   == Windows
   ```
   Get-ChildItem -Recurse -Force .bob/skills
   ```
   == MacOS / Linux
   ```
   ls -lRa .bob/skills/
   ```
   :::

### Understand the Optimization Skill
---

1. Open IBM Bob and make sure you've selected the **Ask** mode.

1. Next, write a prompt to get the Maximo Code Optimization skill explained. A sample prompt would be:

   ```
   Give me a concise overview of the Maximo Code Optimization skill. Explain the workflow and what exactly will be optimized
   ```

   The output should be similar to:

   ::: info What It Does

   The **Maximo Code Optimization** skill is an expert tool designed to fetch, analyze, secure, and optimize IBM Maximo automation scripts (Jython/Python and JavaScript/Nashorn) according to enterprise best practices and Maximo framework standards.

   ---

   **1. The 5-Phase Optimization Workflow**

   The skill executes a structured, 5-phase end-to-end workflow:

   1. **Phase 1: Environment Setup**
      - Creates a clean workspace structure (`maximo-scripts/` with `original/`, `optimized/`, `reports/`, and `tools/`).
      - Collects Maximo server credentials securely in `maximo-scripts/.env` and sets up an isolated Python virtual environment.
   2. **Phase 2: Script Fetching**
      - Automatically queries the Maximo REST API (`/maximo/api/os/MXAPIAUTOSCRIPT`) to fetch active/all automation scripts and stores them in `maximo-scripts/original/` preserving exact names and extensions (`.py` or `.js`).
   3. **Phase 3: Script Analysis & Issue Tallying**
      - Evaluates each script against a deterministic catalog of deterministic rules with strict severity levels (Critical, High, Medium, Low).
      - Produces an authoritative **Pre-Optimization Issue Tally** checkpoint reconciling all findings across scripts before making code changes.
   4. **Phase 4: Optimization**
      - Writes rewritten scripts into `maximo-scripts/optimized/` using the exact same filenames.
      - Applies mandatory pattern fixes (parameterized queries, proper resource cleanup in `finally` blocks, `MXLoggerFactory` loggers, null guards, etc.).
      - Generates any necessary deployment helper scripts (e.g. creating/migrating Attribute launch points).
   5. **Phase 5: Reporting & Reconciliation**
      - Produces individual markdown audit reports (`{SCRIPTNAME}_report.md`) with diffs, findings, and deployment instructions.
      - Compiles a reconciled master `SUMMARY_REPORT.md` ledger.

   ---

   **2. What Exactly Gets Optimized?**

   The skill scans and remediates issues across 7 core areas:

   | Category | Specific Issues Detected & Remediated | Rule Examples |
   | :--- | :--- | :--- |
   | **Security** | • **SQL Injection**: String-concatenated `.setWhere()` queries replaced with parameterized `SqlFormat`.<br>• **Hardcoded Secrets**: Plaintext credentials/URLs extracted to `MXServer.getProperty()` calls.<br>• **Dynamic Code Execution**: Unsafe `eval()` replaced with secure parsing. | `SEC-01`, `SEC-02`, `SEC-03` |
   | **Resource Management & Memory** | • **MboSet Leaks**: Unclosed `MXServer.getMXServer().getMboSet()` sets wrapped in `try/finally` blocks with explicit `.cleanup()` calls to prevent out-of-memory crashes. | `RES-01`, `RES-02` |
   | **Performance** | • **Redundant Queries**: Multiple `.count()` / `.size()` calls cached locally.<br>• **Object Init Launch Points**: Inefficient Object Init scripts migrated to Attribute Init launch points. | `PERF-01`, `PERF-02` |
   | **Null Safety & Robustness** | • **Null Pointers**: Unguarded method access on potentially empty `.getMbo(0)` results or object-returning getters.<br>• **Synonym Domain Translation**: Replaces locale-dependent `getString()` checks with `MXServer...getTranslator().toInternalString()`. | `NULL-01`, `NULL-02`, `NULL-04` |
   | **API & Engine Compatibility** | • **Rhino/Nashorn/GraalJS**: Deprecated `importPackage` replaced with `Java.type()`.<br>• **Deprecated Invocations**: Legacy `HashMap` argument passing updated to function-based `service.invokeScript(name, fnName, args)`. | `API-01`, `API-02` |
   | **Error Handling & Logging** | • **Logging**: Replaces bare `print` or `service.log()` with standard `MXLoggerFactory.getLogger("maximo.script.<SCRIPTNAME>")`.<br>• **Network Resilience**: External HTTP calls wrapped in structured `try/catch` handlers.<br>• **Legacy Flags**: Deprecated `errorgroup`/`errorkey` assignments migrated to `service.error()`. | `SYN-01`, `LOG-01`, `ERR-01`, `ERR-02` |
   | **Architecture & Bindings** | • **Variable Bindings**: Corrects multi-row aggregation attempts on single-row `IN` bindings by replacing them with proper `MboSet` traversal.<br>• **Publish Channels**: Recommends Event Filters over outbound User Exits where appropriate. | `BIND-01`, `ARCH-01` |

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

1. Repeat this exercise for the Maximo Java Conversion skill.

Asking IBM Bob to explain a skill before you use it is a great way to quickly understand its capabilities and limitations, so you can craft better prompts and get more accurate, reliable results from the start.

### Run the Optimization Skill
---

In this section you run the Maximo Code Optimization skill triggered by a prompt you enter. The system then:

* Asks for your Maximo base URL and API key, and sets up the project structure.
* Connects to your Maximo environment and fetches the target `LEGACY_` automation scripts via `MXAPIAUTOSCRIPT`.
* Analyzes each script for security, performance, resource, and code quality issues.
* Generates an optimized version of each script.
* Creates an individual report per script and an overall `SUMMARY_REPORT.md`.

After the workflow completes, review the generated reports as well as the optimzed scripts.

1. In IBM Bob, click the mode selector and switch to **Agent** mode.

1. Next, start a new task in Bob and enter the following prompt:

    ```
    Optimize my automation scripts
    ```

    This prompt starts the full optimization workflow. Bob reads the workflow configuration and amongst others runs the fetch tool, which automatically retrieves the `LEGACY_` scripts used for the purpose of this lab.


1. When Bob asks for your environment details, enter:

    * **Maximo base URL**: Base URL of the asset management system.
    * **API key**: API key or authentication token.

    Bob stores these values in `maximo-scripts/.env` as `MAXIMO_URL` and `MAXIMO_API_KEY`, and uses them to connect to the REST API.

   > ℹ️ Retrieve the information (Maximo URL, userid / password and API key) from the Box note that was provided to you at the start of this lab.

1. Bob shows a task list with the optimization steps. Use this list to track progress during analysis, issue detection, and code generation.

    Bob processes each script in order. For each script, it:

    * Checks code quality for performance, security, maintainability, and coding standards.
    * Identifies issues by severity (Critical, High, Medium, Low).
    * Generates optimized code preserving the orginal script's business logic.
    * Creates a report with before-and-after examples, testing guidance, and deployment notes.

1. After all scripts are processed, Bob shows a summary. The generated lab output contains eight optimized files in `maximo-scripts/optimized/` and eight detailed reports plus `SUMMARY_REPORT.md` in `maximo-scripts/reports/`. The skill output typically looks like:

    * Original scripts to `maximo-scripts/original/`.
    * Optimized scripts with matching filenames to `maximo-scripts/optimized/`.
    * Per-script reports and `SUMMARY_REPORT.md` to `maximo-scripts/reports/`.

### Review the optimization report
---

After the workflow completes, Bob surfaces findings in the chat and writes the full output to disk. Review both before applying any changes — the chat gives you the immediate picture; the files on disk give you the detail you need to deploy safely.

1. Check the Bob chat output first. Your results should generally match what's below. A handful of the analysis rules involve borderline judgment calls rather than a fixed checklist match, so the exact High/Medium counts might occasionally differ from run to run. Use the figures below as your baseline, and use the ranges only to judge whether a difference is within that normal variation or worth a re-run:

   * **Critical: 5,** 
   * **High: 12–15,** 
   * **Medium: 2–3,** 
   * **Low: 0.**
   * All 8 script names appear: `LEGACY_ASSETNUM_VALIDATION`, `LEGACY_CALC`, `LEGACY_COUNTRY_LOOKUP`, `LEGACY_PO_NOLINES_CHECK`, `LEGACY_PO_TOTALS`, `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE`, `LEGACY_SET_REPLCOST`, `LEGACY_SPAREPART_QTY_INIT`


1. Open **`maximo-scripts/reports/SUMMARY_REPORT.md`** for the full picture. This file is the starting point for deployment planning. The summary report looks as folows:

    * The **Per-Script Summary** table lists every script with its Critical, High, and Medium counts and its top issue. Use this to quickly identify which scripts carry the most risk.

    * The **Critical Issues — Deploy First** section lists Critical findings. Typically you should see something like: 
        * `LEGACY_COUNTRY_LOOKUP` — 3 Critical: `eval()` code injection on an external HTTP response, hardcoded HTTP credentials with a plaintext URL, and an unclosed `MXServer`-obtained `MboSet` that leaks a database handle on every lookup.
        * `LEGACY_PO_NOLINES_CHECK` — 1 Critical: Python 2 `print` statements (a hard compile failure on modern Jython — the script silently fails to load at all).
        * `LEGACY_SET_REPLCOST` — 1 Critical: an unclosed `MXServer`-obtained `MboSet` that leaks a database handle under load.

    * The **Deployment Priority** section is categorized into Immediate, Next release, Planned and Enhancement. Which script falls into which category is computed from *this run's* actual findings, so:

      * **Immediate** — every script with ≥1 Critical finding this run (typically `LEGACY_COUNTRY_LOOKUP`, `LEGACY_PO_NOLINES_CHECK`, `LEGACY_SET_REPLCOST`).
      * **Next release** — every remaining script (not already in Immediate) with ≥1 High finding this run (typically `LEGACY_ASSETNUM_VALIDATION`, `LEGACY_CALC`, `LEGACY_PO_TOTALS`, `LEGACY_SPAREPART_QTY_INIT`).
      * **Planned** — remaining scripts with only Medium findings, or scripts whose fix requires a configuration change beyond a drop-in script update (typically `LEGACY_PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE`, which needs an Event Filter launch-point migration).
      * **Enhancement** — anything left with only Low findings. Often empty for this script set.

    A script appears in exactly one category — the earliest one it qualifies for. The quickest check: open the Critical Issues block from the previous step and confirm every script named there also appears in Immediate here. If a script with a Critical finding this run shows up in a lower tier instead, priority is being pulled from somewhere other than this run's actual findings — flag it and ask Bob to recompute the table from the individual reports.

1. Review each script-specific report in `maximo-scripts/reports/`. Open the report for the script you are planning to deploy. Each report follows the same structure — work through it in order. Carefully check the **Issues Found** table in the report and check if the code in the script triggered the right rules.

### Deploy the optimized scripts to Maximo
---

With the reports reviewed and the optimized scripts validated, it's time to deploy them to your Maximo environment and test them using the Automation Scripts Test dialog before they go live.

1. In Bob, click the mode selector and switch to **Plan** mode.

1. Next, start a new task in Bob and enter the following prompt into the chat:

    ```
    Create a deployment plan for the optimized scripts in maximo-scripts/. Ask for my
    initials if I haven't provided them — replace LEGACY_ with <INITIALS>_ everywhere:
    script names, logger strings, and log messages.

    Rules:
    - All autoscript records and launch points deploy with active: false.
    - Include all launch points and autoscriptvars from each script's report.
    - Order deployment by the priority tiers in SUMMARY_REPORT.md (Immediate first,
      then Next release, then Planned).
    ```

1. Provide your initials if requested by Bob and approve the plan creation. It may take a little while for the deployment plan to be fully generated. Provide input whenever needed.

1. Review and approve the generated deployment plan.

1. Switch to **Agent** mode and instruct Bob to implement the deployment plan.

1. Stay engaged during implementation. Bob will work through the plan step by step — writing the deploy script, running a dry run, deploying each tier, and verifying the results. At each step, carefully read Bob's output and actively approve, adjust, or reject what Bob proposes. 

1. After the deployment finished and the script verified the deployment, the output in the chat looks like: 

    ::: info Deployment summary & Implementation Results
    All 8 optimized automation scripts and their corresponding launch points and variable bindings have been deployed to your Maximo environment under the `EC_` prefix with `active: false`.

    ---

    ### Deployed Scripts & Launch Points Matrix

    | Script Name | Language | Launch Point Name | Launch Point Type | Event / Binding | Active |
    |---|---|---|---|---|---|
    | `EC_COUNTRY_LOOKUP` | `nashorn` | `EC_COUNTRY_LOOKUP` | `ATTRIBUTE` (ADDRESS.ADDRESS5) | `VALIDATE` | `false` |
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
    3. **Safety & Inactive State:** All 8 scripts and 6 launch points are in inactive  state in Maximo. 
    :::

### Testing your Scripts
---

Once the optimized scripts and their launch points have been deployed, we're ready to test them.

For this, in Maximo Application Suite, navigate to **System Configuration → Platform Configuration → Automation Scripts**, open each script record, and use the **Test Script** button / dialog available in the UI. This allows you to simulate execution, supply runtime context or test records, and inspect the script's behavior and log output.

Below are the test instructions and validation scenarios for each optimized script, derived from the optimization reports.

#### PO_NOLINES_CHECK

* **Script Type:** Object Launch Point — `PO` — `SAVE` (On Add, On Update) (Jython)
* **Optimization Highlights:** Removed Python 2 `print` statements in favor of `ScriptLogger` (`MXLoggerFactory`), eliminated duplicate `count()` SQL queries, replaced flag-based error setting with deterministic `service.error("po", "nolines")`.

**Testing Steps in Maximo UI:**

1. Activate Script & Launch Point: In **System Configuration → Platform Configuration → Automation Scripts**, open `PO_NOLINES_CHECK` and ensure both the script and its launch point (`PO_NOLINES_CHECK`) have the **Active** checkbox checked.

1. Open the `PO_NOLINES_CHECK` script record and click the **Test Script** button.

##### Scenario 1: PO with No Lines (Expected to be blocked)
1. Under **Launch Point**, select `PO_NOLINES_CHECK`.

1. Select **Existing Object**.

1. In **Object Path**, enter: `PO[ponum='1125']`. 
   > ℹ️ Purchase Order 1125 is a WAPPR draft PO with no PO lines.

1. In the **Set attribute values** table, click **Add Row** (➕) and set `DESCRIPTION` to `Test Save Trigger` --- modifying an attribute triggers the `Save - On Update` event.

1. Click the **Test** button in the bottom bar.

   **Expected Result:**
      - The script executes, detects `poLineCount == 0`, and calls `service.error("po", "nolines")`.
      - In the **Process Log** (right pane), the save transaction is blocked and displays the controlled Maximo exception:
         ```text
            po#nolines
            com.ibm.tivoli.maximo.script.ScriptService.error(ScriptService.java:481)
         ```

##### Scenario 2: PO with PO Lines (Expected to succeed)

1. In the **Test Auto Script** dialog, change **Object Path** to: `PO[ponum='1005']` (Purchase Order 1005 is a draft `WAPPR` PO with 2 PO lines).

1. In **Set attribute values**, set `DESCRIPTION` to `Updated Supplies`.

1. Click the **Test** button.

   **Expected Result:**
      - The script detects `poLineCount == 2`, so `service.error("po", "nolines")` is **not** called.

      - In the **Process Log**, the script logs at debug level: `Checking PO 1005 - line count: 2` (in case you use `service.log` statements in the script)

      - Execution finishes cleanly and renders the updated `POMbo` XML structure in the **Data** pane without raising `po#nolines`.

1. Set both the script and launch point to **Inactive** after testing.

#### SET_REPLCOST

* **Script Type:** Attribute Launch Point — `ASSET.PURCHASEPRICE` — `ACTION` (Jython)
* **Optimization Highlights:** Guarded `purchaseprice` implicit variable against `None`, replaced obsolete `2L` syntax with `MboConstants.NOACCESSCHECK`, wrapped `ASSETTRANS` MboSet access in `try/finally` with `cleanup()`, cached count calls, and integrated `MXLoggerFactory`.

**Testing Steps in Maximo UI:**

1. Activate Script & Launch Point: In **System Configuration → Platform Configuration → Automation Scripts**, open `SET_REPLCOST` and ensure both the script and its launch point (`SET_REPLCOST`) have the **Active** checkbox checked.

1. Open the `SET_REPLCOST` script record and click the **Test Script** button.

##### Scenario 1: Valid Purchase Price Calculation (50% rule)
1. Under **Launch Point**, select `SET_REPLCOST`.

1. Select **New Object** (or **Existing Object** e.g. `ASSET[assetnum='11400']`).

1. In **Object Path**, enter: `ASSET`.

1. In the **Set attribute values** table, click **Add Row** (➕) and configure:
   - **Attribute Name:** `PURCHASEPRICE`
   - **Value:** `1000.00`

1. Click the **Test** button in the bottom bar.

   **Expected Result:**
      - The script executes the calculation `purchaseprice / 2` without syntax or long-integer errors.
      - In the **Data** pane (left pane), locate the `<REPLACECOST>` tag in the XML output and confirm it is populated with `500.0`:
         ```xml
         <REPLACECOST>500.0</REPLACECOST>
         ```
      - In the **Process Log** (right pane), execution completes without exceptions, and `ASSETTRANS` MboSet handles are cleaned up in the `finally` block.

##### Scenario 2: Null / Unset Purchase Price (Null-safety guard)
1. In the same **Test Auto Script** dialog, remove or leave `PURCHASEPRICE` blank in the **Set attribute values** table (or set `PURCHASEPRICE` to blank).

1. Click the **Test** button.

   **Expected Result:**
   - The null guard `if purchaseprice is not None:` intercepts execution.
   - The script completes safely without throwing a `TypeError` on arithmetic (`None / 2`).
   - In the **Data** pane, `<REPLACECOST>` remains unset / unchanged.

1. Set both the script and launch point to **Inactive** after testing.

#### PO_TOTALS & CALC Library

* **Script Type:**
  * `PO_TOTALS`: Object Launch Point - `PO` - `SAVE` (Before Save) (Jython)
  * `CALC`: Library Script (Callable via `service.invokeScript`) (Jython)
* **Optimization Highlights:** Replaced legacy `HashMap` invocation with direct function invocation `service.invokeScript("CALC", "calc", ["multiply", 2, 3])`, added null-check guards on the return value, and transformed `CALC` into a robust dispatch table with parameter validation and explicit error handling for division by zero and invalid operations.

**Testing Steps in Maximo UI:**

1. Activate Scripts & Launch Point: In **System Configuration → Platform Configuration → Automation Scripts**, open both your `CALC` and `PO_TOTALS` script records and set the **Active** checkbox to `true` for each, along with the `PO_TOTALS` launch point.

##### Scenario 1: Default State — `Allow Invoking Script Functions` Unchecked:

> ⚠️ **Expected on first deployment.** When a script is freshly deployed via the API, the **Allow Invoking Script Functions** checkbox is unchecked by default. Run this scenario first to confirm the failure mode before enabling the flag.

1. Open the `PO_TOTALS` script record and click the **Test Script** button.

1. Under **Launch Point**, select `PO_TOTALS`.

1. Select **Existing Object** and set **Object Path** to: `PO[ponum='1005']`.

1.  In the **Set attribute values** table, click **Add Row** (+) and set `DESCRIPTION` to `Test PO Totals allow-invoke-off` to trigger the save event.

1. Click the **Test** button in the bottom bar.

   **Expected Result:**
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

##### Scenario 2: Standard Calculation — Multiply (`PO_TOTALS` calling `CALC.calc("multiply", 2, 3)`):
1. **Enable `Allow Invoking Script Functions` — Delete and Recreate `CALC`:**

   > ℹ️ The **Allow Invoking Script Functions** flag cannot be toggled on an existing script record. You must delete the script and recreate it with the flag enabled.

1. In **Automation Scripts**, search for and open your `CALC` script (e.g. `AB_CALC` for initials `AB`).

1. From the record's action menu, select **Delete Script** and confirm the deletion.

1.  Click **New Script** to create a new Automation Script record.

1. Set the following fields:
     - **Script:** enter your initials followed by `_CALC` (e.g. `AB_CALC`)
     - **Script Language:** `Jython`
     - **Active:** checked
     - **Allow Invoking Script Functions:** ✅ checked — this is the critical step

1. Paste the full source code from your `<initials>_CALC` optimized script into the **Source Code** field.

1. Click **Save**.

1. Confirm the script record now shows **Allow Invoking Script Functions** as checked before proceeding.

1. Open the `PO_TOTALS` script record and click the **Test Script** button.

1. Under **Launch Point**, select `PO_TOTALS`.

1. Select **Existing Object** and set **Object Path** to: `PO[ponum='1005']`.

1. In the **Set attribute values** table, click **Add Row** (+) and set `DESCRIPTION` to `Test PO Totals multiply` to trigger the save event.

1. Click the **Test** button in the bottom bar.

   **Expected Result:**
      - `PO_TOTALS` invokes `CALC.calc("multiply", 2, 3)` and receives `6`.
      - In the **Data** pane (left pane), locate `<CUSTOMTOTAL>` in the XML output and confirm it is populated with `6.0`:
         ```xml
         <CUSTOMTOTAL>6.0</CUSTOMTOTAL>
         ```
      - In the **Process Log** (right pane), execution completes cleanly without exceptions.

##### Scenario 3: Division (`CALC.calc("divide", 10, 2)`):
1. In `PO_TOTALS`'s source, temporarily change the `invokeScript` call to pass `"divide"` with operands `10` and `2`.

1. Re-run the test with the same PO object `PO[ponum='1005']`. Set `DESCRIPTION` to `Test PO Totals divide`.

   **Expected Result:**
      - `CALC` returns `5.0`.
      - `<CUSTOMTOTAL>5.0</CUSTOMTOTAL>` appears in the **Data** pane.
      - No division-by-zero exception is raised.

1. Revert the source change after confirming the result.

##### Scenario 4: Addition (`CALC.calc("add", 4, 7)`):
1. Similarly, temporarily change the `invokeScript` call to `"add"` with operands `4` and `7`.

1. Re-run the test. Set `DESCRIPTION` to `Test PO Totals add` and use PO Object `PO[ponum='1005']`.

   **Expected Result:**
      - `CALC` returns `11`.
      - `<CUSTOMTOTAL>11.0</CUSTOMTOTAL>` appears in the **Data** pane.

1. Revert the source change after confirming the result.

1. Set both scripts and the `PO_TOTALS` launch point to **Inactive** after testing.

#### ASSETNUM_VALIDATION

* **Script Type:** Object Launch Point — `ASSET` — `SAVE` (On Add) (Jython)
* **Optimization Highlights:** Replaced locale-dependent `mbo.getString("ASSETTYPE")` comparison against MAXVALUE literals with an explicit translator call — `MXServer.getMXServer().getMaximoDD().getTranslator().toInternalString("ASSETTYPE", mbo.getString("ASSETTYPE"))` — which converts the locale-dependent display value to the internal MAXVALUE before the `PREFIX_MAP` lookup. This prevents silent lookup failures in non-English environments without requiring any Variable binding configuration on the script record.

**Testing Steps in Maximo UI:**

1. Activate Script & Launch Point: In **System Configuration → Platform Configuration → Automation Scripts**, open `ASSETNUM_VALIDATION` and ensure both the script and its launch point (`ASSETNUM_VALIDATION`) have the **Active** checkbox checked.

1. Open the `ASSETNUM_VALIDATION` script record and click the **Test Script** button.

##### Scenario 1: Valid Prefix Match (Expected to succeed)
1. Under **Launch Point**, select `ASSETNUM_VALIDATION`.

1. Select **New Object**.

1. In the **Set attribute values** table, click **Add Row** (➕) and configure:
   - **Attribute Name:** `ASSETNUM` → **Value:** `FL-001`
   - **Attribute Name:** `ASSETTYPE` → **Value:** `FLEET`

1. Click the **Test** button in the bottom bar.

   **Expected Result:**
      - The translator converts the display value for `FLEET` to its internal MAXVALUE; `PREFIX_MAP.get("FLEET")` returns `FL`.
      - `"FL-001".startswith("FL")` is `True` — `service.error` is **not** called.
      - In the **Process Log** (right pane), execution completes cleanly with no exception raised.

##### Scenario 2: Invalid Prefix Mismatch (Expected to be blocked)
1. In the **Set attribute values** table, update the rows:
   - `ASSETNUM` → `PUMP-100`
   - `ASSETTYPE` → `FACILITIES`
1. Click the **Test** button.

   **Expected Result:**
      - The translator converts the display value for `FACILITIES` to its MAXVALUE; `PREFIX_MAP.get("FACILITIES")` returns `FT`; `"PUMP-100".startswith("FT")` is `False`.
      - The script calls `service.error('asset', 'invalidassetprefix', ['FT'])`.
      - In the **Process Log**, the save transaction is blocked with a controlled Maximo exception:
         ```text
         asset#invalidassetprefix
         com.ibm.tivoli.maximo.script.ScriptService.error(ScriptService.java:481)
         ```

##### Scenario 3: Unmapped Asset Type (Expected to succeed)
1. Update the attribute values:
     - `ASSETNUM` → `PROD-999`
     - `ASSETTYPE` → `PRODUCTION`

1. Click the **Test** button.
   
   **Expected Result:**
      - The translator returns the MAXVALUE for `PRODUCTION`; `PREFIX_MAP.get("PRODUCTION")` returns `None` — the `if required_prefix is not None` guard is not entered.
      - Execution completes without any error or validation block.
      - In the **Process Log**, no exception is raised and `service.error` is not called.

##### Scenario 4: Locale Independence (NULL-04 fix verification)
1. If your Maximo environment supports user locale switching, set your user profile to a non-English locale (e.g. French or German) and repeat Scenario 2 from the **Automation Scripts** UI.

   **Expected Result:**
      - The display label shown for `FACILITIES` may differ in the non-English locale, but `toInternalString()` still returns the underlying MAXVALUE `FACILITIES` regardless of the user's locale.
      - The validation blocks the save identically — `PREFIX_MAP` lookup succeeds and `service.error` is raised.
      - This confirms that the translator call eliminates the silent failure mode documented in NULL-04: `mbo.getString()` alone returns the display value, which changes per locale; `toInternalString()` normalises it to the MAXVALUE before comparison.

1. Set both the script and launch point to **Inactive** after testing.

#### SPAREPART_QTY_INIT

* **Script Type:** Object Launch Point — `ASSET` — `INIT` (Jython)
* **Optimization Highlights:** Replaced the `sum(qtys)` IN-variable approach (which only ever returned the first spare part's quantity) with a direct `mbo.getMboSet("SPAREPART")` traversal to correctly sum all rows. Added an `app`-based context guard (`hasattr(app, 'isFromListTab') and app.isFromListTab()`) to skip the traversal on list-tab loads, where `app` is a unicode string rather than an app object. REST, MIF, and escalation contexts are not filtered by this guard — the full structural fix is to migrate to an Attribute Init Value launch point on `SPAREPARTQTY`.

**Testing Steps in Maximo UI:**

1. Activate Script & Launch Point: In **System Configuration → Platform Configuration → Automation Scripts**, open `SPAREPART_QTY_INIT` and ensure both the script and its launch point (`SPAREPART_QTY_INIT`) have the **Active** checkbox checked.

1. Open the `SPAREPART_QTY_INIT` script record and click the **Test Script** button.

##### Scenario 1: Interactive Detail Tab Load — Calculation Executes
1. Under **Launch Point**, select `SPAREPART_QTY_INIT`.

1. Select **Existing Object** and set **Object Path** to: `ASSET[assetnum='11400']` — this asset has 3 spare parts (ELEMENT KIT, PACKING LUBE DIVIDER VALVE, Bracket Steel Support), each with quantity `1.00`, giving a total of `3`.

1. Leave the **Set attribute values** table empty.

1. Click the **Test** button in the bottom bar.

   **Expected Result:**
      - `hasattr(app, 'isFromListTab')` returns `True` in the Test Script dialog context and `app.isFromListTab()` returns `False`, so `is_list_tab` is `False` and the guard is passed.
      - The script traverses the `SPAREPART` MboSet via `mbo.getMboSet("SPAREPART")`, reads `QUANTITY` from all 3 rows, and sets `sptqt = 3`.
      - In the **Process Log** (right pane), the debug log reads: `sparepartqty initialised to 3`.
      - `SPAREPARTQTY` may not appear in the **Data** pane XML — non-persistent attributes are omitted from the serialised output when their value matches the default. The Process Log entry is the authoritative confirmation.
      - `sptqt_readonly` is `True`, causing `SPAREPARTQTY` to render as read-only in the UI.

##### Scenario 2: Empty / Null Spare Parts — Default to Zero**
1. Change **Object Path** to: `ASSET[assetnum='11460']` — use the same asset but note that for a true zero-spare-parts test, any asset with an empty Spare Parts tab would give `sptqt = 0`.

1. Leave the **Set attribute values** table empty.

1. Click the **Test** button. 
   
   **Expected Result:**
      - `mbo.getMboSet("SPAREPART").moveFirst()` returns `None` immediately — the while loop does not execute.
      - `sptqt = 0` (total remains at its initial value).
      - `SPAREPARTQTY` does **not** appear in the **Data** pane XML.
      - The **Process Log** shows `sparepartqty initialised to 0`.
      - `sptqt_readonly` is still `True`.

##### Scenario 3: List Tab / Background Context Guard — Calculation is Skipped

> ℹ️ The Maximo Test Script dialog always runs in a non-list-tab context (`app.isFromListTab()` returns `False`). To verify the PERF-02 guard, temporarily patch the script source in the dialog to hardcode `is_list_tab = True`, then run the test.

1. Temporarily modify the script source in the dialog:
     ```python
     is_list_tab = True  # Simulating list tab / background context
     ```
1. Re-run the test with `ASSET[assetnum='11400']`.

   **Expected Result:**
      - `is_list_tab` is `True`, so the `if not is_list_tab:` block is not entered.
      - `sptqt` is never assigned — `<SPAREPARTQTY>` remains absent from the **Data** pane.
      - In the **Process Log**, the `sparepartqty initialised to` debug message does **not** appear.
      - `sptqt_readonly` is still set to `True` (it sits outside the guard intentionally).
      - Revert the source change after confirming the result.

1. Set both the script and launch point to **Inactive** after testing.

#### COUNTRY_LOOKUP
:::danger Attention
This script on purpose will still throw errors. 
:::

* **Script Type:** Attribute Launch Point — `ADDRESS.ADDRESS5` — `VALIDATE` (JavaScript / Nashorn)
* **Optimization Highlights:** Replaced `eval()` with safe `JSON.parse()`, moved external endpoint URL and credentials to system property `ext.country.api.url`, added error handling and `try/finally` cleanup on `MboSet` handles.

**Testing Steps in Maximo UI:**

1. In **System Configuration → Platform Configuration → System Properties**, verify that `ext.country.api.url` is defined and points to a valid HTTPS endpoint returning country JSON data.

1. **Activate Script & Launch Point:** In **Automation Scripts**, open `COUNTRY_LOOKUP` and ensure both the script and its launch point (`COUNTRY_LOOKUP`) have the **Active** checkbox checked.

1. Open the `COUNTRY_LOOKUP` script record and click the **Test Script** button.

##### Scenario 1: Valid Country Code (Expected to succeed)
   - Under **Launch Point**, select `COUNTRY_LOOKUP`.
   - Select **Existing Object** and set **Object Path** to: `ADDRESS[addresscode='BEDFORDMAIN' and orgid='EAGLENA']`.
   - In the **Set attribute values** table, click **Add Row** (+) and set `ADDRESS5` to `NL`.
   - Click the **Test** button in the bottom bar.
      **Expected Result:**
         - The `VALIDATE` launch point fires, `service.httpget(apiUrl)` fetches the country list, `JSON.parse()` parses the response, and validation executes without error.
         - In the **Process Log** (right pane), execution completes without exceptions.
         - `<ADDRESS5 changed="1">NL</ADDRESS5>` appears in the **Data** pane.

##### Scenario 2: Missing System Property
   - In System Properties, temporarily clear `ext.country.api.url` and run **Live Refresh**.
   - Re-run the test with the same object and `ADDRESS5 = NL`.
   - **Expected Result:** The script catches `!apiUrl` and raises the controlled error `countrylookup/missingproperty` in the **Process Log**.
   - Restore `ext.country.api.url` and run Live Refresh before proceeding.
6. Set both the script and launch point to **Inactive** after testing.
