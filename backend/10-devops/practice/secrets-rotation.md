# Practice: Secrets Rotation

## Tasks

### Task 1
Design a secrets rotation strategy for a database password. Document the steps: generate new password, update the secret in the vault (e.g., AWS Secrets Manager), update the application to use the new secret (restart or hot-reload), update the database user password, and deactivate the old password. Ensure zero downtime (both old and new must work during the transition).

### Task 2
Implement a script that rotates an API key stored in AWS Secrets Manager (or similar). The script should: create a new key, add it to the secret (as a second valid key), deploy/restart the app to pick up the new key, remove the old key from the secret, and log the rotation event. Use idempotent logic so re-running is safe.

### Task 3
Add support for Kubernetes Secrets rotation: use External Secrets Operator to sync from a vault. When the vault secret is updated, the operator updates the K8s Secret. Configure the app to reload secrets (e.g., via file watch or periodic refresh) without restart. Test the flow: update vault → verify K8s Secret updates → verify app uses new value.

### Task 4
Implement certificate rotation for TLS: use cert-manager (or similar) to automatically renew Let's Encrypt certificates. Configure a webhook or Ingress to use the certificate. Add a pre-renewal check (e.g., 30 days before expiry) and alert if renewal fails. Document the renewal process and recovery steps.

### Task 5
Build a comprehensive secrets rotation system: rotate database credentials monthly via a scheduled job, rotate API keys quarterly with a 7-day overlap period (both old and new valid), rotate TLS certs automatically with cert-manager, add audit logging for all secret access and rotation events, and create a runbook for emergency rotation (e.g., suspected compromise). Ensure no single point of failure (e.g., rotation script has backup).
