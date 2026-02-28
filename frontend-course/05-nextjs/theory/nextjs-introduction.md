# Next.js Introduction

## Concept

Next.js is a React framework for production. It provides file-based routing, server-side rendering (SSR), static generation (SSG), API routes, and built-in optimizations (images, fonts, scripts). It supports both pages and App Router architectures. Next.js abstracts configuration so you focus on building.

## Why It Matters

Next.js is the most popular React framework. It solves SEO, performance, and DX in one place. Understanding Next.js is essential for modern React development. Many companies use it for production apps. It integrates with Vercel but runs anywhere.

## Key Concepts

- File-based routing: `pages/about.js` → `/about`
- Server-side rendering: HTML generated on each request
- Static generation: HTML generated at build time
- API routes: backend endpoints in the same project
- Zero config: works out of the box

## Code Example

```jsx
// pages/index.js
export default function Home() {
  return <h1>Welcome to Next.js</h1>
}

// pages/about.js
export default function About() {
  return <h1>About</h1>
}
```

## Under the Hood

Next.js uses webpack (or Turbopack) under the hood. It compiles pages into optimized bundles. The server handles routing and renders React on the server for SSR pages. Static pages are pre-rendered at build time.

## Common Mistakes

- Confusing Pages Router with App Router (different file structure)
- Using client-only APIs in server components
- Not understanding when code runs (server vs client)
- Overusing getServerSideProps when getStaticProps would work

## Best Practices

- Use App Router for new projects (Next.js 13+)
- Prefer static generation when possible
- Use API routes for backend logic
- Follow the project's routing convention

## Summary

Next.js is a React framework with routing, SSR, SSG, and API routes. File-based routing. Choose SSR or SSG per page. Zero config. Essential for production React apps.
