# Practice: Service Layer

## Tasks

### Task 1
Create a `UserService` with `createUser(dto: CreateUserDto): Promise<User>`, `getUser(id: string): Promise<User | null>`, `updateUser(id: string, dto: UpdateUserDto): Promise<User | null>`. The service uses a `UserRepository` (inject via constructor). All methods are fully typed.

### Task 2
Add `OrderService` that depends on `UserService` and `OrderRepository`. `createOrder(userId: string, items: OrderItemDto[]): Promise<Order>` – validate user exists, create order with items. Use Result type for validation errors. Ensure proper error propagation.

### Task 3
Implement transaction support: `UserService.transferCredits(fromId, toId, amount)` – deduct from one, add to another. Use a `TransactionManager` interface with `run<T>(fn: (tx: Transaction) => Promise<T>): Promise<T>`. Services receive the transaction for their operations. Simulate with in-memory.

### Task 4
Add validation in services: `createUser` validates email format, name length. Use Zod. Return `Result<User, ValidationError>`. Add business rules: email must be unique (check via repository). Create a `ValidationService` or use Zod directly. Keep services thin.

### Task 5
Build an event-emitting service: `UserService.createUser` emits `UserCreated` event after success. Use an `EventBus` interface. Create `OrderService` that subscribes to `UserCreated` and sends a welcome email (simulate). Support multiple subscribers. Ensure events are async and don't block the main flow. Add typed events: `EventBus.emit<UserCreated>(event)`.