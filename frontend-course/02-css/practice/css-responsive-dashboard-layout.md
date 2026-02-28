# Practice: Responsive Dashboard Layout (Mini-Project)

## Tasks

### Task 1
Create a dashboard layout: sidebar (fixed, 250px wide) and main content area. Use CSS Grid: `grid-template-columns: 250px 1fr`. Sidebar has dark background; main has light background. Add a header bar in the main area (full width).

### Task 2
Add sidebar navigation: 5 links with icons (placeholder) and labels. Style active state. On mobile (< 768px), collapse sidebar to icon-only (60px) or hide completely with toggle. Use flexbox for sidebar content layout.

### Task 3
Build the main content area: header with title and user menu, then a grid of widgets (4 cards: Stats, Chart placeholder, Table placeholder, Activity feed). Use CSS Grid for the widget layout. Make it responsive: 2 columns on tablet, 1 on mobile.

### Task 4
Add a collapsible sidebar: toggle button to expand/collapse. Collapsed state: icons only, 60px width. Use CSS transition for smooth width change. Persist state with a class (e.g., `.sidebar--collapsed`). Ensure main content area resizes correctly.

### Task 5
Complete the dashboard: responsive sidebar (hidden on mobile with overlay when open), sticky header, scrollable main content, and widget cards with proper spacing. Add dark mode support via CSS variables. Ensure focus management when sidebar opens (trap focus in modal-like overlay on mobile). Use `prefers-reduced-motion` for transitions. Add a breadcrumb in the header.
