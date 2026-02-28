# Practice: Local Storage Notes App (Mini-Project)

## Tasks

### Task 1
Create the structure: list of notes (sidebar or main area), area to view/edit selected note. Each note has title and content. Store notes as array of objects in a variable. Render the list. Clicking a note shows its content. Add a "New note" button that creates an empty note.

### Task 2
Implement CRUD: Create (new note), Read (display), Update (edit title and content, save on blur or debounced input). Delete (button to remove note). Update the in-memory array. Re-render the list when data changes. Select first note by default.

### Task 3
Persist to localStorage: save the entire notes array on every change. Load from localStorage on init. Use a key like "notes-app-data". Handle parse errors (invalid JSON). Merge or replace on load. Ensure no data loss on refresh.

### Task 4
Add timestamps: each note has createdAt and updatedAt. Display "Last edited X minutes ago" or similar. Sort notes by updatedAt (newest first). Format dates nicely. Update updatedAt when content changes.

### Task 5
Polish the app: add a search/filter for notes (by title or content). Add confirmation before delete. Add keyboard shortcut (e.g., Ctrl+S to save, Ctrl+N for new). Handle edge cases: empty title, very long content. Add a simple markdown preview (optional) or plain text. Ensure the list scrolls if many notes. Consider a max number of notes or warning when storage is full.
