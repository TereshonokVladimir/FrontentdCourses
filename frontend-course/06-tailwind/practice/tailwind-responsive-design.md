# Practice: Responsive Design

## Tasks

### Task 1
Create a responsive navbar: on desktop, full nav with links. On mobile, hamburger icon that toggles a dropdown or slide-in menu. Use `md:flex` and `hidden md:block` (or similar) to show/hide. Ensure the mobile menu covers or pushes content. Add transition for menu open/close. No semicolons.

### Task 2
Build a responsive grid: 4 columns on xl, 3 on lg, 2 on md, 1 on mobile. Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`. Fill with placeholder cards. Ensure gap is consistent. Test at each breakpoint. Add container with max-width if needed.

### Task 3
Create a responsive typography scale: heading is text-2xl on mobile, text-4xl on tablet, text-5xl on desktop. Body text scales similarly. Use `text-base md:text-lg`. Ensure line height and max-width for readability on large screens. Use `max-w-prose` or similar for text blocks.

### Task 4
Build a responsive image section: image on left, text on right on desktop. On mobile, stack (image top, text bottom). Use flex with `flex-col md:flex-row`. Ensure image has aspect ratio and doesn't overflow. Add padding and gap. Consider object-fit for image. Use a placeholder or real image.

### Task 5
Create a fully responsive page: navbar, hero, features grid, CTA section, footer. Each section adapts to mobile, tablet, desktop. Use container queries if available (or breakpoints). Add a sidebar that becomes bottom nav on mobile. Ensure touch targets are at least 44px on mobile. Test in browser resize and device emulation. Document the breakpoint strategy. Add a "mobile menu" that slides in from the right with overlay.
