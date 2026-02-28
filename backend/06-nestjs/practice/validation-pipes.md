# Practice: Validation Pipes

## Tasks

### Task 1
Create a `RegisterDto` with `email` (valid email), `password` (min 8 chars), and `name` (min 2 chars). Create a `POST /auth/register` endpoint that validates the body with `ValidationPipe` and returns `{ id: 1, email, name }` (mock). Return 400 with validation errors for invalid input.

### Task 2
Add a custom `IsStrongPassword` validator that checks: at least one uppercase, one lowercase, one number, one special character. Use it in `RegisterDto`. Create a custom pipe `ParseOrderByPipe` that accepts `?orderBy=name` or `?orderBy=createdAt` and rejects invalid values with `BadRequestException`.

### Task 3
Create `UpdateProfileDto` with optional `name`, `avatar` (URL format). Use `PartialType` and `@IsOptional()`. Add `@Transform()` to trim string fields and convert empty strings to `undefined`. Ensure `ValidationPipe` with `transform: true` is applied.

### Task 4
Build a `ParseIdsPipe` that parses a comma-separated query param `?ids=1,2,3` into an array of numbers. Reject non-numeric values. Use it in `GET /products?ids=1,2,3`. Create a `ParseDateRangePipe` for `?from=2024-01-01&to=2024-12-31` that returns `{ from: Date, to: Date }` and validates `from <= to`.

### Task 5
Implement a validation pipeline for a complex `CreateOrderDto`: `items` (array of `{ productId: number, quantity: number }`), `shippingAddress` (nested object with street, city, zip), `couponCode` (optional string). Add custom async validator `IsValidCoupon` that simulates a DB check. Use `@ValidateNested()` and `@Type()` for nested validation. Return structured validation errors with field paths.
