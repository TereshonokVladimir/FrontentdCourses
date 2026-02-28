# Practice: Config and Theming

## Tasks

### Task 1
Customize tailwind.config: add brand colors (primary, secondary) with shades 50–900. Add custom spacing (e.g., 18, 88). Use these in a page. Verify the classes work (e.g., bg-primary-500, p-18). No semicolons.

### Task 2
Add a custom font: Google font (e.g., Inter, Poppins) via @import or next/font. Add to theme.extend.fontFamily. Use the font in the body. Add a second font for headings. Create a type scale in config (optional). Apply consistently across a sample page.

### Task 3
Create a plugin or use theme.extend to add a custom utility: e.g., .text-balance or a custom shadow. Document how to add custom utilities. Add a component class via @layer components: .btn that uses @apply with your theme colors. Use it in a button. Show the difference between utility-first and extracted component.

### Task 4
Build a theme switcher: light, dark, and system. Store preference in localStorage. System reads prefers-color-scheme. Use data attributes or classes (e.g., data-theme="dark") if you need more than light/dark. Ensure the config supports it. Apply the theme to a full page. Add transition for theme switch (transition-colors on body or root).

### Task 5
Create a design system with Tailwind config: colors (primary, secondary, neutral, semantic), spacing scale, typography scale, border radius scale, shadow scale. Document each token. Build 3–4 components that use only these tokens (no arbitrary values). Add a theme preview page showing all tokens. Consider a CSS variables approach for runtime theming (e.g., --color-primary). Document the theming strategy and when to use config vs CSS variables.
