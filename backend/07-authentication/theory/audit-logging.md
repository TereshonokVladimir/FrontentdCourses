# Audit Logging

## Concept

Audit logging records security-relevant events for compliance, forensics, and monitoring. Events include logins, logouts, failed auth, password changes, permission changes, and data access. Logs must be tamper-resistant, include timestamps and actor identity, and be retained per policy.

## Why It Matters

Compliance (SOC2, HIPAA, PCI-DSS) requires audit trails. Incidents need forensics—who did what, when. Without logs, you cannot detect abuse or investigate breaches. Production systems must log auth events and protect logs from modification.

## Key Concepts

- What: event type, timestamp, actor (user/IP), resource, outcome, metadata
- Immutability: append-only; no edit/delete; checksums or write-once storage
- Retention: policy-driven; archive or delete after retention period
- Access: restrict who can read logs; separate from application DB

## Code Example

```typescript
async function auditLog(event: {
  action: string
  actorId?: string
  actorIp?: string
  resource?: string
  outcome: 'success' | 'failure'
  metadata?: Record<string, unknown>
}) {
  await db.auditLogs.insert({
    ...event,
    timestamp: new Date(),
    id: uuidv4()
  })
}

// Usage
await auditLog({
  action: 'login',
  actorId: user.id,
  actorIp: req.ip,
  outcome: 'success'
})
```

## Under the Hood

Write logs to a dedicated store (DB table, file, or logging service). Use structured format (JSON) for querying. Consider async writes to avoid blocking the request. For high assurance, use write-once storage or append-only logs with integrity checks. Ship to SIEM or log aggregator for analysis.

## Common Mistakes

- Not logging failed auth attempts (miss brute force, credential stuffing)
- Logging sensitive data (passwords, tokens, PII)
- Logs in same DB as app data (attacker can delete)
- No retention policy (compliance violation or unbounded growth)

## Best Practices

- Log all auth events: login, logout, fail, password change, MFA enrollment
- Never log passwords, tokens, or full PII
- Use structured logging; include correlation IDs for tracing
- Retain per policy; protect logs from modification; restrict access

## Summary

Audit logs record security events for compliance and forensics. Log auth events; avoid sensitive data. Use append-only storage; retain per policy; restrict access.
