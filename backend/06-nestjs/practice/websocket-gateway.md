# Practice: WebSocket Gateway

## Tasks

### Task 1
Create a `ChatGateway` with `@WebSocketGateway()`. Implement `handleConnection` to log when a client connects and `handleDisconnect` to log when they disconnect. Add `@SubscribeMessage('ping')` that returns `'pong'`. Use the default Socket.io client to connect and verify the ping-pong.

### Task 2
Add room support. `@SubscribeMessage('join')` accepts `{ room: string }` and calls `client.join(room)`. `@SubscribeMessage('message')` accepts `{ room, text }` and emits to that room with `server.to(room).emit('message', { text, userId })`. Attach `userId` to `client.data` in `handleConnection` (mock or from auth). Broadcast only to the room, not globally.

### Task 3
Implement authentication for WebSocket connections. Pass a token in `client.handshake.auth.token`. In `handleConnection`, validate the token (use `JwtService`), attach the user to `client.data.user`, and disconnect if invalid. Reject connections with `client.disconnect()` and optionally emit an error event before disconnecting.

### Task 4
Add presence tracking. Maintain a `Map<room, Set<userId>>` of who is in each room. On `join`, add the user; on `disconnect`, remove from all rooms. Emit `user_joined` and `user_left` to the room when membership changes. Add `@SubscribeMessage('get_members')` that returns the list of users in the client's current room(s).

### Task 5
Build a real-time notification system. Create a `NotificationsGateway` with namespace `/notifications`. Users connect with their userId (from JWT). Maintain a map `userId -> socketId` for targeted messages. Implement `NotificationsService.sendToUser(userId, payload)` that emits to that user's socket. Add `@SubscribeMessage('subscribe')` for channels (e.g., `orders`, `messages`). Store channel subscriptions per socket and only emit to sockets subscribed to the channel. Support server-side emission from HTTP controllers (inject the gateway and call `sendToUser` when an order is created).
