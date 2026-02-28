# Queues

## Concept

Queues decouple producers from consumers. Nest integrates with Bull (Redis-based) for job queues. Jobs are pushed to a queue, processed by workers, and can be retried, delayed, or prioritized. Use for email, PDF generation, data sync, and heavy background work.

## Why It Matters

Long-running or unreliable operations block HTTP requests. Queues move work to background workers, return fast responses, and handle retries. Bull provides persistence, rate limiting, and job progress. Essential for production workloads.

## Key Concepts

- `BullModule.forRoot()`: Redis connection
- `BullModule.registerQueue()`: create named queues
- `@Processor('queue-name')`: worker that processes jobs
- `@Process()`: handle specific job types
- `Queue.add()`: add job; `job.progress()`, `job.moveToCompleted()`

## Code Example

```typescript
// app.module.ts
BullModule.forRoot({
  redis: { host: 'localhost', port: 6379 },
}),
BullModule.registerQueue({ name: 'email' }),

// processor
@Processor('email')
export class EmailProcessor {
  @Process('welcome')
  async handleWelcome(job: Job<{ userId: string; email: string }>) {
    await this.mailer.sendWelcome(job.data.email)
  }

  @Process('report')
  async handleReport(job: Job<{ reportId: string }>) {
    for (let i = 0; i <= 100; i += 10) {
      await job.progress(i)
      // ... process
    }
  }
}

// producer
@Injectable()
export class EmailService {
  constructor(@InjectQueue('email') private queue: Queue) {}
  sendWelcome(userId: string, email: string) {
    return this.queue.add('welcome', { userId, email }, { delay: 5000 })
  }
}
```

## Under the Hood

Bull uses Redis for job storage. Jobs are JSON-serialized. Workers poll or are notified of new jobs. Failed jobs can be retried with backoff. Bull Board provides a UI for monitoring queues.

## Common Mistakes

- Not configuring retries; transient failures lose jobs
- Putting large payloads in jobs; use IDs and fetch data in processor
- Not handling job failures (dead letter, alerts)
- Blocking the worker with sync operations

## Best Practices

- Use job IDs for idempotency
- Keep job payloads small
- Configure retries and backoff
- Use Bull Board in non-production for debugging

## Summary

Bull queues offload work to background workers. Use @Processor and @Process for workers; Queue.add for producers. Configure retries. Keep payloads small.
