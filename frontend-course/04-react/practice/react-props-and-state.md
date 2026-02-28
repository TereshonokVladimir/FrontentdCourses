# Practice: Props and State

## Tasks

### Task 1
Create a `Counter` component with local state (useState) for count, starting at 0. Render the count and a button that increments it. Use a functional update: `setCount(c => c + 1)`. No semicolons.

### Task 2
Build a `Toggle` component: a button that switches between "On" and "Off" (boolean state). Display the current state. Add a second button "Reset" that sets it back to false. Use descriptive state variable name (e.g., `isOn`).

### Task 3
Create a `InputDisplay` component: an input and a paragraph below that shows the input value in real time. Use controlled input (value + onChange). State holds the input value. Show character count below the value.

### Task 4
Build a `ColorPicker`: three number inputs (0–255) for R, G, B. State holds `{ r, g, b }`. Display a div with background color `rgb(r, g, b)` and the hex value below. Use a single state object. Update on change.

### Task 5
Create a `FormPreview` component: inputs for first name, last name, and email. State holds the form data. Below the form, show a preview card with the entered values. Add a "Clear" button that resets all fields. Use a single state object. Validate that email contains "@" and show a warning if not.
