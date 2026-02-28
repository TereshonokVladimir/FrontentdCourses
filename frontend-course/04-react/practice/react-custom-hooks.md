# Practice: Custom Hooks

## Tasks

### Task 1
Create `useToggle(initialValue)`: returns `[value, toggle]`. Toggle flips the boolean. Use in a component to show/hide a section. No semicolons.

### Task 2
Build `useLocalStorage(key, initialValue)`: syncs state with localStorage. On mount, read from localStorage (handle JSON parse error). On state change, write to localStorage. Return `[value, setValue]` like useState. Use for a "theme" preference (light/dark).

### Task 3
Create `useDebounce(value, delay)`: returns debounced value. When `value` changes, wait `delay` ms before updating the returned value. Use for search input: display debounced query. Clean up timeout on unmount or when value changes.

### Task 4
Build `useFetch(url)`: returns `{ data, loading, error, refetch }`. Fetch on mount and when url changes. Use AbortController for cleanup. Handle 404 and network errors. Support optional `options` (method, body). Don't set state if component unmounted (cancelled flag).

### Task 5
Create `useForm(initialValues, validate)`: returns `{ values, errors, handleChange, handleSubmit, reset }`. `handleChange` updates the field. `validate` is a function `(values) => ({ field: "error" })`. `handleSubmit` runs validate, and if valid, calls `onSubmit(values)`. Use for a multi-field form. Support nested fields (e.g., `address.city`). Add `touched` state to show errors only after blur (optional).
