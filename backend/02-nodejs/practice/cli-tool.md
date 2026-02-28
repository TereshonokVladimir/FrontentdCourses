# Practice: CLI Tool

## Tasks

### Task 1
Create a CLI that accepts arguments: `node cli.js --name=foo --count=5`. Parse `process.argv` manually (or use minimist). Print the parsed options. Support `--help` to show usage. Use `process.exit(0)` on success, `process.exit(1)` on error.

### Task 2
Add subcommands: `node cli.js init`, `node cli.js build`, `node cli.js serve`. Each subcommand can have its own options. Print help per subcommand. Use a simple structure: `const commands = { init: fn, build: fn, serve: fn }`.

### Task 3
Implement `init`: create a config file (e.g., `config.json`) with default values. Prompt for values via `readline` or use defaults. Overwrite only if `--force`. Use `fs.promises` for file ops. Validate that we're not overwriting without --force.

### Task 4
Implement `serve`: start an HTTP server on a configurable port (from config or `--port`). Load config from the file created by `init`. Support `--watch` to restart on config file change (use `fs.watch`). Handle SIGINT for graceful shutdown.

### Task 5
Add interactive mode: `node cli.js` with no args starts a REPL-like loop. Commands: `init`, `build`, `serve`, `exit`. Use `readline` for input. Support both interactive and non-interactive (script) usage. Add colored output for success/error (use `chalk` or ANSI codes). Ensure the tool works when piped: `echo "serve" | node cli.js`.