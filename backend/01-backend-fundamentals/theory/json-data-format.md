# JSON Data Format

## Concept

JSON (JavaScript Object Notation) is a lightweight data interchange format. Key-value pairs, arrays, strings, numbers, booleans, null. Human-readable, language-agnostic. The de facto standard for API request/response bodies.

## Why It Matters

Every REST API uses JSON. Serialization/deserialization performance matters at scale. Schema validation (e.g., Zod, JSON Schema) prevents invalid data. Understanding limits (no dates, no circular refs) avoids bugs.

## Key Concepts

- Objects: `{"key": "value"}`
- Arrays: `[1, 2, 3]`
- Primitives: string, number, boolean, null
- No comments, no trailing commas (strict)
- UTF-8 encoding

## Code Example

```javascript
// Valid JSON
const user = {
  id: 1,
  name: "Alice",
  active: true,
  tags: ["admin", "user"],
  meta: null
}

// Serialize
const str = JSON.stringify(user)

// Parse (with reviver for dates, etc.)
const parsed = JSON.parse(str)

// BigInt, Date, undefined are not JSON-serializable
JSON.stringify({ date: new Date() })  // "{\"date\":\"2025-02-28T...\"}"
```

## Under the Hood

JSON.stringify walks the object graph, converting values to JSON text. JSON.parse uses a recursive descent parser. Large objects can block the event loop; use streaming (e.g., JSONStream) for big payloads.

## Common Mistakes

- Sending undefined (omitted) vs null (explicit)
- Date as string without timezone (ISO 8601 preferred)
- Circular references cause stringify to throw
- Assuming parse is safe (prototype pollution in old parsers)

## Best Practices

- Validate input with a schema (Zod, JSON Schema)
- Use ISO 8601 for dates
- Set Content-Type: application/json
- Limit payload size to prevent DoS

## Summary

JSON is the standard for API data. Use stringify/parse correctly; validate schemas; handle non-JSON types (dates, BigInt) explicitly.
