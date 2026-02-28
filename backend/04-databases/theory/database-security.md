# Database Security

## Concept

Database security protects data from unauthorized access, injection, and misuse. Layers: authentication, authorization (roles, grants), encryption (TLS, at-rest), and application practices (parameterized queries, least privilege). A breach can expose sensitive data and cause compliance failures.

## Why It Matters

Databases hold sensitive data: PII, credentials, financial records. SQL injection remains a top vulnerability. Misconfigured access leads to data leaks. Security must be built in, not bolted on.

## Key Concepts

- Authentication: passwords, certificates, IAM (cloud)
- Authorization: GRANT/REVOKE, roles, row-level security (RLS)
- Encryption: TLS in transit, encryption at rest
- SQL injection: parameterized queries, never concatenate
- Least privilege: minimal grants per application
- Audit logging: track access and changes

## Code Example

```sql
-- Create app role with minimal privileges
CREATE ROLE app_user LOGIN PASSWORD '...';
GRANT CONNECT ON DATABASE mydb TO app_user;
GRANT USAGE ON SCHEMA public TO app_user;
GRANT SELECT, INSERT, UPDATE ON orders TO app_user;
-- No DELETE, no DDL

-- Row-level security (PostgreSQL)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY user_orders ON orders
  FOR ALL USING (user_id = current_setting('app.user_id')::int);
```

## Under the Hood

Authentication happens at connection. Authorization checked per statement. RLS adds predicates to queries. TLS encrypts connection. Audit logs write to table or external system.

## Common Mistakes

- Default credentials or weak passwords
- Overprivileged roles (DROP, superuser)
- SQL injection via string concatenation
- No encryption in transit
- Storing secrets in connection strings (use env vars, secrets manager)

## Best Practices

- Parameterized queries always
- Least privilege per role
- TLS for all connections
- Secrets in env vars or secrets manager
- Enable audit logging for sensitive tables
- Regular security reviews

## Summary

Database security: auth, least privilege, encryption, parameterized queries. RLS for multi-tenant. Audit logging. Never concatenate user input.
