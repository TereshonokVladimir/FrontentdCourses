# Practice: Auth Page (Mini-Project)

## Tasks

### Task 1
Create login and register pages: app/login/page.js and app/register/page.js. Each has a form: login (email, password), register (name, email, password, confirm password). Use Server Components for the page structure. Create a Client Component for the form (needs useState for controlled inputs). Style consistently. No semicolons.

### Task 2
Implement form validation: required fields, email format, password match (register). Show inline error messages. Disable submit until valid. On submit, prevent default and log the form data. Add a "Forgot password?" link (placeholder). Use a shared FormField component for consistent styling.

### Task 3
Create a Server Action for login: validate credentials (mock: check email/password against hardcoded values). On success, set a cookie (use cookies().set("session", token)). Redirect to /dashboard. On failure, return an error message. Use useFormState or pass the action to the form. Display the error in the form.

### Task 4
Add middleware: protect /dashboard. If no session cookie, redirect to /login. The middleware checks for a "session" cookie. Add a logout Server Action that clears the cookie and redirects to /. Create a simple dashboard page that shows "Welcome" and a Logout button. The logout button uses the Server Action. Test the flow: login -> dashboard -> logout -> redirect to login when visiting dashboard.

### Task 5
Implement register: Server Action that "creates" a user (mock: store in memory or a JSON file). Redirect to login on success. Add "Remember me" checkbox that extends session (mock: different cookie expiry). Add a loading state during submit (useFormStatus or pending state). Add rate limiting (mock: reject if more than 3 attempts in 1 minute). Ensure the auth flow is secure (httpOnly cookie for session, no password in client). Document the auth flow and limitations of the mock implementation.
