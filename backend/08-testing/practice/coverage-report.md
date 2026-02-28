# Practice: Coverage Report

## Tasks

### Task 1
Run Jest with coverage on an existing project. Generate `lcov` and `text` reporters. Inspect the HTML report. Identify one file with low coverage and add a test to improve it.

### Task 2
Configure coverage to exclude: `**/*.test.ts`, `**/migrations/**`, `**/config/**`. Add a `coveragePathIgnorePatterns` or use `collectCoverageFrom` with negations. Verify excluded files don't appear in the report.

### Task 3
Set different coverage thresholds per directory: `src/services/**` must have 90% line coverage, `src/utils/**` 80%, `src/api/**` 70%. Use `coverageThreshold` with globs if supported, or split configs. Ensure CI fails when thresholds are not met.

### Task 4
Integrate coverage with a CI workflow. Upload coverage to Codecov or Coveralls (or a simple artifact). Add a badge or check that fails the build if coverage drops. Document how to view the report.

### Task 5
Create a script that compares current coverage to the previous run (e.g., from a stored baseline). Fail if coverage decreases by more than 1%. Use the coverage JSON output. Integrate into a pre-commit or CI step.
