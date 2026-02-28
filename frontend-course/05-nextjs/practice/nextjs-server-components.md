# Practice: Server Components

## Tasks

### Task 1
Create a page that fetches data on the server. Use async function for the page. Fetch from JSONPlaceholder /posts. Display the first 5 posts (title, body). No "use client". Verify the data is fetched on the server (check page source for content). No semicolons.

### Task 2
Create a reusable Server Component: PostCard that receives a post and displays it. Use it in the posts list. Create another Server Component: UserCard that fetches a single user by id and displays name, email. Use it in a page that shows 3 users (ids 1, 2, 3). Fetch in parallel with Promise.all.

### Task 3
Build a page with multiple data sources: fetch posts and users in parallel. Display posts in one section, users in another. Use React's cache() to deduplicate: create a getPost(id) function wrapped in cache(), call it from two different components with the same id—verify single fetch. Add a loading.js for the page.

### Task 4
Create a layout that fetches site config (e.g., nav links, site name). Pass it down or use a shared fetch. The layout wraps multiple pages. Ensure the config is fetched once per request (cache or layout-level fetch). Add a Client Component in the layout for a theme toggle—the toggle is client, the config is server. Show how Server and Client compose.

### Task 5
Build a data-heavy page: fetch posts with comments (nested). For each post, fetch its comments. Use Promise.all to avoid waterfall. Consider creating a getPostWithComments(id) cached function. Add generateMetadata that fetches the post for dynamic meta. Add error boundary (error.js) for the page. Demonstrate streaming: wrap a slow component in Suspense with fallback. Document when to use Server vs Client.
