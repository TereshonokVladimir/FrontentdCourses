# Practice: Logging Service

## Tasks

### Task 1
Create a logger module with `log(level, message)` and `log(level, message, meta)` where level is 'info', 'warn', or 'error'. Output to stdout in format: `[LEVEL] timestamp message` (and meta as JSON if provided). Use a configurable output stream.

### Task 2
Add log levels with severity: debug (0), info (1), warn (2), error (3). Only log messages at or above the configured level. Support setting level via `setLevel(level)` or constructor. Default to 'info'.

### Task 3
Implement child loggers: `logger.child({ requestId: '...', userId: '...' })`. Child loggers automatically include the extra fields in every log. Support nested children. Use a simple merge for meta.

### Task 4
Add file transport: logs go to both stdout and a file. Support configurable file path and rotation (append only for now). Use `fs.createWriteStream` with `flags: 'a'`. Ensure non-blocking writes (or use a simple queue).

### Task 5
Add structured JSON output mode. When `format: 'json'`, output each log as a single-line JSON: `{"level","message","timestamp","meta"}`. Support both human-readable and JSON formats. Add a `flush()` method that returns a Promise resolving when all buffered writes are done. Use for graceful shutdown.