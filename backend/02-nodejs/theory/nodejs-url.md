# Node.js URL Module

## Concept

The `url` module parses and constructs URLs. It provides `URL` (Web API compatible) and legacy `url.parse()`. Handles protocol, host, pathname, search params, and hash. Essential for routing and API clients.

## Why It Matters

APIs consume and produce URLs. Routing needs pathname and query parsing. Building URLs correctly avoids injection and malformed requests. The URL API is standard across Node and browsers.

## Key Concepts

- `new URL(input, base)` – parse or resolve
- `url.pathname`, `url.searchParams`
- `url.searchParams.get()`, `.set()`, `.append()`
- `url.toString()` – serialize
- `url.format()` – legacy formatting

## Code Example

```javascript
const { URL } = require('url')

const u = new URL('https://api.example.com/users?page=2&limit=10')
u.pathname   // /users
u.searchParams.get('page')  // '2'
u.searchParams.append('sort', 'name')

const full = new URL('/docs', 'https://example.com')
// full.href === 'https://example.com/docs'
```

## Under the Hood

URL follows the WHATWG standard. Parsing uses a state machine. searchParams is a URLSearchParams instance. Resolution follows the spec for base + relative. No network I/O.

## Common Mistakes

- Using url.parse() (legacy; prefer URL)
- Not validating user-provided URLs (open redirect)
- Assuming pathname is normalized
- Mixing URL and string concatenation

## Best Practices

- Use URL for parsing and building
- Validate redirect URLs against allowlist
- Use searchParams for query manipulation
- Consider URL for request URL construction

## Summary

URL module: parse, construct, searchParams. Use URL API; validate user URLs; avoid open redirect.