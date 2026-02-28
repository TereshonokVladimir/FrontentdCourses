# Practice: Contract Test

## Tasks

### Task 1
Define a simple API contract for `GET /users/:id`: status 200, body `{ id: string; email: string; name: string }`. Write a consumer test (e.g., with Pact or a manual mock) that expects this. Verify the provider (your API) satisfies it.

### Task 2
Add a contract for `POST /users` with request body `{ email: string; name: string }` and response 201 with user. Include error case: 400 when email invalid. Create provider verification that checks both success and error paths.

### Task 3
Use OpenAPI (or similar) to define the contract for 3 endpoints. Generate a test that validates request/response against the schema. Run it against the real API. Ensure adding a new required field to the spec fails the provider until implemented.

### Task 4
Set up Pact: consumer defines 2 interactions (get user, create user). Publish pact file. Provider verification runs against the real app. Integrate into CI: consumer tests publish pact on merge; provider verification runs in provider's CI. Document the flow.

### Task 5
Implement contract tests for a service that calls an external API (e.g., payment gateway). Consumer tests use a mock that implements the contract. Create a "contract" module that both consumer and a mock server use. Ensure the mock stays in sync when the real API changes (manual or automated check).
