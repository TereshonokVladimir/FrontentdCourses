# Practice: Multi-Environment Configuration

## Tasks

### Task 1
Create a config module that loads settings based on `NODE_ENV` (development, staging, production). Use different values for `logLevel`, `databaseUrl`, and `apiBaseUrl` per environment. Support override via environment variables (env vars take precedence). Export a single config object.

### Task 2
Add validation for config using Zod or Joi. Ensure required fields (e.g., `databaseUrl`) are present and valid for each environment. Fail fast at startup if config is invalid. Add a `config.schema.json` or similar to document the expected structure. Support loading from a `.env` file in development (use `dotenv`).

### Task 3
Implement config for Kubernetes: use ConfigMaps for non-sensitive config (feature flags, log level) and Secrets for sensitive data. Create a ConfigMap and Secret per environment (namespace or name suffix). Document how to update config (kubectl edit, or GitOps with Kustomize/Helm). Add a config hash annotation to deployments to trigger rollout on config change.

### Task 4
Use a feature flag service (LaunchDarkly, Unleash, or a simple Redis-based implementation) to toggle features per environment. Integrate the API with the feature flag client; ensure flags are evaluated at runtime. Add a `/flags` endpoint (admin only) to inspect current flag values. Document the process for rolling out a new feature behind a flag.

### Task 5
Build a production config management system: use a centralized config service (e.g., Consul, etcd, or cloud-native Parameter Store), implement config versioning and rollback, add encryption for sensitive config at rest, support config hot-reload without restart (where safe), and document the config hierarchy (defaults → env-specific → runtime overrides). Create a config change approval workflow for production.
