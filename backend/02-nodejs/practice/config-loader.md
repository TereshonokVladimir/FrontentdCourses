# Practice: Config Loader

## Tasks

### Task 1
Create a config loader that reads from `config.json` (or `config.default.json`). Return a plain object. Use `fs.promises.readFile` and `JSON.parse`. Support `load(configPath)` with default path. Throw on parse error or missing file (unless optional).

### Task 2
Add environment variable override: keys in `process.env` override config values. Use a convention: `CONFIG_KEY` maps to `config.key` (nesting: `CONFIG_DB_HOST` → `config.db.host`). Support both flat and nested. Parse numbers and booleans from env strings.

### Task 3
Support multiple config files: `config.default.json` (base), `config.local.json` (overrides, gitignored), `config.${NODE_ENV}.json` (env-specific). Merge in that order: default < local < env. Deep merge objects; overwrite primitives.

### Task 4
Add validation: define a schema (e.g., `{ port: 'number', db: { host: 'string', port: 'number' } }`). After loading, validate types and required keys. Return a clear error message listing invalid/missing fields. Support optional fields.

### Task 5
Implement hot reload: `config.reload()` re-reads files and re-merges. Emit an event when config changes. Support watchers that need to react (e.g., reconnect DB). Ensure no partial state during reload (atomic swap). Add `config.get(path)` for dotted path access (e.g., `config.get('db.host')`).