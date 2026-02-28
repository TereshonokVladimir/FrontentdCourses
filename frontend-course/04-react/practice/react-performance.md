# Practice: Performance

## Tasks

### Task 1
Create a `ExpensiveList` that renders 100 items. Each item does a fake expensive computation (e.g., `Array(1000).fill(0).reduce((a, b) => a + b)`). Wrap each item in `React.memo`. Add a parent with a counter; verify that changing the counter doesn't re-render list items when their props are stable. No semicolons.

### Task 2
Build a `FilteredList` with a search input and a list. The list is filtered by search. Use `useMemo` to memoize the filtered list: `const filtered = useMemo(() => items.filter(...), [items, query])`. Add a large dataset (500+ items). Verify that filtering doesn't re-run when unrelated parent state changes.

### Task 3
Create a `Parent` that passes an `onClick` callback to a memoized `Child`. Without useCallback, Child re-renders when Parent re-renders (e.g., from a counter). Add `useCallback` to the handler: `const handleClick = useCallback(() => {...}, [])`. Verify Child no longer re-renders. Add a case where the callback needs a value from Parent state—use it in the dependency array.

### Task 4
Build a virtualized list: render only visible items (e.g., 20 at a time). Use `useRef` for container, measure scroll position and height. Compute which items are in view. Use `useMemo` for the slice of items to render. Add proper key. Handle scroll smoothly. Optional: use a library like react-window as reference.

### Task 5
Optimize a full page: product list (100 items), search, filters, cart. Use React.memo for ProductCard. Use useMemo for filtered/sorted list. Use useCallback for handlers passed to children. Add React DevTools Profiler and record a session. Identify unnecessary re-renders. Add a "Slow down" toggle that simulates slow render (e.g., busy loop) to see the impact. Document which optimizations helped and why.
