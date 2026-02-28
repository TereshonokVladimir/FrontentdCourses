# Test Naming

## Concept

Test naming conventions make tests readable and failures actionable. A good test name describes the scenario and expected outcome. When a test fails, the name should tell you what broke without reading the code. Consistent patterns improve scanability and maintenance.

## Why It Matters

Poor names ("test1", "works") provide no context when tests fail. Good names ("returns 404 when user does not exist") document behavior and speed up debugging. Naming is low-effort, high-impact for test suite maintainability.

## Key Concepts

- Describe the scenario and expected result
- Use consistent format: "does X when Y" or "returns X for Y"
- Be specific; avoid vague terms ("works", "correct")
- Match project/team conventions
- Consider BDD style for acceptance tests

## Code Example

```typescript
// Weak
it('works', () => {})
it('test user', () => {})

// Strong
it('returns 201 when user is created successfully', () => {})
it('returns 400 when email is invalid', () => {})
it('returns 409 when email already exists', () => {})
it('throws when database connection fails', () => {})

// BDD style
describe('User creation', () => {
  it('Given valid email, When creating user, Then returns 201 with user', () => {})
  it('Given duplicate email, When creating user, Then returns 409', () => {})
})
```

## Under the Hood

Test names are just strings passed to `it()` or `test()`. They appear in reporters, CI output, and IDE test explorers. No tooling enforces naming; it's a team convention. Some teams use lint rules to reject patterns like "test" or "works".

## Common Mistakes

- Generic names that don't describe the case
- Names that describe implementation, not behavior
- Inconsistent format across the suite
- Too long (hard to scan) or too short (no context)
- Duplicate names in nested describes

## Best Practices

- Use "should" or "returns/throws" + condition
- Include input state when relevant ("when email is missing")
- Keep under ~80 chars for readability
- Use describe for grouping; it for the specific case
- Align with team style guide

## Summary

Test names should describe the scenario and expected outcome. Use consistent patterns like "returns X when Y". Good names make failures self-explanatory and tests serve as documentation. Invest in clear, specific naming.
