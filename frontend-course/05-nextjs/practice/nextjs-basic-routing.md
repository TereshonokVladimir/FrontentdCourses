# Practice: Basic Routing

## Tasks

### Task 1
Create a Next.js app with App Router. Add a root layout with a simple nav: links to Home (/), About (/about), and Contact (/contact). Create the corresponding pages. Each page shows a heading. Use the Link component. No semicolons.

### Task 2
Add a nested route: Blog at /blog. Create blog/page.js (list) and blog/[slug]/page.js (single post). For now, use mock data: an array of posts with id, title, slug. The list page links to each post. The [slug] page finds the post by slug and displays it. Handle not-found for invalid slug.

### Task 3
Create a shared layout for blog: blog/layout.js with a sidebar showing "Blog" title and a link back to /blog. The layout wraps both the list and single post pages. Add a loading.js for the blog segment that shows "Loading blog...".

### Task 4
Add a dashboard section: /dashboard with a layout that has a sidebar nav (Dashboard Home, Settings, Profile). Create placeholder pages for each. Use a consistent layout structure. The dashboard layout should have a different visual style (e.g., sidebar on left).

### Task 5
Implement a catch-all route: /docs/[[...slug]]/page.js. When slug is undefined, show the docs index. When slug is ["getting-started"], show that doc. Use mock doc content. Support nested paths: /docs/getting-started/installation. Create a simple docs structure with 3-4 pages. Add a sidebar in the docs layout that lists all docs and highlights the current one.
