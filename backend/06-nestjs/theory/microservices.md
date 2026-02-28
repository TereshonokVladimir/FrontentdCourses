# Microservices

## Concept

Nest supports microservice architecture with multiple transports: TCP, Redis, RabbitMQ, Kafka, gRPC. You create a hybrid app (HTTP + microservice) or a standalone microservice. Message-based communication replaces HTTP for service-to-service calls.

## Why It Matters

Microservices enable scaling, independent deployment, and technology diversity. Nest's abstraction lets you switch transports (TCP to Kafka) without rewriting business logic. Message patterns (request-response, event-based) map to Nest concepts.

## Key Concepts

- `@nestjs/microservices`: ClientProxy, MessagePattern, EventPattern
- Transports: TCP, Redis, MQTT, Kafka, gRPC, NATS
- `MessagePattern('cmd')`: request-response
- `EventPattern('event')`: fire-and-forget
- Hybrid app: HTTP + microservice in one process

## Code Example

```typescript
// main.ts - hybrid
const app = await NestFactory.create(AppModule)
app.connectMicroservice<MicroserviceOptions>({
  transport: Transport.TCP,
  options: { host: 'localhost', port: 3001 },
})
await app.startAllMicroservices()
await app.listen(3000)

// Handler
@Controller()
export class AppController {
  @MessagePattern({ cmd: 'get_user' })
  getUser(data: { id: string }) {
    return this.usersService.findOne(data.id)
  }

  @EventPattern('user_created')
  handleUserCreated(data: { userId: string }) {
    this.notificationService.sendWelcome(data.userId)
  }
}

// Client
@Injectable()
export class UsersClient {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}
  getUser(id: string) {
    return this.client.send({ cmd: 'get_user' }, { id })
  }
}
```

## Under the Hood

Nest starts a microservice listener alongside the HTTP server. MessagePattern registers handlers; when a message arrives, Nest routes it by pattern and invokes the handler. ClientProxy sends messages and returns Observables for request-response.

## Common Mistakes

- Using HTTP for internal service calls when message queue is better
- Not handling timeouts and retries in client
- Mixing sync and async patterns incorrectly
- Not versioning message payloads

## Best Practices

- Use events for fire-and-forget; messages for request-response
- Add correlation IDs for tracing across services
- Use DTOs for message payloads
- Consider gRPC for performance-critical internal APIs

## Summary

Nest microservices support multiple transports. Use MessagePattern for request-response, EventPattern for events. Hybrid apps combine HTTP and microservice. Use clients for cross-service calls.
