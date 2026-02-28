# OpenAPI

## Concept

OpenAPI (formerly Swagger) is a specification for describing REST APIs in a machine-readable format (YAML or JSON). It defines endpoints, parameters, request/response schemas, and authentication. Tools generate documentation, client SDKs, and server stubs from the spec.

## Why It Matters

OpenAPI provides a single source of truth for your API. Documentation stays in sync with implementation. Client generators produce type-safe SDKs. Mock servers enable parallel development. Contract testing validates implementation against spec.

## Key Concepts

- **Paths**: Endpoints and HTTP methods
- **Schemas**: Request/response body structure
- **Parameters**: Path, query, header params
- **Components**: Reusable schemas, responses, security
- **Security**: API key, OAuth2, Bearer token

## Code Example

```yaml
openapi: 3.0.3
info:
  title: Orders API
  version: 1.0.0

paths:
  /orders:
    get:
      summary: List orders
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [pending, shipped, delivered]
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: List of orders
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/OrderList'
    post:
      summary: Create order
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateOrderRequest'
      responses:
        '201':
          description: Order created

components:
  schemas:
    Order:
      type: object
      properties:
        id: { type: string }
        status: { type: string }
        total: { type: number }
```

## Under the Hood

OpenAPI is JSON Schema for APIs. Parsers validate structure. Code generators read the spec and produce code. Documentation UIs (Swagger UI, Redoc) render interactive docs. The spec can be validated at build time against actual routes.

## Common Mistakes

- Spec diverges from implementation (no validation)
- Overly generic schemas (object with additionalProperties)
- Missing error response definitions
- No examples for complex endpoints
- Not versioning the spec with the API

## Best Practices

- Generate or validate spec from code (or vice versa)
- Define all error responses (400, 401, 404, 500)
- Use $ref for reusable schemas
- Add examples for documentation
- Keep spec in version control; CI validates it

## Summary

OpenAPI describes your API in a standard format. Use it for docs, client generation, and contract testing. Keep spec in sync with implementation and validate in CI.
