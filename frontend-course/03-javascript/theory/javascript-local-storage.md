# Local Storage and Session Storage

## Concept

`localStorage` and `sessionStorage` are key-value stores in the browser. `localStorage` persists across sessions; `sessionStorage` clears when the tab closes. Both are same-origin, string-only (use JSON.stringify/parse for objects). ~5–10MB limit. Synchronous—blocks main thread. Use for preferences, cache, draft data.

## Why It Matters

Storage enables offline-like experience and persistence without a server. Auth tokens, theme preference, form drafts. Know the limits and when to use IndexedDB instead (larger data, async).

## Key Concepts

- `localStorage.setItem(key, value)`
- `localStorage.getItem(key)` – returns null if missing
- `localStorage.removeItem(key)`, `localStorage.clear()`
- `sessionStorage` – same API, tab-scoped
- Values must be strings

## Code Example

```javascript
localStorage.setItem("theme", "dark")
const theme = localStorage.getItem("theme")

const user = { name: "Alice" }
localStorage.setItem("user", JSON.stringify(user))
const parsed = JSON.parse(localStorage.getItem("user"))

// Storage event (other tabs)
window.addEventListener("storage", (e) => {
  console.log(e.key, e.newValue)
})
```

## Under the Hood

Storage is implemented by the browser, keyed by origin. Data is stored on disk (localStorage) or in memory (sessionStorage). Synchronous API blocks; avoid for large data. Private/incognito may have different behavior.

## Common Mistakes

- Storing non-string without stringify
- Not handling JSON parse errors
- Storing sensitive data (XSS can read it)
- Assuming storage is always available (private mode, quota)

## Best Practices

- Use try/catch (quota exceeded, disabled)
- Don't store secrets (tokens with care)
- Use JSON for objects
- Prefer sessionStorage for temporary data

## Summary

localStorage persists; sessionStorage is tab-scoped. String values only; use JSON for objects. Same-origin. Use for preferences and cache. Handle errors.
