# Practice: Dependency Injection

## Tasks

### Task 1
Create a simple container: `Container` with `register<T>(key: string, factory: () => T)` and `resolve<T>(key: string): T`. Store factories. Resolve creates the instance (singleton: cache by key). Use a Map. Type the key to ensure T matches.

### Task 2
Add scoped resolution: `registerSingleton` (one instance) vs `registerTransient` (new instance each resolve). Add `registerInstance(key, instance)` for already-created instances. Support `resolveAll(key)` for multiple registrations.

### Task 3
Implement constructor injection: given a class `UserService`, inspect its constructor params (use a simple approach: pass deps as second arg to register), and resolve them recursively. Support `@Inject('UserRepository')` via parameter decorator (store metadata, resolve in container).

### Task 4
Create a decorator `@Injectable()` that registers the class in the container. Use a default key (class name). Support `@Inject(key?)` on constructor params. Build `createContainer(modules: Module[])` that registers all providers. Support circular deps (lazy resolution).

### Task 5
Implement a module system: `Module` has `providers: Provider[]`, `imports: Module[]`. Each provider is `{ provide: Token, useClass/useFactory/useValue }`. Build a `ModuleRef` that creates a child container with imported modules. Support `forwardRef` for circular module imports. Add request scope: `Scope.REQUEST` creates new instance per request (simulate with a context).