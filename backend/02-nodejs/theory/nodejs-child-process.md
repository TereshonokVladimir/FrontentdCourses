# Node.js Child Process

## Concept

Child processes run separate programs or scripts. spawn(), exec(), execFile(), fork(). Use for CLI tools, CPU-heavy work, or isolation. Communicate via stdin/stdout or IPC. Manage lifecycle (kill, exit codes).

## Why It Matters

Backends sometimes need to run external commands (ImageMagick, ffmpeg, scripts). fork() runs Node scripts in separate processes with IPC. Understanding exit codes and signals prevents orphaned processes.

## Key Concepts

- spawn: stream-based, no shell by default
- exec: buffer output, runs in shell
- fork: spawns Node with IPC channel
- stdin, stdout, stderr streams
- exit codes, signals (SIGTERM, SIGKILL)

## Code Example

```javascript
const { spawn } = require('child_process')

const child = spawn('ls', ['-la'], { stdio: 'inherit' })
child.on('close', (code) => {
  console.log(`Exited with ${code}`)
})

// fork for Node script
const { fork } = require('child_process')
const worker = fork('./worker.js')
worker.on('message', (msg) => console.log(msg))
worker.send({ task: 'process' })
```

## Under the Hood

spawn uses OS primitives (fork/exec on Unix). exec runs cmd in shell (sh -c). fork is spawn with node and ipc. Parent can listen to child stdout/stderr and send stdin.

## Common Mistakes

- Using exec for large output (buffers in memory)
- Not handling 'error' and 'exit' events
- Not killing children on parent exit
- Shell injection with exec and user input

## Best Practices

- Use spawn for streaming; exec for small output
- Avoid shell when possible (no user input in cmd)
- Kill children on parent shutdown
- Use worker_threads for CPU work in same process

## Summary

Child processes: spawn, exec, fork. Use for external commands or isolation. Handle exit and errors; kill on shutdown.
