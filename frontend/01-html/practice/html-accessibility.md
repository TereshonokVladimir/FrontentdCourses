# Practice: Accessibility

## Tasks

### Task 1
Audit a simple form: ensure every input has a label with for/id, add aria-describedby for helper text, and use aria-required if needed. Fix any missing alt on images. Add a skip link to the main content.

### Task 2
Improve a table: add caption, scope on all th elements, and a summary. Ensure the table is readable when linearized (e.g., screen reader order). Add headers attribute if the table has complex structure.

### Task 3
Create a custom button (div with role="button") that is keyboard accessible: tabindex="0", onclick, and onkeydown for Enter/Space. Add aria-label. Ensure it looks and behaves like a button.

### Task 4
Build an expandable/collapsible section: use a button with aria-expanded, aria-controls, and id on the content panel. Structure it so the relationship is clear. Add appropriate ARIA for the collapsed state.

### Task 5
Create a modal dialog structure: dialog or div with role="dialog", aria-modal="true", aria-labelledby (title), aria-describedby (content). Include a close button. Add focus trap instructions in comments (where focus should go when opened/closed). Ensure the dialog has a visible title (h2) and can be closed via button.
