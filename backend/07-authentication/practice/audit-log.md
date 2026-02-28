# Practice: Audit Log

## Tasks

### Task 1
Create an `audit_logs` table with columns: `id`, `timestamp`, `action`, `actorId`, `actorIp`, `resourceType`, `resourceId`, `outcome`, `metadata` (JSONB). Create an `auditLog(event)` function that inserts a record. Use it to log `login`, `login_failed`, and `logout` events with actor and outcome.

### Task 2
Add audit logging for sensitive operations: `password_change`, `mfa_enabled`, `mfa_disabled`, `role_assigned`, `role_removed`. Include the resource (e.g., userId) and any relevant metadata (e.g., new role). Never log passwords, tokens, or full PII. Use structured metadata for querying.

### Task 3
Implement an async audit logger: write to a queue (e.g., in-memory or Redis) and process in a background worker to avoid blocking the request. Ensure that audit writes are durable (e.g., flush on shutdown). Add correlation IDs to link related events (e.g., same request).

### Task 4
Create `GET /admin/audit` (admin only) that supports filtering by `action`, `actorId`, `resourceType`, `dateFrom`, `dateTo`, and pagination. Return results in reverse chronological order. Restrict access to users with `audit:read` permission. Log access to the audit log itself.

### Task 5
Add log integrity: compute a hash chain or append-only structure so that tampering can be detected. Optionally sign each log entry with a private key. Implement a verification endpoint that checks integrity. Consider write-once storage or shipping logs to a separate system (e.g., SIEM) that the application cannot modify.