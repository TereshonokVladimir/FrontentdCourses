# Practice: Positioning and Layout

## Tasks

### Task 1
Center a div using `position: absolute` and `transform: translate(-50%, -50%)`. Parent must have `position: relative` and a defined height. No flexbox or grid.

### Task 2
Create a sticky sidebar: main content scrolls, sidebar stays fixed when in view. Use `position: sticky` and `top: 20px`. Ensure the sidebar doesn't overflow the viewport. Add `max-height: calc(100vh - 40px)` and `overflow-y: auto` if content is long.

### Task 3
Build a tooltip: when hovering over an element, show a tooltip above it. Use `::after` pseudo-element with `position: absolute`. Position with `bottom: 100%` and `left: 50%`, then `transform: translateX(-50%)`. Add arrow (triangle) using border trick.

### Task 4
Create a modal overlay: fixed overlay (semi-transparent background) with a centered modal box. Use `position: fixed` and `inset: 0` for overlay. Center the modal with flexbox on the overlay. Ensure the modal has a higher z-index. Add `max-height: 90vh` and `overflow-y: auto` on modal content.

### Task 5
Build a dropdown menu: button triggers a menu that appears below. Use `position: absolute` on the menu, `position: relative` on the parent. Ensure the menu doesn't get cut off by `overflow: hidden` ancestors. Add a slight animation (fade in). Handle the menu appearing above the button if near the bottom of the viewport (optional, or document the limitation).
