# NestJS Overview

## Concept

NestJS is a progressive Node.js framework for building efficient, scalable server-side applications. It uses TypeScript by default and combines elements of OOP, FP, and FRP. Nest provides an opinionated structure with modules, dependency injection, and decorators inspired by Angular.

## Why It Matters

NestJS brings enterprise-grade architecture to Node.js: clear separation of concerns, built-in DI, strong typing, and a rich ecosystem. It scales from small APIs to large microservices and reduces boilerplate while enforcing best practices.

## Key Concepts

- Modular architecture: applications are composed of feature modules
- Decorator-based: `@Controller`, `@Injectable`, `@Module` define structure
- Built on Express/Fastify: uses mature HTTP abstractions
- TypeScript-first: compile-time safety and better DX
- CLI: scaffolding, build, and dev tooling out of the box

## Code Example

```typescript
// main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()

// app.module.ts
import { Module } from '@nestjs/common'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
```

## Under the Hood

Nest creates an Express (or Fastify) app under the hood. The `NestFactory` bootstraps the application, builds the DI container, and wires modules. Each module is a graph of providers; controllers receive HTTP requests and delegate to services.

## Common Mistakes

- Putting business logic in controllers instead of services
- Creating circular dependencies between modules
- Overusing global modules; prefer explicit imports
- Ignoring the CLI for generating boilerplate

## Best Practices

- One module per feature; keep modules focused
- Use DTOs for request/response validation
- Leverage the CLI: `nest generate module users`
- Structure: controllers (thin), services (logic), repositories (data)

## Summary

NestJS is an opinionated, modular Node.js framework with DI, decorators, and TypeScript. Use modules to organize features, keep controllers thin, and rely on services for business logic.
