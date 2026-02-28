# Lifecycle Hooks

## Concept

Nest components can implement lifecycle interfaces to run code at specific moments: `OnModuleInit`, `OnApplicationBootstrap`, `OnModuleDestroy`, `OnApplicationShutdown`. Use for DB connection, cache warmup, cleanup, or graceful shutdown.

## Why It Matters

Some work must run at startup (connect to DB, load config) or shutdown (close connections, flush buffers). Lifecycle hooks provide hooks into Nest's bootstrap and teardown. Essential for resource management and graceful shutdown.

## Key Concepts

- `OnModuleInit`: after module dependencies initialized
- `OnApplicationBootstrap`: after all modules initialized
- `OnModuleDestroy`: before module is destroyed
- `OnApplicationShutdown`: on SIGTERM/SIGINT
- Async hooks: return Promise; Nest waits

## Code Example

```typescript
@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  private connection: Connection

  async onModuleInit() {
    this.connection = await createConnection(this.config)
    await this.runMigrations()
  }

  async onApplicationShutdown(signal?: string) {
    if (this.connection?.isConnected) {
      await this.connection.close()
    }
  }
}

@Injectable()
export class CacheWarmupService implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    await this.cache.warmPopularKeys()
  }
}
```

## Under the Hood

Nest calls lifecycle methods in order during bootstrap: OnModuleInit (per module), then OnApplicationBootstrap. On shutdown (SIGTERM), it calls OnModuleDestroy then OnApplicationShutdown. Async hooks are awaited.

## Common Mistakes

- Blocking bootstrap with long-running init
- Not handling shutdown; connections leak
- Assuming order across modules; use dependencies
- Throwing in init; app fails to start

## Best Practices

- Use OnModuleInit for DB connections
- Use OnApplicationShutdown for cleanup
- Keep init fast; defer heavy work to background
- Enable graceful shutdown: `app.enableShutdownHooks()`

## Summary

Lifecycle hooks run at bootstrap and shutdown. Use for connections, migrations, cleanup. Enable shutdown hooks for graceful SIGTERM handling.
