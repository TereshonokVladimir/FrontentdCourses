# Practice: Basic Module

## Tasks

### Task 1
Create a new NestJS project using the CLI. Generate an `AppModule` with a single `HelloController` that returns `{ message: 'Hello World' }` on `GET /`. Run the app and verify the response.

### Task 2
Generate a `GreetingModule` with `GreetingService` and `GreetingController`. The service has a method `getGreeting(name?: string)` that returns `Hello, ${name || 'World'}!`. The controller exposes `GET /greeting` and `GET /greeting?name=Alice`. Import `GreetingModule` in `AppModule`.

### Task 3
Add a `ConfigModule` with `isGlobal: true` and load a `GREETING_PREFIX` env variable (default: `Hello`). Update `GreetingService` to use this prefix. Add a `.env` file with `GREETING_PREFIX=Hi` and verify the greeting changes.

### Task 4
Create a `SharedModule` that exports a `UtilsService` with a method `capitalize(str: string)`. Import `SharedModule` in `GreetingModule` and use `UtilsService` to capitalize the name in the greeting. Ensure `SharedModule` is reusable (exports only what's needed).

### Task 5
Refactor `GreetingModule` to support multiple languages. Add a `GREETING_LANG` env (default: `en`). Create a `GreetingRepository` that maps `en` → "Hello", `es` → "Hola", `fr` → "Bonjour". Inject it into `GreetingService` and use it for the prefix. Add `GET /greeting?name=Bob&lang=es` support. Use proper module structure and avoid circular dependencies.
