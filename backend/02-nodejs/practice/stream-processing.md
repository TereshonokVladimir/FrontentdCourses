# Practice: Stream Processing

## Tasks

### Task 1
Create a Transform stream that converts input to uppercase. Pipe from `process.stdin` to the transform to `process.stdout`. Use `stream.Transform` and override `_transform(chunk, encoding, callback)`.

### Task 2
Build a line-splitting transform: input is chunks of text; output is one object per line `{ line: string, lineNumber: number }`. Handle lines split across chunks. Use `readline` or implement with a buffer. Emit objects (object mode).

### Task 3
Create a pipeline: read a large CSV file, parse lines, filter rows by a predicate (e.g., `age > 18`), and write to a new file. Use `fs.createReadStream`, your line transform, a filter transform, and `fs.createWriteStream`. Use `stream.pipeline()` for error handling.

### Task 4
Implement a streaming JSON array parser: input is a stream of chunks forming a JSON array `[{...},{...}]`; output is a stream of parsed objects. Handle chunks that split in the middle of an object. Use a buffer and a simple state machine or a library. Emit each object as it is fully parsed.

### Task 5
Build a concurrent stream processor: read a stream of "jobs" (objects with `id` and `data`), process each with an async `processJob(job)` (e.g., simulate with setTimeout), and write results to an output stream. Limit concurrency to N (e.g., 5). Preserve order in the output. Use backpressure: pause the readable when the processor is overwhelmed.