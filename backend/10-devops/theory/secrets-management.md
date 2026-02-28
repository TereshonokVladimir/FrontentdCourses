# Secrets Management

## Concept

Secrets management is the practice of storing, distributing, and rotating sensitive data (API keys, passwords, certificates) securely. Secrets are never committed to code or stored in plain config. Instead, they're fetched at runtime from a dedicated vault or injected by the platform.

## Why It Matters

Leaked secrets lead to breaches. Hardcoded credentials in repos are a common attack vector. Proper secrets management ensures only authorized processes can access credentials, supports rotation, and provides audit trails.

## Key Concepts

- **Vault**: Central store (HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager)
- **Injection**: Env vars, files, or API calls at runtime
- **Rotation**: Periodic credential changes; apps must handle new values
- **Least privilege**: Services get only the secrets they need
- **Audit**: Log who accessed what, when

## Code Example

```javascript
// Fetch secrets at startup (AWS Secrets Manager)
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager')

async function loadSecrets() {
  const client = new SecretsManagerClient({ region: 'us-east-1' })
  const response = await client.send(
    new GetSecretValueCommand({ SecretId: 'prod/api/database' })
  )
  const secrets = JSON.parse(response.SecretString)
  return {
    databaseUrl: secrets.DATABASE_URL,
    apiKey: secrets.API_KEY
  }
}

// Use in app startup
const secrets = await loadSecrets()
app.set('databaseUrl', secrets.databaseUrl)
```

```yaml
# Kubernetes: External Secrets Operator syncs vault to K8s Secret
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: api-secrets
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: vault
    kind: ClusterSecretStore
  target:
    name: api-secrets
  data:
    - secretKey: database-url
      remoteRef:
        key: prod/database
        property: url
```

## Under the Hood

Vaults encrypt secrets at rest; access is controlled by IAM, policies, or tokens. At runtime, the app calls the vault API or reads injected env vars/files. Kubernetes can sync vault secrets to K8s Secrets via operators. Rotation requires the app to re-fetch or receive updated values.

## Common Mistakes

- Committing secrets to git (even in "private" repos)
- Logging secrets or including in error messages
- Long-lived, broad-access tokens
- No rotation (compromised secrets stay valid forever)
- Storing secrets in ConfigMaps (use Secrets or external vault)

## Best Practices

- Never commit secrets; use .gitignore for .env
- Use platform-native injection (K8s Secrets, env vars from vault)
- Rotate secrets regularly; design apps to handle rotation
- Principle of least privilege per service
- Audit secret access

## Summary

Secrets management keeps credentials out of code. Use a vault, inject at runtime, rotate regularly. Never commit or log secrets.
