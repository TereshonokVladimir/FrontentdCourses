# Testing Basics

## Concept

React testing typically uses React Testing Library (RTL) and Jest. Test behavior, not implementation. Query by role, label, or text. Simulate user interactions. Avoid testing internal state—test what the user sees and can do. Mock external dependencies (fetch, modules).

## Why It Matters

Tests catch regressions and document behavior. RTL encourages accessible, user-centric tests. Knowing how to render, query, and interact prevents brittle tests. Testing is part of sustainable React development.

## Key Concepts

- `render(<Component />)` from RTL
- Queries: `getByRole`, `getByLabelText`, `getByText` (prefer role)
- `fireEvent` or `userEvent` for interactions
- `waitFor`, `findBy` for async
- Mock: `jest.fn()`, `jest.mock()`, MSW for API

## Code Example

```jsx
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./Button"

test("button calls onClick when clicked", async () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click</Button>)

  await userEvent.click(screen.getByRole("button", { name: /click/i }))

  expect(handleClick).toHaveBeenCalledTimes(1)
})

test("shows loading state", () => {
  render(<UserList loading />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})
```

## Under the Hood

RTL uses ReactDOM to render into a container. It wraps with providers (optional). Queries search the DOM. userEvent simulates real user actions (clicks, typing) with proper events. Jest runs tests and provides assertions.

## Common Mistakes

- Testing implementation (state, internal functions)
- Using getByTestId when role/label would work
- Not awaiting async updates (use waitFor, findBy)
- Over-mocking (test real behavior when possible)

## Best Practices

- Query by role, label, or text (accessible)
- Test user flows, not implementation
- Use userEvent over fireEvent (more realistic)
- Mock at boundaries (API, not components)

## Summary

Use React Testing Library. Query by role, label, text. Test behavior. Use userEvent. Await async. Mock external deps. Avoid implementation details.
