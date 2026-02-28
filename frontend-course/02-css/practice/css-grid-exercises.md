# Practice: CSS Grid Exercises

## Tasks

### Task 1
Create a 3x3 grid of equal-sized boxes. Use `grid-template-columns: repeat(3, 1fr)` and same for rows. Add gap. Give each box a different background color (or border) to see the grid.

### Task 2
Build a magazine-style layout: header (full width), sidebar (1fr), main (3fr), footer (full width). Use `grid-template-areas` for readability. Define the grid on a container. Place items using `grid-area`.

### Task 3
Create a responsive card grid: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`. Add 6 cards. They should automatically reflow based on viewport. Add gap. Ensure no card is narrower than 250px.

### Task 4
Build a layout with a featured item: first item spans 2 columns and 2 rows, others fill the rest. Use `grid-column: span 2` and `grid-row: span 2` on the first item. Use `grid-auto-flow: dense` to fill gaps (optional). 5–6 items total.

### Task 5
Create a dashboard-style grid: header, sidebar, main (with nested grid of 4 widgets), and footer. Use a 12-column grid. Sidebar spans 3 columns, main spans 9. Main area has its own grid: 2 columns for widgets. Make it responsive: sidebar becomes full-width on mobile, stacks below header.
