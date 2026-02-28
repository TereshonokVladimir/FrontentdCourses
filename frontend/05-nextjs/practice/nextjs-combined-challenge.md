# Practice: Combined Challenge (Mini-Project)

## Tasks

### Task 1
Build a product catalog: fetch products from JSONPlaceholder (posts as products). Create a list page with search (searchParams). Create a product detail page with dynamic route. Use Server Components. Add metadata. Add loading and error states. No semicolons.

### Task 2
Add a cart: Client Component for Add to Cart button. Cart state in cookies (Server Action to add). Create a cart page that reads cart from cookies and displays items. Use a layout that shows cart count in the header—it should update after adding (router.refresh or client state). Implement remove from cart. Persist cart across sessions.

### Task 3
Add authentication: login page with Server Action. Set session cookie on success. Middleware protects /cart and /checkout. Create a checkout page (protected) that shows cart summary. Add a logout Server Action. Create a user menu in the header (when logged in) with logout. Mock auth: any email/password works.

### Task 4
Implement checkout flow: checkout page with form (shipping address). Server Action processes the order (mock: save to file or log). Clear cart on success. Redirect to order confirmation page with order id. Add order history page (protected) that lists past orders (mock data keyed by session). Add metadata for all main pages. Add not-found and error boundaries.

### Task 5
Polish the full app: product catalog with search, product detail, cart with persistence, auth with middleware protection, checkout with order confirmation. Add a dashboard layout for /account (order history, profile). Ensure responsive design. Add sitemap and robots.txt. Optimize images with next/image. Add loading skeletons. Document the architecture: routing, data flow, auth, cart. Run Lighthouse and fix performance issues. Summarize the patterns used and how they fit together.
