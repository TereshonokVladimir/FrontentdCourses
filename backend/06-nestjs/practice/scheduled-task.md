# Practice: Scheduled Task

## Tasks

### Task 1
Add `ScheduleModule.forRoot()` to the app. Create a `TasksService` with `@Cron('* * * * *')` (every minute) that logs "Cron job ran at {timestamp}". Add `@Interval(10000)` that logs "Interval job ran" every 10 seconds. Verify both run by checking logs.

### Task 2
Implement a cleanup task: `@Cron('0 0 * * *')` (midnight daily) that deletes expired sessions from a mock `sessions` table (in-memory array). Add a `SessionService` with `create()`, `findAll()`, and `deleteExpired()`. The cron calls `deleteExpired()`. Log how many were deleted.

### Task 3
Add a cache warmup task: `@Cron('*/5 * * * *')` (every 5 minutes) that preloads popular data into a cache (in-memory Map). Simulate "popular" as the top 10 most-requested product IDs. Use a `CacheService` with `get`, `set`, and `warm(ids)`. The task fetches recent access logs (mock) and warms the cache for top IDs.

### Task 4
Implement a health check task: `@Interval(60000)` that pings the database and Redis (mock). If either fails, log an error and optionally call an `AlertService` (mock) to send an alert. Use `@Timeout(5000)` for a one-time startup task that seeds initial data if the database is empty.

### Task 5
Add distributed locking for multi-instance deployment. Use Redis to acquire a lock before running the cron. Only the instance that gets the lock executes the job. Implement `DistributedLockService` with `acquire(key, ttl)`, `release(key)`. Wrap the cron logic: `if (await lock.acquire('daily-cleanup')) { ... await lock.release('daily-cleanup') }`. Handle lock expiry (TTL) to prevent deadlocks if the process crashes. Support different locks per job (e.g., `cleanup`, `warmup`).
