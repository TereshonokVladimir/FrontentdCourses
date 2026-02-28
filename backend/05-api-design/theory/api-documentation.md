# API Documentation

## Concept

API documentation describes how to use an API—endpoints, parameters, request/response formats, authentication, and examples. Good docs reduce integration time, support burden, and errors. Documentation can be auto-generated (OpenAPI) or hand-written, often both.

## Why It Matters

Developers integrate with your API by reading docs. Poor docs lead to support tickets, wrong usage, and abandoned integrations. Good docs are accurate, complete, and include runnable examples. Documentation is part of the product.

## Key Concepts

- **Reference docs**: Endpoint-by-endpoint; parameters, schemas, codes
- **Guides**: Tutorials, quickstart, use-case flows
- **Examples**: Request/response samples, code snippets
- **Changelog**: Version history, breaking changes, deprecations
- **Interactive**: Try-it-now in browser (Swagger UI, Postman)

## Code Example

```markdown
## Create Order

`POST /api/v1/orders`

Creates a new order for the authenticated customer.

### Request

| Header | Required | Description |
|--------|----------|-------------|
| Authorization | Yes | Bearer token |
| Idempotency-Key | Yes | UUID for safe retries |
| Content-Type | Yes | application/json |

### Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| items | array | Yes | Order line items |
| items[].productId | string | Yes | Product ID |
| items[].quantity | number | Yes | Quantity (min 1) |
| shippingAddress | object | Yes | Delivery address |

### Example

Request:
POST /api/v1/orders
Authorization: Bearer eyJ...
Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000

{
  "items": [{"productId": "prod_1", "quantity": 2}],
  "shippingAddress": {"street": "123 Main", "city": "NYC", "zip": "10001"}
}

Response: 201 Created
{
  "id": "ord_abc123",
  "status": "pending",
  "total": 49.98
}
```

## Under the Hood

OpenAPI specs generate reference docs. Guides are written in Markdown. Examples can be extracted from tests. Docs should be versioned with API. CI can validate that examples match current behavior.

## Common Mistakes

- Docs out of sync with implementation
- Missing error responses and edge cases
- No examples or only happy path
- Buried authentication instructions
- No changelog or deprecation notices

## Best Practices

- Keep docs in version control; update with code
- Document all error responses (4xx, 5xx)
- Include request and response examples
- Provide quickstart and common flows
- Maintain changelog; announce breaking changes

## Summary

Documentation is critical for API adoption. Keep it accurate and complete. Use OpenAPI for reference; add guides and examples. Version docs with the API and maintain a changelog.
