# TDD & BDD

## Concept

**TDD (Test-Driven Development)** is a workflow where you write tests before implementation: Red (fail) → Green (pass) → Refactor. **BDD (Behavior-Driven Development)** emphasizes behavior and user stories, often expressed in Given-When-Then format. Both shift testing from an afterthought to a design driver.

## Why It Matters

TDD/BDD produce testable, well-designed code. Writing tests first forces you to think about interfaces and edge cases before implementation. BDD aligns tests with business language, making them readable by non-developers and useful as living documentation.

## Key Concepts

- TDD: Test first, then implement, then refactor
- BDD: Describe behavior in natural language (Given/When/Then)
- Red-Green-Refactor cycle in TDD
- BDD tools: Cucumber, Jest with describe/it (lightweight BDD)
- Tests as specification and documentation

## Code Example

```typescript
// TDD: test first
describe('calculateDiscount', () => {
  it('returns 0 for non-members', () => {
    expect(calculateDiscount(100, false)).toBe(0)
  })
  it('returns 10% for members', () => {
    expect(calculateDiscount(100, true)).toBe(10)
  })
})
// Then implement calculateDiscount to pass

// BDD-style with Given/When/Then in describe/it
describe('Discount calculation', () => {
  it('Given a non-member, When cart total is 100, Then discount is 0', () => {
    expect(calculateDiscount(100, false)).toBe(0)
  })
})
```

## Under the Hood

TDD is a workflow, not a tool. BDD can use Cucumber (Gherkin syntax parsed into step definitions) or plain Jest with descriptive strings. The key is the order of work: specify behavior first, then implement.

## Common Mistakes

- Writing tests after code and calling it TDD
- Over-specifying in BDD (testing implementation)
- Skipping refactor step in TDD
- BDD scenarios that are too technical for stakeholders
- Treating TDD as dogma when exploratory coding is needed

## Best Practices

- Start with the simplest failing test
- Keep tests focused on one behavior
- Use BDD language for acceptance criteria
- Refactor both production and test code
- Use TDD for bug fixes: write failing test that reproduces bug first

## Summary

TDD drives design through test-first development; BDD expresses behavior in business language. Both improve testability and design. Use TDD for logic, BDD for acceptance criteria and cross-role communication.
