# Scheduling

## Concept

Nest's `@nestjs/schedule` provides cron-like job scheduling. Use `@Cron()` to run methods at fixed intervals or specific times. Supports cron expressions, intervals, and timeouts. Useful for cleanup, reports, sync jobs, and periodic tasks.

## Why It Matters

Many applications need periodic tasks: daily reports, cache invalidation, data cleanup. Nest's scheduler integrates with the app lifecycle and DI. Jobs run in-process; for distributed systems, use a queue instead.

## Key Concepts

- `ScheduleModule.forRoot()`: enable scheduler
- `@Cron('0 0 * * *')`: cron expression (e.g., midnight daily)
- `@Interval(60000)`: every N milliseconds
- `@Timeout(5000)`: once after N ms
- `@Injectable()`: schedulers are providers

## Code Example

```typescript
// app.module.ts
ScheduleModule.forRoot(),

// tasks.service.ts
@Injectable()
export class TasksService {
  constructor(private cleanupService: CleanupService) {}

  @Cron('0 0 * * *')  // midnight daily
  handleDailyCleanup() {
    return this.cleanupService.removeExpiredSessions()
  }

  @Cron('*/5 * * * *')  // every 5 minutes
  handleCacheWarmup() {
    return this.cacheService.warmPopularQueries()
  }

  @Interval(60000)  // every minute
  handleHealthCheck() {
    return this.healthService.checkDependencies()
  }

  @Timeout(10000)  // once, 10s after startup
  handleStartup() {
    return this.bootstrapService.seedIfEmpty()
  }
}
```

## Under the Hood

Nest uses `node-cron` under the hood. The scheduler runs in the main process. Cron jobs are registered at startup and triggered by the system clock. For multi-instance deployments, all instances run the job (use distributed lock if needed).

## Common Mistakes

- Running heavy jobs in-process; blocks the event loop
- No locking in multi-instance; duplicate job execution
- Wrong cron expression; verify with a cron validator
- Not handling errors; failed jobs may go unnoticed

## Best Practices

- Use queues for heavy or long-running jobs
- Add distributed lock (Redis) for multi-instance
- Log job start/end and errors
- Consider timezone for cron expressions

## Summary

ScheduleModule runs cron and interval jobs. Use @Cron, @Interval, @Timeout. For heavy work or multi-instance, use queues with a distributed lock.
