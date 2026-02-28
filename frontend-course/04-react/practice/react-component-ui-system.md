# Practice: Component UI System (Mini-Project)

## Tasks

### Task 1
Create base components: `Button`, `Input`, and `Badge`. Button accepts `variant` ("primary" | "secondary" | "ghost"), `size` ("sm" | "md" | "lg"), and `children`. Input accepts `type`, `placeholder`, `value`, `onChange`. Badge shows a label with optional `variant` ("default" | "success" | "warning"). Use CSS classes or inline styles. No semicolons.

### Task 2
Build `Card` with `title`, `description`, and `children`. Add `CardHeader`, `CardBody`, `CardFooter` as subcomponents. Use composition: `<Card><CardHeader>...</CardHeader><CardBody>...</CardBody></Card>`. Style with consistent padding and border. Support optional `elevated` prop for shadow.

### Task 3
Create `Alert` component: `variant` ("info" | "success" | "warning" | "error"), `title`, `children`, and optional `onDismiss`. Render icon or color based on variant. Dismiss button calls onDismiss. Create a `Spinner` component for loading states. Use the same design tokens (colors, spacing) across components.

### Task 4
Build `Modal` (basic): `isOpen`, `onClose`, `title`, `children`. When open, render overlay + content. Close on overlay click or X button. Use `createPortal` to render into document.body. Add focus trap: Tab cycles within modal. Close on Escape key. Style overlay (backdrop) and modal content.

### Task 5
Assemble a complete UI system: Button, Input, Badge, Card, Alert, Spinner, Modal. Create a demo page that showcases each component with variants. Add a theme (light/dark) using CSS variables. Document usage in comments. Ensure all components are accessible: focus styles, aria attributes where needed. Create a `FormField` that combines Label + Input + error message for consistent form layout.
