# Practice: Blog with Routing (Mini-Project)

## Tasks

### Task 1
Create a blog structure: app/blog/page.js (list), app/blog/[slug]/page.js (post). Fetch posts from JSONPlaceholder (https://jsonplaceholder.typicode.com/posts). The list shows title and excerpt (body truncated). Each links to /blog/[id] (use id as slug for simplicity). Use async Server Component. No semicolons.

### Task 2
Implement the single post page. Fetch the post by id from the API. Fetch comments for the post (/posts/[id]/comments). Display post title, body, and comments. Use generateStaticParams to pre-render the first 10 posts. Add metadata: generateMetadata for title and description from post. Add a loading.js for the [slug] segment.

### Task 3
Add a blog layout: sidebar with "All Posts" link and a search input (client component). The search filters the list on the client (or use searchParams for server-side filter). Add a "Categories" section in the sidebar (mock categories). Style the blog consistently. Add a back link on the single post page.

### Task 4
Implement pagination: show 10 posts per page. Use searchParams: ?page=1, ?page=2. The list page reads the page param and fetches accordingly. JSONPlaceholder supports _page and _limit. Add Prev/Next buttons. Show "Page X of Y". Use generateMetadata with searchParams for dynamic title. Add error.js for the blog segment.

### Task 5
Polish the blog: metadata for SEO (title template, Open Graph), not-found.js for 404, loading skeletons for list and post. Add a "Related posts" section on the single post (fetch 3 random other posts). Consider caching: set revalidate on fetch. Add a sitemap or document the structure. Ensure mobile-responsive layout. Add a footer with links.
