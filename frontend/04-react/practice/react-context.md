# Practice: Context

## Tasks

### Task 1
Create a `ThemeContext` with default value "light". Provide it in App with state. Create a `ThemeToggle` component that uses `useContext` to read theme and a button to toggle. Create a `ThemedBox` that renders a div with background color based on theme. No semicolons.

### Task 2
Build `AuthContext`: value is `{ user, login, logout }`. `user` is null or `{ name, email }`. `login` and `logout` are functions. Create a `LoginForm` that calls login with name/email. Create `UserMenu` that shows user name and logout button when logged in, or "Log in" link when not. Use the context in both.

### Task 3
Create `CartContext`: `{ items, addItem, removeItem, clearCart }`. Items: `[{ id, name, price, quantity }]`. Add a product list with "Add to cart" buttons. Add a cart icon with item count. Create `CartDrawer` that shows items and total. Use context in product list and cart. Memoize context value with useMemo.

### Task 4
Build a `NotificationContext`: `{ notifications, addNotification, removeNotification }`. Notifications: `[{ id, message, type, duration }]`. `addNotification` adds and auto-removes after duration (default 3s). Create a `NotificationContainer` that renders toasts. Provide an `useNotify` hook that returns `notify(message, type)`. Use in a form: on success, show "Saved!" toast.

### Task 5
Create a multi-context app: ThemeContext, AuthContext, and CartContext. Build a layout: Header (theme toggle, user menu, cart icon), Main (product list or dashboard based on auth), Sidebar (optional). Ensure contexts are split so theme change doesn't re-render cart components. Use a `useAuth` hook that throws if used outside provider. Add a `ProtectedRoute` component that redirects to login if not authenticated. Compose everything in App.
