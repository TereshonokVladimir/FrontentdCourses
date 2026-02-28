# Practice: Server Actions

## Tasks

### Task 1
Create a Server Action: add "use server" to a file. Export an async function addTask(formData) that gets "title" from formData, logs it, and returns. Create a form that uses action={addTask}. No client-side JS needed for submit. Verify the action runs on the server. No semicolons.

### Task 2
Build a task form with Server Action: the action receives formData, creates a task (in-memory array), calls revalidatePath("/tasks"), and redirects to /tasks. The tasks page displays the list. Use a Server Component for the list. Add validation: title required, 1-200 chars. Return an error object if invalid and display it in the form (use useFormState).

### Task 3
Implement edit and delete with Server Actions. Create editTask(id, formData) and deleteTask(id). The tasks page has Edit and Delete buttons. Edit opens a form (inline or modal). Delete confirms and then calls the action. Use revalidatePath after each. Handle not-found for invalid id. Use startTransition for optimistic UI (optional).

### Task 4
Add a contact form with Server Action: name, email, message. Validate all fields. On success, "send" the message (log or mock API call). Use cookies().set to set a "form_success" flash message, then redirect. On the target page, read the cookie, show a success toast, and clear the cookie. Handle rate limiting: reject if same IP submits within 60 seconds (mock with a simple store).

### Task 5
Build a full CRUD with Server Actions: tasks with create, read, update, delete. Use file persistence (tasks.json). Add optimistic updates: use useOptimistic to show immediate UI change before server confirms. Handle errors: if action throws, display error. Add a "pending" state during submission (useFormStatus). Ensure no JavaScript is required for basic form submit (progressive enhancement). Document the Server Action patterns used.
