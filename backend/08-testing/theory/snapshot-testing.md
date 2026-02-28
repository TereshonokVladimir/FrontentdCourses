# Snapshot Testing

## Concept

Snapshot testing captures the output of a component or function and compares it against a stored "snapshot" file. When the output changes, the test fails and shows a diff. It is useful for detecting unintended changes to serialized output (JSON, HTML, error messages).

## Why It Matters

Snapshot tests catch accidental changes to API responses, error formats, or rendered output. They are quick to write and catch regressions. However, they can become maintenance burdens if overused or if snapshots are updated blindly.

## Key Concepts

- First run creates snapshot file (`.snap`)
- Subsequent runs compare output to snapshot
- Failures show diff; developer updates or investigates
- Best for stable, serializable output
- Use sparingly; prefer explicit assertions when possible

## Code Example

```typescript
// API response snapshot
it('returns user shape', () => {
  const user = userService.formatForApi({ id: '1', email: 'a@b.com', passwordHash: 'x' })
  expect(user).toMatchSnapshot()
})
// Snapshot: exports[`returns user shape 1`] = `Object {"email": "a@b.com", "id": "1"}`;

// Inline snapshot (stored in test file)
it('formats error', () => {
  expect(formatError(new Error('DB connection failed'))).toMatchInlineSnapshot(`
    Object {
      "code": "DB_ERROR",
      "message": "DB connection failed",
    }
  `)
})
```

## Under the Hood

Jest serializes the received value (via `pretty-format`) and compares to the snapshot file. On first run or with `--updateSnapshot`, it writes the file. The snapshot is committed; changes require explicit `-u` to update. Inline snapshots are embedded in the test file.

## Common Mistakes

- Snapshotting large or unstable output (dates, IDs)
- Blindly updating snapshots without reviewing diff
- Snapshotting implementation details
- Using snapshots where explicit assertions are clearer
- Committing snapshots with non-deterministic data

## Best Practices

- Use for stable, structured output (API responses, error objects)
- Prefer inline snapshots for small outputs
- Exclude volatile fields (timestamps, IDs) or mock them
- Review diffs before updating
- Combine with explicit assertions for critical fields

## Summary

Snapshot testing compares output to stored snapshots. Use for stable serializable output; avoid for volatile data. Review diffs before updating. Prefer explicit assertions when they add more value than snapshots.
