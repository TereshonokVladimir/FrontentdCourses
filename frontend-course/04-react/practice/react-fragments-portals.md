# Practice: Fragments and Portals

## Tasks

### Task 1
Create a component that returns multiple elements without a wrapper. Use `<>...</>` Fragment. Render two sibling divs. Verify in DevTools that no extra wrapper exists. Use a table: `tbody` with `tr` children—wrap each row's cells in Fragment if needed. No semicolons.

### Task 2
Build a list where each item returns multiple elements (e.g., a row with a label and value). Use `React.Fragment` with `key` (Fragment shorthand can't have key). Map over data and return `<React.Fragment key={item.id}>...</React.Fragment>`.

### Task 3
Create a `Tooltip` component: when hovering over a trigger, show a tooltip. Use `createPortal` to render the tooltip into document.body. Position it near the trigger (use ref to get trigger's getBoundingClientRect). Handle scroll—reposition or hide. Style with z-index so it appears above other content.

### Task 4
Build a `Modal` using portal. Render overlay + content into document.body. Add overlay click to close. Add Escape to close. Ensure the modal is not clipped by parent overflow. Add focus trap: focus first focusable element when open. Style overlay to cover viewport.

### Task 5
Create a `Dropdown` that uses a portal for the menu. The menu can overflow its parent (e.g., in a scrollable container). Position the menu below the trigger. Handle edge cases: menu near viewport bottom (flip up), near right edge (align right). Use portal so the menu isn't clipped. Add click-outside to close. Support keyboard: Arrow keys to navigate, Enter to select, Escape to close. Compose with a custom hook `useDropdown` that returns `{ isOpen, open, close, toggle }`.
