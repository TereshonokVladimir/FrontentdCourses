# Practice: Async Exercises

## Tasks

### Task 1
Use fetch to get data from JSONPlaceholder /posts/1. Log the title. Use async/await. Handle errors with try/catch. Check res.ok before parsing.

### Task 2
Fetch 3 posts in parallel: ids 1, 2, 3. Use Promise.all. Display the titles in a list. Handle the case when one request fails (Promise.all rejects). Consider Promise.allSettled if you want partial results.

### Task 3
Create a function that retries a fetch: on failure, retry up to 3 times with a 1s delay between retries. Use a loop or recursion. Resolve with data or reject after all retries fail.

### Task 4
Implement a simple cache: wrap fetch so that repeated requests to the same URL return cached data (in memory). Cache for 60 seconds. Invalidate or use a timestamp to expire. Export or use a getCachedFetch function.

### Task 5
Build a typeahead: input that fetches suggestions from an API as the user types. Debounce (300ms). Cancel previous request if a new one starts (AbortController). Display suggestions in a dropdown. Handle loading, error, empty states. Click or Enter to select. Clear suggestions when input is cleared.
