# Practice: GitHub Actions Pipeline

## Tasks

### Task 1
Create a GitHub Actions workflow that runs on push and pull request to `main`. Add a job that checks out the repo, sets up Node.js 20, runs `npm ci`, and executes `npm test`. Ensure the workflow fails if tests fail.

### Task 2
Add a lint job that runs `npm run lint` (or ESLint directly). Use `actions/cache@v4` to cache `node_modules` with key based on `package-lock.json` hash. Run lint and test in parallel. Add a status badge to the README.

### Task 3
Add a build job that produces a build artifact. Use `actions/upload-artifact` to store the build output. Add a matrix strategy to test against Node.js 18 and 20. Only run the full pipeline on `main` and `develop` branches.

### Task 4
Implement a deploy job that runs only on push to `main` after tests pass. Use GitHub Secrets for deployment credentials (e.g., `DEPLOY_KEY` or `AWS_ACCESS_KEY_ID`). Deploy to a staging environment. Add manual approval using GitHub Environments (`environment: staging` with required reviewers).

### Task 5
Build a complete CI/CD pipeline: lint, test (with coverage upload to Codecov or similar), build, security scan (npm audit, Snyk or Dependabot), Docker build and push to a registry, and deploy to production with approval gate. Use reusable workflows or composite actions to reduce duplication. Add Slack or email notification on failure.
