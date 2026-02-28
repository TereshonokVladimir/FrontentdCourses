# Practice: CRUD Controller

## Tasks

### Task 1
Create a `ProductsModule` with `ProductsController` and `ProductsService`. Use an in-memory array to store products. Implement `GET /products` returning all products and `POST /products` accepting `{ name: string, price: number }` and returning the created product with a generated `id`. Return 201 on create.

### Task 2
Add `GET /products/:id` and `DELETE /products/:id`. Return 404 with `{ statusCode: 404, message: 'Product not found' }` when the product does not exist. Use `ParseIntPipe` or `ParseUUIDPipe` for the id param. Return 204 on successful delete.

### Task 3
Implement `PATCH /products/:id` accepting a partial body `{ name?: string, price?: number }`. Update only provided fields. Return 404 if product not found. Validate that `price` is a positive number if provided.

### Task 4
Add pagination to `GET /products`. Support query params `page` (default 1) and `limit` (default 10, max 100). Return `{ data: Product[], total: number, page: number, limit: number }`. Use `ParseIntPipe` with default values.

### Task 5
Create DTOs for create and update: `CreateProductDto` and `UpdateProductDto` (use `PartialType`). Add `ValidationPipe` globally with `whitelist: true`. Add `@ApiProperty()` to DTOs and set up Swagger. Document all endpoints with `@ApiTags`, `@ApiResponse`, and ensure the API docs are accessible at `/api`.
