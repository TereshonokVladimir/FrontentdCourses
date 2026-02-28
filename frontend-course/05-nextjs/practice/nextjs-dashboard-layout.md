# Practice: Dashboard Layout (Mini-Project)

## Tasks

### Task 1
Create a dashboard layout: app/dashboard/layout.js. The layout has a sidebar (fixed left) with nav links: Overview (/dashboard), Users (/dashboard/users), Settings (/dashboard/settings). The main content area is to the right. Use flex or grid. Add a header bar with "Dashboard" title. No semicolons.

### Task 2
Create the dashboard pages: Overview (stats cards), Users (table or list), Settings (form sections). Use mock data for Overview: total users, revenue, etc. Users: fetch from JSONPlaceholder users. Settings: placeholder form (name, email). Each page should use the shared layout. Add active state to the sidebar link for the current route.

### Task 3
Make the sidebar collapsible: a toggle button that shows/hides the sidebar (or switches to icon-only mode). Use a Client Component for the toggle. Persist the preference in localStorage. The layout receives the state via a client wrapper or context. Ensure the main content area resizes correctly.

### Task 4
Add nested dashboard routes: /dashboard/users/[id] for user detail. Create a user detail page that fetches the user by id. Add breadcrumbs: Dashboard > Users > John Doe. The breadcrumbs should be dynamic based on the current path. Add a "Back to users" link. Consider a layout for the users section that adds a secondary nav.

### Task 5
Polish the dashboard: add a user menu in the header (avatar, dropdown with Profile, Logout). Add a global search (client component, opens a modal or dropdown). Add loading.js for dashboard and its children. Add error.js with a retry button. Ensure the layout is responsive: sidebar collapses to a hamburger menu on mobile. Add keyboard shortcut (e.g., / to focus search). Document the layout structure.
