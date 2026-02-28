# Practice: Jest Setup

## Tasks

### Task 1
Create a `jest.config.js` for a Node/TypeScript project. Configure: `testEnvironment: 'node'`, `roots: ['src']`, `testMatch: ['**/*.test.ts']`, and `moduleFileExtensions`. Ensure `npx jest` runs a sample test.

### Task 2
Add a `setupFilesAfterEnv` that runs `jest.setTimeout(10000)` for integration tests. Create a `jest.config.unit.js` and `jest.config.integration.js` that extend a base config. Unit uses 5s timeout, integration uses 30s.

### Task 3
Configure path aliases: `@/services` → `src/services`, `@/utils` → `src/utils`. Add `moduleNameMapper` in Jest and ensure `tsconfig` paths align. Write a test that imports using `@/services/user-service`.

### Task 4
Set up coverage: `collectCoverageFrom: ['src/**/*.ts']`, exclude `**/*.test.ts` and `**/index.ts`. Add `coverageThreshold`: 80% for branches, functions, lines, statements. Verify `npm run test:coverage` fails if below threshold.

### Task 5
Create a global setup file that starts a test database (e.g., via Testcontainers or a script) and sets `process.env.DATABASE_URL`. Add global teardown to stop it. Configure Jest to use these. Ensure integration tests run with the real DB.
