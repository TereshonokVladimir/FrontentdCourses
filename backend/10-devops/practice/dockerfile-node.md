# Practice: Dockerfile for Node.js

## Tasks

### Task 1
Create a minimal Dockerfile for a Node.js app. Use `node:20-alpine` as base, set `WORKDIR` to `/app`, copy `package.json` and `package-lock.json`, run `npm ci`, copy source code, and set `CMD` to `["node", "index.js"]`. Build and run the container locally.

### Task 2
Optimize the Dockerfile for layer caching: ensure `npm ci` runs before copying application code so dependency layers are cached when only source changes. Add a non-root user and run the app as that user. Expose port 3000.

### Task 3
Add a multi-stage build: use a build stage with dev dependencies to run `npm run build`, then copy only the built output and production dependencies to the final stage. Ensure the final image has no dev dependencies.

### Task 4
Create a `.dockerignore` file to exclude `node_modules`, `.git`, `*.log`, and test files from the build context. Add health check instruction (`HEALTHCHECK`) that curls `/health` every 30 seconds. Use `EXPOSE 3000` and document the expected env vars in comments.

### Task 5
Build a production-ready Dockerfile with: pinned base image digest for reproducibility, `npm ci --omit=dev` in final stage, security scan in CI (Trivy or similar), and support for build args (`NODE_ENV`, `APP_VERSION`). Ensure the image runs with `readonly` root filesystem where possible and drops unnecessary capabilities.
