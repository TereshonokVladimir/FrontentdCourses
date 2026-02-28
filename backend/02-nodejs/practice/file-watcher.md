# Practice: File Watcher

## Tasks

### Task 1
Use `fs.watch()` to watch a directory for changes. On any change, log the filename and event type. Handle the `rename` event (often fired for content changes on some systems). Use `fs.watch(path, { recursive: false }, callback)`.

### Task 2
Debounce events: `fs.watch` can fire multiple times for a single save. Debounce so you only process once per 100ms. Use a Map of filename → timeout. Clear previous timeout when a new event arrives for the same file.

### Task 3
Implement a file watcher that only triggers for specific extensions: `watchDir(path, { exts: ['.js', '.json'] })`. Filter events by `path.extname(filename)`. Support `ignore` patterns (e.g., `node_modules`). Use `path.relative` to match against patterns.

### Task 4
Add recursive watching (subdirectories). Use `fs.watch` with `{ recursive: true }` (or walk the tree and watch each dir). On new directory creation, start watching it. Handle the case when a watched directory is deleted. Clean up watchers on delete.

### Task 5
Build a "build on change" watcher: when a file changes, run a build command (e.g., `node build.js`). Use `child_process.spawn` to run the command. Queue builds: if a build is running and another change occurs, schedule one more build after the current one finishes (don't stack). Add a `--watch` flag to your CLI that uses this.