# Practice: Todo Application (Mini-Project)

## Tasks

### Task 1
Create the HTML structure: input for new todo, add button, and a list container. Use semantic HTML (form, ul, li). Add a simple click handler that logs "Add" when the button is clicked. Prevent form submit default.

### Task 2
Implement add todo: when the user submits (click or Enter), create a new list item with the input value. Append to the list. Clear the input after add. Use textContent for safe rendering. Store todos in an array in memory.

### Task 3
Add toggle complete and delete: each todo has a checkbox (toggle) and a delete button. Checkbox toggles a "completed" class and updates the array. Delete removes the item from DOM and array. Use data attributes or array index to identify items.

### Task 4
Add filters: All, Active, Completed. Filter the displayed list based on the selected filter. Add buttons or links for each filter. Highlight the active filter. Update the list when filter changes. Use array filter to get visible todos.

### Task 5
Persist to localStorage: save todos on every change (add, toggle, delete). Load from localStorage on page load. Use JSON.stringify/parse. Handle empty or invalid localStorage. Add a "Clear completed" button. Show count of active todos. Ensure the app works after refresh.
