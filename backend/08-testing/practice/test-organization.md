# Practice: Test Organization

## Tasks

### Task 1
Reorganize tests in a project: move unit tests to colocate with source (`src/services/user-service.ts` → `user-service.test.ts`). Ensure Jest still discovers them. Update any imports. Run the full suite to verify.

### Task 2
Create a `test/` directory structure: `test/unit/`, `test/integration/`, `test/e2e/`. Move tests accordingly. Configure Jest to run unit by default and integration with `--config=jest.integration.js`. Add npm scripts: `test`, `test:unit`, `test:integration`.

### Task 3
Split a large test file (100+ lines) into smaller files: one per module or per major feature. Use shared setup (e.g., `test/setup/user-tests.ts`) for common fixtures. Ensure no duplication and tests still pass.

### Task 4
Establish a naming convention: `*.test.ts` for unit, `*.integration.test.ts` for integration. Document in README. Add an ESLint rule or script that warns if a test file is in the wrong directory or has the wrong suffix. Apply to the project.

### Task 5
Create a test organization doc: where to put unit vs integration vs e2e, naming rules, how to share fixtures and setup, and when to use `describe` nesting. Refactor an existing suite to follow it. Get the suite to a state where a new developer can add tests without asking where they go.
