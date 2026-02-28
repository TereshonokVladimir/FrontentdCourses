# Practice: Client-Server Integration

## Tasks

### Task 1
Create a page with a Server Component that fetches data and passes it to a Client Component as props. The Client Component displays the data and has a "Refresh" button that calls router.refresh(). Verify that clicking Refresh re-fetches on the server and updates the UI. No semicolons.

### Task 2
Build a search page: Server Component receives searchParams. It fetches filtered data based on the query. A Client Component provides the search input and uses router.push with the new query. Use useRouter and useSearchParams. Ensure the URL updates and the Server Component re-renders with new data. Avoid full page reload.

### Task 3
Create a form that uses a Server Action. The form is in a Client Component (for controlled inputs and validation). Pass the Server Action as a prop or import it. On submit, call the action. Use useFormStatus to show a loading state on the submit button. Use useFormState to display validation errors returned from the action.

### Task 4
Implement a "Add to cart" flow: a Server Component fetches product data. A Client Component has the Add button. Clicking it calls a Server Action that updates the cart (cookie or server state). Use router.refresh() after the action to update any Server Components that display cart count. The cart count might be in a layout—ensure it updates. Consider using a client-side cache (React Query) for the cart if needed.

### Task 5
Build a full client-server integration: a product list (Server) with search (Client, updates URL), filters (Client, updates URL), and add to cart (Client, Server Action). The layout shows cart count (needs to update after add—use refresh or a client context). Add optimistic updates: show the item in cart immediately, then confirm with server. Handle errors from the Server Action. Document the data flow: Server fetches, Client interacts, Server Action mutates, refresh updates.
