# Practice: Conditional Rendering and Lists

## Tasks

### Task 1
Create a component that shows "Welcome" if a boolean prop `isLoggedIn` is true, otherwise "Please log in". Use a ternary. Add a button that toggles the state (lift state to parent or use local state). No semicolons.

### Task 2
Build a `MessageList` component that accepts an array of `messages` (each with `id`, `text`). Map over the array and render each in a list item. Use `key={message.id}`. If the array is empty, show "No messages". Use early return for empty case.

### Task 3
Create a `SearchResults` component: an input for search query and a list of items. Filter the items by the query (case-insensitive). Show "No results" when filtered list is empty. Show "Type to search" when query is empty. Items: array of `{ id, name }`.

### Task 4
Build a `TabPanel` component: tabs (e.g., "Profile", "Settings", "Security") and content for each. State holds active tab index. Render only the active tab's content. Highlight the active tab. Use an array of `{ id, label, content }` for tab config.

### Task 5
Create a `DataTable` component: accepts `columns` (array of `{ key, label }`) and `rows` (array of objects). Render a table with header from columns and body from rows. Support optional `loading` and `error` props: show spinner when loading, error message when error. Handle empty rows: "No data". Add sort by column (toggle ascending/descending) when column header is clicked.
