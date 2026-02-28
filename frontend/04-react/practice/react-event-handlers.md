# Practice: Event Handlers

## Tasks

### Task 1
Create a button that logs "Clicked" when clicked. Use a named handler function (not inline). Add a second button that logs the event object. Inspect `e.target` and `e.currentTarget`. No semicolons.

### Task 2
Build a `ClickCounter` that tracks how many times it was clicked. Display the count. Add a "Reset" button. Use `useState`. Prevent the count from going negative if you add a decrement button. Use `e.preventDefault()` if inside a form context.

### Task 3
Create a list of items. Each item has a delete button. Clicking delete removes that item from the list. Use state array. Identify items by `id`. Use a callback that receives the id. Show "No items" when empty.

### Task 4
Build a `HoverCard`: when you hover over a trigger element, show a card with content. Use `onMouseEnter` and `onMouseLeave` (or `onMouseOver`/`onMouseOut`). State: `isVisible`. Position the card near the trigger. Handle edge case: moving from trigger to card (card shouldn't disappear).

### Task 5
Create a `KeyboardShortcuts` component: listen for keydown. When user presses "s", focus a search input. When "Escape", blur it. Use `useEffect` to add/remove `keydown` listener on `document`. Use `useRef` for the input. Clean up the listener on unmount. Support "?" to show a help modal (list of shortcuts). Prevent default for handled keys.
