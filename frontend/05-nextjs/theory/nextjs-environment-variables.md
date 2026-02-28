# Environment Variables

## Concept

Environment variables are configured in `.env.local` (and `.env`, `.env.development`, `.env.production`). Access with `process.env.VARIABLE_NAME`. Variables are inlined at build time. Prefix with `NEXT_PUBLIC_` to expose to the browser. Server-only vars stay private.

## Why It Matters

Secrets (API keys, DB URLs) must not reach the client. NEXT_PUBLIC_ vars are safe for client. Understanding the rules prevents leaking secrets. Different env files for dev/prod enable environment-specific config.

## Key Concepts

- `.env.local` — local overrides (gitignored)
- `.env` — defaults
- `NEXT_PUBLIC_` — exposed to browser
- No prefix — server only
- Inlined at build time (not runtime for static)

## Code Example

```js
// .env.local
DATABASE_URL=postgresql://...
NEXT_PUBLIC_API_URL=https://api.example.com

// Server Component or API Route
const db = new Database(process.env.DATABASE_URL)

// Client Component
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## Under the Hood

Next.js reads .env files at build/start. It replaces `process.env.X` with the value. NEXT_PUBLIC_ vars are included in the client bundle. Others are stripped from client code. Values are embedded at build time.

## Common Mistakes

- Exposing secrets (forgetting they're in client if used in Client Component)
- Using server vars in Client Component (undefined)
- Expecting runtime env changes (build-time inlining)
- Committing .env.local (should be gitignored)

## Best Practices

- Use NEXT_PUBLIC_ only for non-secret client config
- Keep secrets in server-only code
- Use .env.example for documentation (no values)
- Validate env vars at startup

## Summary

.env files for config. NEXT_PUBLIC_ for client. No prefix for server. Build-time inlining. Never commit secrets. Validate required vars.
