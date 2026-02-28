# Practice: CSS Variables and Theming

## Tasks

### Task 1
Define design tokens on `:root`: `--color-primary`, `--color-bg`, `--spacing`, `--radius`, `--font-sans`. Use them in a button and card component. Change one variable and see the update everywhere.

### Task 2
Implement dark mode using `prefers-color-scheme`: define light and dark values for `--color-bg`, `--color-text`, `--color-primary`. Override `:root` in `@media (prefers-color-scheme: dark)`. Apply to a full page.

### Task 3
Add a manual theme toggle: use `[data-theme="dark"]` on the root. Define both themes with CSS variables. Use JavaScript to toggle the attribute (document the JS in comments). Ensure all components use variables, not hardcoded colors.

### Task 4
Create a component that accepts a "variant" via data attribute: `[data-variant="primary"]`, `[data-variant="secondary"]`, `[data-variant="danger"]`. Each variant has different `--component-bg` and `--component-color`. Use a single class with variable overrides per variant.

### Task 5
Build a design system foundation: typography scale (--text-xs through --text-xl), spacing scale (--space-1 through --space-8), color palette (primary, secondary, success, warning, error), and radius scale. Apply to a sample page with headings, buttons, cards, and form elements. Add dark mode. Document the token naming convention in comments.
