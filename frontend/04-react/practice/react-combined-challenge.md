# Practice: Combined Challenge (Mini-Project)

## Tasks

### Task 1
Build a product catalog: fetch products from JSONPlaceholder (use /posts as products with id, title, body). Display in a grid of cards. Each card shows title and excerpt. Add a search input that filters by title. Use useState for products and search, useEffect for fetch. Show loading and empty states. No semicolons.

### Task 2
Add product detail: clicking a card opens a modal with full product details. Fetch comments for the product (/posts/:id/comments). Show product body and comments list. Modal has close button and overlay click to close. Use createPortal for modal. State: selectedProductId. Fetch comments when modal opens. Handle loading for comments.

### Task 3
Add cart: "Add to cart" on each card. Cart is in Context. Cart icon in header shows count. Clicking icon opens a cart drawer (slide-in panel). Cart lists items with quantity, remove button, and total. Persist cart to localStorage. Load on mount. Use custom hook useCart with add, remove, clear. Memoize context value.

### Task 4
Add theme toggle: light/dark. Use ThemeContext and CSS variables for colors. Persist theme to localStorage. Apply to entire app. Ensure modal and cart drawer respect theme. Add a settings panel (in modal or sidebar) with theme toggle and "Clear cart" option.

### Task 5
Polish the full app: product catalog with search, product detail modal with comments, cart with persistence, theme with persistence. Add error boundary around main content. Add a "Checkout" flow: cart drawer has Checkout button that shows a simple form (name, email) and "Place order" that shows success message and clears cart. Add loading skeletons for product cards. Ensure keyboard navigation (Escape closes modals, Tab order). Add basic tests (optional): render product list, add to cart, open modal. Document the architecture and data flow.
