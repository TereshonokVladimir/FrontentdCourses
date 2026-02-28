# Practice: Caching Strategies

## Tasks

### Task 1
Create a page that fetches data with default caching. Fetch from JSONPlaceholder /posts. Add a timestamp to the response to see when it was fetched. Build the app and run it. Refresh the page—verify the timestamp doesn't change (cached). No semicolons.

### Task 2
Create two pages that fetch the same URL. Use fetch with default cache. Navigate between them. Verify the fetch is deduplicated (same request, single network call). Add fetch with cache: "no-store" to a third page—verify it always fetches fresh. Add revalidate: 60 to a fetch—verify it revalidates after 60 seconds (use a timestamp display).

### Task 3
Implement on-demand revalidation. Create an API route POST /api/revalidate?path=/blog that calls revalidatePath("/blog"). Create a "Revalidate" button on the blog page that fetches this API. After clicking, refresh the blog—content should be fresh. Use a secret token in the request for security (check in the API route). Document the flow.

### Task 4
Use revalidateTag: fetch with next: { tags: ["posts"] }. Create an API route that calls revalidateTag("posts") after a "create post" action. When a new post is created, the posts list should update on next visit. Implement a simple flow: form to add post, Server Action that writes to file and revalidates. Verify the tag-based revalidation works.

### Task 5
Build a hybrid caching strategy: static homepage (force-static), dynamic dashboard (force-dynamic), and blog with time-based revalidation (60s). Add a "Last updated" display to each. Create a revalidation API for the blog. Document when to use each strategy. Add a simple admin action (button) to trigger revalidation. Consider caching headers (Cache-Control) for API routes. Summarize the caching layers and when each applies.
