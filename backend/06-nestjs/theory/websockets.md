# WebSockets

## Concept

Nest provides WebSocket support via `@nestjs/websockets` and `@nestjs/platform-socket.io`. Gateways are classes that handle real-time bidirectional communication. Use for chat, notifications, live updates, and collaborative features.

## Why It Matters

WebSockets enable real-time features without polling. Nest's gateway abstraction integrates with the DI system and supports rooms, namespaces, and authentication. Socket.io provides fallbacks and reconnection for production resilience.

## Key Concepts

- `@WebSocketGateway()`: marks a gateway class
- `@SubscribeMessage('event')`: handle client messages
- `@ConnectedSocket()`: access socket instance
- `@MessageBody()`: message payload
- `server.emit()`, `socket.emit()`: send to clients

## Code Example

```typescript
@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/chat',
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  constructor(private authService: AuthService) {}

  async handleConnection(client: Socket) {
    const token = client.handshake.auth.token
    const user = await this.authService.validateToken(token)
    if (!user) client.disconnect()
    else client.data.user = user
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: { room: string; text: string },
    @ConnectedSocket() client: Socket,
  ) {
    this.server.to(data.room).emit('message', {
      user: client.data.user,
      text: data.text,
    })
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() room: string, @ConnectedSocket() client: Socket) {
    client.join(room)
  }
}
```

## Under the Hood

Nest wraps Socket.io. The gateway is a provider; Nest registers it with the WebSocket adapter. handleConnection runs when a client connects; SubscribeMessage handlers run when events arrive. server/socket are the underlying Socket.io objects.

## Common Mistakes

- Not authenticating connections; any client can connect
- Emitting to all clients instead of rooms when broadcasting
- Not handling disconnects (cleanup, presence)
- Sending sensitive data in broadcast messages

## Best Practices

- Authenticate in handleConnection; reject invalid tokens
- Use rooms for targeted broadcasts
- Implement heartbeat/ping for connection health
- Validate message payloads like HTTP requests

## Summary

WebSocket gateways handle real-time communication. Use SubscribeMessage for events, rooms for targeting. Authenticate connections. Validate payloads.
