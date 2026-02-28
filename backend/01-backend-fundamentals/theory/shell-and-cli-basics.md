# Shell and CLI Basics

## Concept

Backend developers use the shell for running servers, scripts, and deployments. Common operations: run Node scripts, pipe output, environment variables, process signals. CLI tools (npm, node, docker) are daily tools. Scripts automate repetitive tasks.

## Why It Matters

Deployment, debugging, and local dev rely on shell commands. Understanding PATH, env vars, and signals helps when things fail. Many backend tools are CLI-first.

## Key Concepts

- Run: node script.js, NODE_ENV=production node app.js
- Pipes: cmd1 | cmd2
- Background: node app.js &
- Signals: kill -TERM pid
- Exit codes: 0 success, non-zero failure

## Code Example

```bash
# Run with env
NODE_ENV=production PORT=3000 node dist/index.js

# Pipe logs
node app.js 2>&1 | tee app.log

# Health check in script
curl -f http://localhost:3000/health || exit 1
```

## Under the Hood

Shell spawns child process, passes env, connects stdin/stdout/stderr. Pipes connect stdout of one to stdin of next. Signals (SIGTERM, SIGINT) are delivered by OS to process.

## Common Mistakes

- Forgetting to set NODE_ENV
- Not handling signals in long-running processes
- Assuming shell is bash (use sh for portability)
- Ignoring exit codes in scripts

## Best Practices

- Use env vars for config
- Handle SIGTERM for graceful shutdown
- Check exit codes in deployment scripts
- Prefer npm scripts for project commands

## Summary

Shell: run Node with env, use pipes, handle signals. Scripts should check exit codes and support graceful shutdown.
