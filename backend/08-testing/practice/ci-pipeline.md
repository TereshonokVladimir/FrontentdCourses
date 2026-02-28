# Practice: CI Pipeline

## Tasks

### Task 1
Create a GitHub Actions workflow that runs `npm ci` and `npm test` on push and pull request. Use Node 20. Cache `node_modules` with `actions/cache`. Ensure the job fails if tests fail.

### Task 2
Split the CI into two jobs: `unit` (fast, runs on every push) and `integration` (slower, runs on PR). Integration needs a test database. Use a service container (e.g., `postgres`) or `TEST_DATABASE_URL` secret. Run jobs in parallel.

### Task 3
Add a coverage job: run tests with coverage, upload to Codecov (or store as artifact). Add a coverage check that fails if coverage drops below the threshold. Use `npm run test:coverage`. Publish the report as a CI artifact.

### Task 4
Implement a matrix build: run tests on Node 18, 20, and 22. Ensure all pass. Add a job that runs E2E tests only on `main` branch (or when a label is added). E2E job starts the app, runs E2E suite, then stops.

### Task 5
Build a full CI pipeline: lint → unit → integration → E2E (on merge to main). Add status checks that block merge until all pass. Cache aggressively. Use concurrency to cancel outdated runs. Document the pipeline, required secrets, and how to debug failures.
