# Practice: Component Library (Mini-Project)

## Tasks

### Task 1
Create Button component with variants: primary, secondary, ghost, danger. Each variant has distinct colors. Support sizes: sm, md, lg. Support disabled state (opacity, no pointer events). Use Tailwind classes. Accept className for overrides. Ensure focus ring. No semicolons.

### Task 2
Build Input component: text input with label, optional error message. Support sizes. Add focus ring. Error state: red border, error text below. Add optional icon (left or right). Support placeholder. Use a FormField wrapper that composes Label + Input + Error. Make it accessible (label association, aria-describedby for error).

### Task 3
Create Card component: base card with optional header, body, footer. Support variants: default, elevated, outlined. Add CardHeader, CardBody, CardFooter as subcomponents or slots. Support optional image at top. Add hover variant for interactive cards. Use consistent padding and border radius.

### Task 4
Build Badge, Alert, and Spinner components. Badge: variants (default, success, warning, error), sizes. Alert: variants with icon, title, message, optional dismiss. Spinner: sizes, optional color. Use Tailwind for all. Ensure Alert has proper role and aria. Spinner should support reduced-motion (motion-reduce:animate-none or static).

### Task 5
Assemble the component library: Button, Input, Card, Badge, Alert, Spinner. Add Modal: overlay + content, support size (sm, md, lg), close button. Create a demo page that showcases each component with all variants. Add dark mode support to all components. Document usage (props, variants). Ensure consistent design tokens (use theme in config). Add a Table component: header, rows, optional striped, hover. Export all from an index. Run accessibility check (focus, contrast, semantics).
