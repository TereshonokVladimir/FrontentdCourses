# Practice: Security Scanning

## Tasks

### Task 1
Add `npm audit` to the CI pipeline. Fail the build if high or critical vulnerabilities are found. Use `npm audit --audit-level=high` or configure the exit code. Add a step to generate an audit report. Document how to fix vulnerabilities (update dependencies, use overrides if necessary).

### Task 2
Integrate a dependency scanning tool (Snyk, Dependabot, or Renovate) into the project. Configure it to run on every PR and create PRs for dependency updates. Add a security policy file (e.g., `SECURITY.md`) describing how to report vulnerabilities. Test that the scanner finds a known vulnerable dependency.

### Task 3
Add container image scanning. Use Trivy or Clair to scan the Docker image in CI before pushing to the registry. Fail the build if critical CVEs are found. Configure the scanner to ignore specific CVEs with justification (document in a file). Add the scan results to the PR as a comment.

### Task 4
Implement secrets scanning: use GitGuardian, TruffleHog, or grep-based checks to detect secrets in code. Add a pre-commit hook and CI step. Configure false positive exclusions. Add a scan of the Git history for any commits that may have introduced secrets (document remediation steps).

### Task 5
Build a comprehensive security scanning pipeline: SAST (static analysis, e.g., Semgrep, SonarQube), dependency scanning, container scanning, secrets scanning, and infrastructure scanning (e.g., Checkov for Terraform). Create a security dashboard or report that aggregates findings. Implement a policy: block deployment on critical findings, require review for high. Document the security review process and SLA for fixing vulnerabilities.
