# Practice: Decorator Middleware

## Tasks

### Task 1
Create a `@Log()` decorator for class methods. When the method is called, log the method name and arguments. Use `experimentalDecorators`. The decorator should wrap the original method. Support both sync and async methods.

### Task 2
Implement `@Validate(schema: z.ZodSchema)` for method parameters. For a method `createUser(dto: CreateUserDto)`, validate `dto` with the schema before calling. Throw ValidationError if invalid. Use a parameter decorator or method decorator that wraps.

### Task 3
Create `@Cache(ttl: number)` that caches the return value by arguments. Use a simple Map with key = JSON.stringify(args). On cache hit, return cached value. Support async methods. Add `@CacheInvalidate()` to clear cache for a method.

### Task 4
Implement `@Timing()` that measures method execution time and logs it. Use `performance.now()` or `Date.now()`. Log in format `MethodName took 123ms`. Support async: measure until promise resolves. Add optional metric name.

### Task 5
Build a `@Controller(basePath)` class decorator and `@Get(path)`, `@Post(path)` method decorators. Store metadata (path, method) on the class. Create a `registerRoutes(controller: object, router: Router)` that reads metadata and registers routes. Use reflect-metadata. Support path params: `@Get('/:id')`.