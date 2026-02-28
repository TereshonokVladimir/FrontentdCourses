# Practice: API Dashboard (Mini-Project)

## Tasks

### Task 1
Fetch users from JSONPlaceholder (https://jsonplaceholder.typicode.com/users). Use `useEffect` and `fetch`. State: `users`, `loading`, `error`. Display loading spinner while fetching. On success, show user names in a list. On error, show error message. No semicolons.

### Task 2
Display users in cards: name, email, phone, company name. Create a `UserCard` component. Add a "Refresh" button that refetches. Handle loading state during refresh. Use a custom hook `useUsers` that encapsulates fetch logic. Return `{ users, loading, error, refetch }`.

### Task 3
Add search: input to filter users by name or email. Filter the displayed list as user types. Debounce the filter (300ms) to avoid excessive updates. Show "No results" when filtered list is empty. Display count: "Showing X of Y users". Preserve original data; filter a copy.

### Task 4
Add user detail view: clicking a user card shows a modal or side panel with full details (address, website, etc.). Fetch single user if needed or use data from list. Add close button. Support closing on overlay click and Escape. Show loading for detail if fetched separately. Add "Posts" section: fetch user's posts from /posts?userId=X and display titles.

### Task 5
Build a full dashboard: users grid with search, filters (by company), and detail modal. Add pagination or "Load more" (fetch from /users with _limit and _page if API supports, or paginate client-side). Add error boundary around the dashboard. Cache users: don't refetch on modal close. Add a stats section: total users, companies count. Use consistent loading/error UI. Consider React Query or SWR for caching (optional).
