# Practice: Responsive Design

## Tasks

### Task 1
Make an existing fixed-width layout (e.g., 960px) fluid: use `max-width: 960px` and `width: 100%`. Add padding on the sides. Center with `margin: 0 auto`. Ensure images use `max-width: 100%` and `height: auto`.

### Task 2
Implement mobile-first breakpoints: base styles for mobile (320px+), then `@media (min-width: 768px)` for tablet, `@media (min-width: 1024px)` for desktop. Change font sizes, spacing, and layout at each breakpoint. Use a simple 2-column layout that becomes 1 column on mobile.

### Task 3
Create a responsive typography scale: smaller base font on mobile (14px), larger on desktop (18px). Use `clamp()` for fluid typography: `font-size: clamp(1rem, 2vw, 1.5rem)`. Apply to headings and body. Ensure line-height scales appropriately.

### Task 4
Build a responsive table: on desktop, normal table. On mobile, convert to card layout (each row becomes a card with label-value pairs). Use `display: block` and `display: table` with media queries. Or use a different structure that stacks on mobile.

### Task 5
Create a fully responsive page: fluid container, responsive images (with srcset or picture in HTML), fluid typography, and a layout that adapts at 3 breakpoints. Add a responsive navigation (hamburger on mobile). Test at 320px, 768px, and 1280px. Ensure no horizontal scroll at any width. Use `min()` or `clamp()` for at least one value.
