::: warning 🚧 Under Construction
This section is actively being built. Content may be incomplete or subject to change.
:::

# Maximo Script Modernization Lab · feed Bob real legacy scripts and modernize them
## Bob MODE: pre-sales-demo-infrastructure.yaml · SKILL: maximo-suite

This lab is the opposite and more common real-world job — take **existing, deprecated
automation scripts** (the 7.5/7.6 idioms a customer actually has in their system)
and have Bob **transform them to current idioms** using the `maximo-suite` skill's
documented old→new rules. It's the demo that lands the "we can modernize your
existing Maximo customizations safely, no rewrite-from-scratch" message.

The legacy scripts live in **`legacy-scripts/`** next to this file. Point Bob at
that folder. Each script carries one or more deprecated patterns on purpose.

> Transformation is **offline** — Bob reads the files and rewrites them with no
> Maximo needed. A live instance is only required for the optional **validate +
> redeploy** step (Test dialog + push the source back over REST). No environment?
> Do the transforms now; redeploy when access lands (same as the mock-only posture
> in SKILL.md §9).

Cluster: Asset Operations · Industry: cross-industry · Output shape: modernized
automation-script source + a per-script change report

### PREPARATION
- Bob with the `maximo-suite` skill installed, opened on the `LAB` folder so it can read `legacy-scripts/`
- (Optional, for the redeploy/validate step) a reachable Maximo / MAS Manage instance + an API key or credentials
- Nothing to install for the transforms themselves

### The old→new ruleset Bob applies (from the skill)
| Deprecated idiom | Modern idiom | Reference |
|---|---|---|
| `errorkey`/`errorgroup`/`params` flags | `service.error(grp,key,params)` (real-time, stops execution) | scripting-service-mbo-api.md |
| `print` debugging | `service.log(...)` / per-script logger | scripting-test-debug.md |
| Map/HashMap library calls | function-based `service.invokeScript(name,fn,args)` | scripting-service-mbo-api.md |
| Object **Init** attribute init | Attribute **Init Value** launch point | scripting-launchpoints.md |
| User-exit message skip | Publish Channel **Event Filter** | scripting-rest-integration.md |
| Literal MboConstants (`2L`) | named `mbo.NOACCESSCHECK` | scripting-service-mbo-api.md |
| Rhino `importPackage`/`eval` + Mozilla shim | Nashorn `Java.type`/`JSON.parse` | scripting-launchpoints.md |
| repeated `count()`, unclosed MboSet, unguarded log | cached count, `try/finally cleanup()`, `service.isLoggingEnabled()` | scripting-test-debug.md |

---

## Step 0 - Inventory (kickoff prompt)

> Have Bob scan the folder and produce the modernization report before touching
> any single script.

```text
Use the maximo-suite skill. Read every script in the legacy-scripts/ folder.
For each one, identify the deprecated Maximo scripting idioms it uses (errorkey/
errorgroup flags, print debugging, Map-style library calls, Object-Init attribute
initialization, user-exit message skipping, literal MboConstants, Rhino/Mozilla-
compat JavaScript, repeated count()/unclosed MboSet/unguarded logging). Produce a
table: script, launch point, idioms found, risk, and the modern replacement you'll
apply. Don't change anything yet.
```

---

## The exercises

Run these one at a time. Each names the file, the smell to look for, and the prompt.
Expected results are in the **Answer key** at the end — use it to check Bob's work.

### E1 - `ASSETNUM_VALIDATION.py` · deprecated errors + display-value compare
Smell: raises via `errorgroup`/`errorkey`/`params` (fires only after the script
finishes, not real-time) and compares the **display** value of `assettype`.
```text
Modernize legacy-scripts/ASSETNUM_VALIDATION.py: replace the errorgroup/errorkey/
params flags with real-time service.error(...) calls, and compare the asset type
on its INTERNAL value (atype_internal or the translator), not the display value.
Show a before/after diff and note the behavior change (errors now stop execution
immediately).
```

### E2 - `PO_NOLINES_CHECK.py` · print + repeated count() + error flags
Smell: `print` (not real-time), `count()` called twice (2 SQLs), `errorkey`.
```text
Modernize legacy-scripts/PO_NOLINES_CHECK.py: cache count() in a variable, swap
print for service.log, and raise the error with service.error. If this should be a
non-blocking warning instead of a hard stop, show me that variant with
service.setWarning too.
```

### E3 - `CALC.py` + `PO_TOTALS.py` · Map-style library script
Smell: single-purpose library script invoked by building a `HashMap` and reading
the result back out of it.
```text
Modernize the CALC library script and its caller PO_TOTALS.py: convert CALC to the
function-based style (def mult(a,b)) and update PO_TOTALS to call
service.invokeScript("CALC","mult",[2,3]). Remind me to enable "Allow Invoking
Script Functions" when creating CALC, and that the flag can't be changed afterward.
```

### E4 - `SPAREPART_QTY_INIT.py` · Object-Init attribute initialization
Smell: an Object **Initialize** script that sets a calculated attribute, so it runs
for every Asset in every List-tab/bulk/API fetch even when the field isn't shown.
```text
Modernize legacy-scripts/SPAREPART_QTY_INIT.py: move the calculation off the Object
Initialize event onto an Attribute launch point for sparepartqty (Init Value for the
value, Init for the read-only flag) so it only runs when the attribute is referenced.
Explain the performance reason and give me the new launch-point config + script.
```

### E5 - `COUNTRY_LOOKUP.js` · Rhino-era JavaScript
Smell: `importPackage`, `eval()`-based JSON parse, depends on the Mozilla
compatibility shim under Nashorn.
```text
Modernize legacy-scripts/COUNTRY_LOOKUP.js for Nashorn: replace importPackage with
Java.type, parse the response with JSON.parse instead of eval, and drop anything
that needs the Mozilla compatibility script. Keep the lookup behavior
(listMboSet/srcKeys/targetKeys) identical.
```

### E6 - `PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE.py` · user-exit skip
Smell: skips the outbound message at the **user exit**, after serialization cost is
already paid.
```text
Modernize legacy-scripts/PUBLISH.MXASSETINTERFACE.USEREXIT.OUT.BEFORE.py: move the
skip logic to a Publish Channel Event Filter (PUBLISH.MXASSETINTERFACE.EVENTFILTER)
so it runs before serialization. Use service.getMbo() and set evalresult correctly,
and tell me what to do with the old user-exit script.
```

### E7 - `SET_REPLCOST.py` · literal flags + leaked MboSet
Smell: literal `2L` for a MboConstants flag, an `MXServer`-created MboSet that's
never closed, `count()` called twice, an unguarded `service.log`.
```text
Modernize legacy-scripts/SET_REPLCOST.py: replace the literal 2L with
mbo.NOACCESSCHECK, wrap the MXServer-created MboSet in try/finally with cleanup(),
cache count() in a variable, and guard the log with service.isLoggingEnabled().
```

---

## Step N - Validate & redeploy (optional, needs a live instance)

```text
For each modernized script, walk me through validating it in the Automation Scripts
Test dialog: the Object Path and Set Attribute Values to reproduce the original
behavior, and the deactivate-to-isolate steps to A/B the old vs new script. Once a
script passes, show me the REST call (discover the autoscript object structure via
apimeta first) to push the updated source back to the instance.
```
