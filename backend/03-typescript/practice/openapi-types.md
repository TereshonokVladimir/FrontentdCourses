# Practice: OpenAPI Types

## Tasks

### Task 1
Define TypeScript types that mirror OpenAPI 3.0 schema: `SchemaObject` (type, properties, required, etc.), `PathItem` (get, post, etc.), `OperationObject` (responses, parameters). Create a minimal type for a single endpoint. Use for documentation.

### Task 2
Create a function `schemaToType(schema: SchemaObject): string` that generates a TypeScript type string from a JSON Schema. Handle object, string, number, boolean, array. Support $ref (simplified: inline only for now). Output a string that can be written to a .ts file.

### Task 3
Implement `pathsToRouter(paths: PathsObject): Router` – given OpenAPI paths, create a router with placeholder handlers. Each handler receives typed params and body based on the operation. Use generic types to extract request/response types from the spec.

### Task 4
Build a type `ExtractResponse<T, Status>` – given an operation type T and status code, extract the response body type. Handle `content['application/json']`. Create `ApiClient<T extends PathsObject>` that has typed methods for each path. Use template literal types for path + method.

### Task 5
Create a full flow: define an OpenAPI spec (as const or object), generate types from it, create a type-safe client and server. The server validates requests against the spec (use Zod schema generated from OpenAPI or manual). The client infers response types. Document the approach. Consider using openapi-typescript or similar for codegen (document as alternative).