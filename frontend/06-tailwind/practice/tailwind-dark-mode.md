# Practice: Dark Mode

## Tasks

### Task 1
Add dark mode to an existing page. Use `darkMode: 'class'` in config. Add `dark:` variants for background, text, and borders. Create a toggle button that adds/removes `dark` class on `html` or `body`. Persist the preference in localStorage. No semicolons.

### Task 2
Build a card component with full dark mode support. Light: white bg, gray text. Dark: gray-900 bg, gray-100 text. Add dark variants for border, shadow. Ensure the card is readable in both modes. Add the toggle to the page. Test contrast in both modes.

### Task 3
Create a navbar that adapts to dark mode. Links, logo, buttons—all need dark variants. Add a subtle border or background difference. Ensure hover states work in both modes. Consider a gradient or different approach for dark (e.g., darker navbar in dark mode). Add the theme toggle in the navbar.

### Task 4
Implement a form with dark mode. Inputs, labels, buttons, error states—all need dark variants. Use semantic colors (e.g., gray-100/800 for backgrounds). Ensure focus rings are visible in both modes. Add a select and checkbox with dark styles. Test that placeholder text is visible.

### Task 5
Build a full dark mode experience: multiple pages or sections (navbar, hero, features, footer). Add dark mode to all components. Prevent flash of wrong theme: add a script in head that runs before paint to read localStorage and set the class. Add system preference detection: if no saved preference, use prefers-color-scheme. Ensure all interactive elements have visible focus in both modes. Document the implementation. Test with browser devtools and a real dark mode toggle.
