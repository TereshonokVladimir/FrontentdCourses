# Practice: Snapshot API

## Tasks

### Task 1
Add a snapshot test for a function that returns a formatted error object: `formatError(err: Error): { code: string; message: string }`. Use `toMatchSnapshot()`. Run twice to create and verify. Intentionally change the output and observe the diff.

### Task 2
Snapshot the response shape of `GET /users/:id` (without sensitive fields). Use `toMatchSnapshot()` on the response body. Exclude or mock volatile fields (e.g., `updatedAt`). Ensure the snapshot is meaningful and stable.

### Task 3
Create an inline snapshot for a validation error formatter. The function returns `{ field: string; errors: string[] }[]`. Use `toMatchInlineSnapshot()`. Update the snapshot when you change the format and verify the test fails with a useful diff.

### Task 4
Snapshot a complex nested object (e.g., API response with pagination, metadata, and items). Use `toMatchSnapshot()`. Add a custom serializer or use `expect.addSnapshotSerializer` to redact sensitive data (e.g., tokens) from snapshots.

### Task 5
Implement property-based tests for a function, then add a snapshot test for a "canonical" example output. Ensure the snapshot documents the expected shape. When the property test finds a bug, add a regression test with an explicit assertion (not just snapshot). Discuss when to use each.
