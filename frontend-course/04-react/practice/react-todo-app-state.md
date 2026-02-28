# Practice: Todo App with State (Mini-Project)

## Tasks

### Task 1
Create the structure: input for new todo, add button, and list container. Use state for `todos` array (each `{ id, text, completed }`). Add todo on button click or Enter. Clear input after add. Generate id with `crypto.randomUUID()` or `Date.now()`. No semicolons.

### Task 2
Add toggle complete: each todo has a checkbox. Clicking it toggles `completed`. Update the array immutably. Style completed todos (strikethrough, muted). Add delete button per todo. Delete removes from array. Use filter or filter + index to update.

### Task 3
Add filters: All, Active, Completed. State holds `filter` ("all" | "active" | "completed"). Filter the displayed list. Add filter buttons. Highlight active filter. Show count of active todos. Add "Clear completed" button that removes all completed items.

### Task 4
Persist to localStorage: save todos on every change (add, toggle, delete, clear completed). Load from localStorage on mount. Use `JSON.stringify`/`parse`. Handle empty or invalid JSON. Use `useEffect` with todos as dependency. Lazy init useState with function that reads from localStorage.

### Task 5
Add edit: double-click todo to edit inline. State holds `editingId`. When editing, show input instead of text. Save on Enter or blur. Cancel on Escape. Debounce or immediate save. Ensure no empty todos after edit. Add keyboard shortcut: focus the new-todo input when "/" is pressed (and not in an input). Polish: loading state on init, empty state message.
