# Practice: Data Fetching

## Tasks

### Task 1
Fetch posts from JSONPlaceholder (https://jsonplaceholder.typicode.com/posts). Use useEffect with empty deps. State: posts, loading, error. Display titles in a list. Show "Loading..." while fetching. Handle error (try/catch, check res.ok). No semicolons.

### Task 2
Create a `UserProfile` component that fetches user by id (prop). Use useEffect with `[userId]` deps. Fetch from `https://jsonplaceholder.typicode.com/users/${userId}`. Add cleanup: use a `cancelled` flag so you don't setState if component unmounted or userId changed. Show loading and error states.

### Task 3
Build a `PostList` that fetches posts. Add "Load more" button: initially show 10, then fetch next 10. Use `_page` and `_limit` with JSONPlaceholder. State: posts (accumulated), page, loading, hasMore. Fetch when page changes. Append new posts. Disable button when loading or !hasMore.

### Task 4
Create a `useFetch` hook: `useFetch(url)` returns `{ data, loading, error, refetch }`. Use AbortController: in cleanup, call `controller.abort()`. In fetch, pass `signal: controller.signal`. Handle abort error (don't set error state). Use the hook in a component that fetches when url changes (e.g., user selects different resource).

### Task 5
Build a data fetching layer: useFetch hook with AbortController, cancelled flag, and refetch. Create a `Resource` component: `resource="users"` or `resource="posts"`, `id` optional. Fetches the right URL. Supports loading, error, empty states. Add a cache: store fetched data in a Map (url -> data). If url is in cache, return cached data immediately, optionally refetch in background. Invalidate cache on refetch. Use for a detail view that fetches when id changes—avoid refetch if same id.
