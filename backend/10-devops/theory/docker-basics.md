# Docker Basics

## Concept

Docker is a platform for building, shipping, and running applications in containers. Containers package an application with its dependencies into a single, portable unit that runs consistently across any environment. Unlike VMs, containers share the host kernel and are lightweight.

## Why It Matters

"Works on my machine" disappears when you ship the same container everywhere. Docker enables reproducible builds, fast startup, and efficient resource use. It's the foundation for modern deployment and orchestration.

## Key Concepts

- **Image**: Immutable template (layers) defining filesystem and startup command
- **Container**: Running instance of an image
- **Dockerfile**: Instructions to build an image
- **Registry**: Storage for images (Docker Hub, ECR, GCR)
- **Layers**: Each instruction creates a cached layer; order matters for cache hits

## Code Example

```dockerfile
# Dockerfile for a Node.js API
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t my-api:1.0 .
docker run -p 3000:3000 --env NODE_ENV=production my-api:1.0
```

## Under the Hood

Docker uses Linux namespaces (PID, network, mount, etc.) and cgroups to isolate processes. Images are layered: each instruction adds a read-only layer. Containers add a writable layer on top. The UnionFS merges layers into a single filesystem view.

## Common Mistakes

- Running as root inside the container
- Using `latest` tag in production
- Copying everything before `npm install` (breaks layer caching)
- Storing data in the container filesystem (use volumes)
- Building secrets into images

## Best Practices

- Use multi-stage builds to keep images small
- Pin base image versions (e.g., `node:20-alpine`)
- Order Dockerfile for cache: dependencies first, code last
- Run as non-root user
- Use `.dockerignore` to exclude unnecessary files

## Summary

Docker packages apps in portable containers. Use Dockerfiles for reproducible builds, layer caching for speed, and run as non-root. Containers are the unit of deployment in modern backends.
