# Practice: Microservice Setup

## Tasks

### Task 1
Create a hybrid Nest app: HTTP on port 3000 and a TCP microservice on port 3001. Add a `MathController` with `@MessagePattern({ cmd: 'sum' })` that accepts `{ a: number, b: number }` and returns `a + b`. Create a `MathClientService` that injects `ClientProxy` and has a method `sum(a, b)` that sends the message and returns the result. Expose `GET /calculate?a=1&b=2` that uses the client.

### Task 2
Add Redis as the transport instead of TCP. Configure `Transport.REDIS` with a Redis URL. Create an `@EventPattern('user_created')` handler that logs the event. From the HTTP app, emit the event when a user is created. Use `ClientProxy.emit()`. Verify the event is received.

### Task 3
Create a separate Nest microservice app (different project or folder) that listens on TCP port 3002. Implement a `UsersMicroservice` with `@MessagePattern({ cmd: 'get_user' })` that returns a user by id. The main HTTP app should call this microservice via `ClientProxy` when `GET /users/:id` is requested. Use `ClientProxy.send()` and handle timeouts.

### Task 4
Implement request-response with correlation. Add a `correlationId` to each request (from header or generated). Pass it in the message payload. The microservice should include it in the response. Log the correlation ID in both apps for tracing. Add retry logic (e.g., 3 retries with backoff) in the client for transient failures.

### Task 5
Switch to Kafka transport. Set up a Kafka broker (local or Docker). Create a `OrdersMicroservice` that consumes from topic `orders.created`. The HTTP app produces to the topic when an order is created. The microservice processes the order (e.g., send notification, update inventory) and publishes to `orders.processed`. Use `@EventPattern` with Kafka. Implement idempotency: use a `messageId` to deduplicate. Add dead-letter handling for failed messages.
