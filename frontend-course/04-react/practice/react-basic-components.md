# Practice: Basic Components

## Tasks

### Task 1
Create a functional component `Greeting` that accepts a `name` prop and renders "Hello, {name}". Use it in an App component with different names. Ensure the component uses destructuring for props. No semicolons.

### Task 2
Build a `Card` component with props: `title`, `description`, and `children`. Render the title as h2, description as p, and children below. Use the Card in App with different content. Add a default value for description ("No description").

### Task 3
Create a `Button` component that accepts `children`, `onClick`, and optional `variant` ("primary" | "secondary"). Apply different class names based on variant. Render multiple buttons with different variants. Handle click by logging to console.

### Task 4
Build a `UserCard` component that displays `name`, `email`, and `avatar` (URL). Use an img for avatar with alt text. If avatar is missing, show a placeholder div with initials. Style with simple CSS (or inline styles). Compose from a base Card if you built one.

### Task 5
Create a small component library: `Page`, `Header`, `Main`, and `Footer`. Page wraps everything. Header has a `title` prop. Main and Footer accept `children`. Compose them into a full page layout. Add a `Nav` component that accepts an array of `links` (label, href) and renders them as anchor tags. Use semantic HTML.
