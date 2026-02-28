# Practice: Typography and Form Styling

## Tasks

### Task 1
Create a typography scale: 6 levels (h1–h6 or .text-xl to .text-xs). Use `rem` and a consistent ratio (e.g., 1.25). Define on `:root` or as utility classes. Apply to a sample document. Set `line-height` and `margin` for each level.

### Task 2
Style a form: labels above inputs, consistent spacing, and focus states. Use `:focus-visible` with a 2px outline. Style `:invalid` with a red border (only after user has interacted). Add placeholder styling. Ensure sufficient contrast.

### Task 3
Create a custom checkbox and radio: hide the native input with `appearance: none` or `clip`, style a custom box/circle. Use `:checked` and `:focus-visible`. Ensure the custom control is at least 24x24px. Use `+ label` or `::before` on a wrapper.

### Task 4
Build an input with floating label: label starts inside the input, moves up and shrinks when focused or when input has value. Use `:focus` and `:not(:placeholder-shown)` or a combination. Position the label with `transform`. Add transition for smooth movement.

### Task 5
Create a complete form design system: text input, textarea, select, checkbox, radio, and submit button. All use CSS variables for colors and spacing. Include disabled state, error state (red border + message), and success state (green border). Add a "Show password" toggle styling. Ensure all states are accessible (focus, contrast).
