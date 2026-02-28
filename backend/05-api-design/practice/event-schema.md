# Practice: Event Schema

## Tasks

### Task 1
Define event schema for `order.created`: `{ "id", "type", "timestamp", "data": { "orderId", "userId", "total", "items" } }`. Create TypeScript/JavaScript types. Add schema validation (Zod/JSON Schema) so invalid events are rejected at publish time. Document schema in README.

### Task 2
Add event versioning: `order.created.v1` and `order.created.v2`. v2 adds `metadata.source`. Support both versions during migration. Validate version in schema. Include version in type field or separate `schemaVersion` field. Document version history and migration path.

### Task 3
Create a schema registry: store event schemas (JSON Schema) keyed by type+version. Provide `GET /schemas/:type/:version` to fetch schema. Validate incoming events against registry. Support schema evolution: new optional fields allowed; breaking changes require new version. Add `$schema` reference in events.

### Task 4
Implement event envelope: all events wrapped in `{ "id", "type", "timestamp", "source", "specversion", "data" }` (CloudEvents format). Support both custom and CloudEvents format. Add idempotency: same event id = same content (deduplication). Include `correlationId` for tracing across services.

### Task 5
Build event catalog: document all event types, schemas, producers, consumers. Generate from schema registry. Add compatibility checks: when schema changes, verify backward compatibility (new optional fields OK, removing/renaming breaks). Implement schema validation in CI. Add dead letter handling: invalid events go to DLQ with validation error. Write tests for schema validation, versioning, and CloudEvents compatibility.
