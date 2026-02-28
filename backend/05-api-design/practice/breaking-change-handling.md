# Practice: Breaking Change Handling

## Tasks

### Task 1
Document what constitutes a breaking change: removing field, changing type, renaming, removing endpoint, changing required to optional (or vice versa). Create a checklist for API changes. Add a "breaking change" label or flag in your change process. Implement additive change: add new optional field to response; verify old clients still work.

### Task 2
Implement deprecation: add `Deprecation: true` and `Sunset: <date>` headers to deprecated endpoint. Log warning when deprecated endpoint is used. Add `Link` header pointing to replacement. Create deprecation policy doc: 6-month notice for breaking changes. Add deprecation to API docs with migration guide.

### Task 3
Build version comparison: given two API versions, detect breaking changes. Compare OpenAPI specs: removed paths, changed schemas, etc. Output a report. Use in CI to block accidental breaking changes or to generate release notes. Support configurable rules (e.g., adding required field is breaking).

### Task 4
Implement compatibility layer: v2 API that accepts both old and new request formats. For response, support `Accept` or query param to request v1 or v2 format. Translate between formats in adapter layer. Run both versions in parallel during migration period. Add metrics for version usage.

### Task 5
Create a full migration workflow: (1) Announce deprecation with sunset date, (2) Release new version with migration guide, (3) Monitor adoption (version usage metrics), (4) Send reminders as sunset approaches, (5) Remove old version after sunset. Add feature flag to extend sunset for specific high-value clients. Implement automated compatibility tests that run against both versions. Document the process in CONTRIBUTING or RELEASE docs. Write a runbook for handling "client can't migrate in time" scenarios.
