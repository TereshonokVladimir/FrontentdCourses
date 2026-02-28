# Practice: API Data Viewer (Mini-Project)

## Tasks

### Task 1
Fetch data from a public API (e.g., JSONPlaceholder: https://jsonplaceholder.typicode.com/users). Use fetch and async/await. Log the response. Parse JSON. Handle errors (try/catch, check res.ok). Display raw JSON in a pre tag for now.

### Task 2
Display users in a table or card grid: name, email, phone. Create DOM elements for each user. Use a template or loop to build the list. Add a loading state (show "Loading..." while fetching). Hide loading when data arrives.

### Task 3
Add error handling: show user-friendly message if fetch fails (network error, 404). Add a "Retry" button. Use a state variable or function to refetch. Handle empty response. Show "No users" if array is empty.

### Task 4
Add filtering: input to search by name or email. Filter the displayed list as the user types. Debounce the filter (300ms) to avoid excessive updates. Update the count of displayed items. Preserve original data; filter a copy or derived array.

### Task 5
Add pagination or "Load more": show 10 items initially, button to load next 10. Or fetch from a paginated API (e.g., JSONPlaceholder posts with _page). Track current page. Disable "Load more" when no more data. Add a "Refresh" button to refetch. Consider caching: don't refetch if already loaded (unless refresh).
