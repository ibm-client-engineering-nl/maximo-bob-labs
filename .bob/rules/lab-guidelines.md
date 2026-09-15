# Maximo Script Deployment — API Rules

These rules govern every deploy script written for this lab. Follow them exactly.

## Endpoints

| Purpose | Endpoint |
|---------|----------|
| Scripts | `{base}/os/mxapiautoscript` |
| Launch points | `{base}/os/mxapilaunchpoint` |

Always append `?lean=1` to every request.

## Required headers

```
apikey: <MAXIMO_APIKEY>
x-public-uri: <MAXIMO_PUBLIC_URI>
Content-Type: application/json
```

## Script language values

| File extension | `scriptlanguage` value |
|---|---|
| `.py` | `jython` |
| `.js` | `nashorn` |

## Creating a script

`POST {base}/os/mxapiautoscript?lean=1` with `autoscript`, `scriptlanguage`, `active`, `source`.

## Updating an existing script

**Never use PUT.** POST to the script's resource ID with `x-method-override: PATCH`.

`POST {base}/os/mxapiautoscript/{rest_id}?lean=1`  
Header: `x-method-override: PATCH`  
Body: only the fields changing (e.g. `source`, `active`).

Obtain `rest_id` from the last path segment of the `href` returned by:  
`GET {base}/os/mxapiautoscript?lean=1&oslc.where=autoscript="<NAME>"&oslc.select=autoscript,href`

## Launch points are independent records

Launch points are **not** child objects of the script record. Do not embed them in the script POST. Create them separately:

`POST {base}/os/mxapilaunchpoint?lean=1`

Check for existence first:  
`GET {base}/os/mxapilaunchpoint?lean=1&oslc.where=autoscript="<NAME>"&oslc.select=launchpointname`  
Skip creation if the `member` array is non-empty.

Object LP payload: `launchpointname`, `launchpointtype=OBJECT`, `objectname`, `autoscript`, `event`, `add`, `update`, `delete` (booleans), `active=true`.

Attribute LP payload: same but `launchpointtype=ATTRIBUTE` and `attributename` instead of `add`/`update`/`delete`.

## Correct event strings

| Event | String |
|---|---|
| Save | `SAVE` |
| Initialize | `INIT` |
| Action | `ACTION` |
| Retrieve List | `RETRIEVELIST` |

## Running Python scripts

Always run Python scripts using the virtual environment at `maximo-scripts/.venv`:

```bash
maximo-scripts/.venv/bin/python <script>
```

Never use a system or global `python` / `python3` executable for this lab.

## PUBLISH channel scripts — must be INACTIVE

Any script whose name does not exactly match `PUBLISH.<channel>.USEREXIT.OUT.BEFORE` cannot be wired to a publish channel. Deploy such scripts with `active: false` and no launch point. Participants test them via the Automation Scripts Test dialog.

# Made with Bob
