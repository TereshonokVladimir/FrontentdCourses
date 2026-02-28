# Practice: Queue Worker

## Tasks

### Task 1
Set up `BullModule` with Redis. Create an `email` queue. Add an `EmailProcessor` with `@Process('welcome')` that logs "Sending welcome email to {email}". Create an `EmailService` that injects the queue and has `sendWelcome(email: string)` which adds a job. Call it from `POST /users` after creating a user. Verify the job is processed by checking logs.

### Task 2
Add job options: `delay: 5000` for welcome emails, `attempts: 3` and `backoff: { type: 'exponential', delay: 1000 }` for retries. Handle job failure in the processor: on the 3rd attempt, move to a `failed` queue or log and rethrow. Add `@Process('welcome')` error handling with `catch` and `job.moveToFailed()`.

### Task 3
Implement job progress. Create a `report` job that processes a large task (simulate with a loop). Call `job.progress(i)` every 10%. Add `GET /jobs/:id` that uses `queue.getJob(id)` to return job status and progress. Use `BullModule.registerQueue` with a named queue and inject it.

### Task 4
Create a pipeline: when `order_created` job completes, add a `send_receipt` job. Use `@OnQueueCompleted()` to listen for completion and add the next job. Alternatively, have the processor add the receipt job at the end. Add a `priority` option: receipt jobs have higher priority than welcome emails.

### Task 5
Implement a job that fetches data from an external API (mock with a delay). Add rate limiting: process at most 2 jobs per second using `limiter: { max: 2, duration: 1000 }`. Add a `repeat` job for daily digest: `cron: '0 9 * * *'` (9 AM daily). Use `@OnQueueFailed()` to send an alert (log) when jobs fail after all retries. Add Bull Board for monitoring and mount it at `/admin/queues` (protect with a simple auth in production).
