# Practice: Animations and Transitions

## Tasks

### Task 1
Add a hover transition to a button: change background color and scale (transform: scale(1.05)) over 0.3s. Use `transition` with `ease` timing. Add a focus-visible state with outline transition.

### Task 2
Create a loading spinner using `@keyframes`. Use a div with `border` and `border-radius: 50%`. Animate `transform: rotate(0deg)` to `rotate(360deg)`. Use `animation: spin 1s linear infinite`. Add `prefers-reduced-motion` media query to disable or simplify.

### Task 3
Build an accordion: click to expand/collapse content. Use CSS only with `:target` or `details/summary`, or prepare the structure for JS. Animate max-height or use `grid-template-rows: 0fr` to `1fr` for smooth expand. Transition over 0.3s.

### Task 4
Create a card flip animation: front and back of a card. Use `transform: rotateY()`. On hover, flip 180deg. Use `transform-style: preserve-3d` and `backface-visibility: hidden`. Ensure the back face is hidden when facing away.

### Task 5
Build a multi-step animation: a dot that moves in a square path (4 corners). Use `@keyframes` with 4 steps (0%, 25%, 50%, 75%, 100%). Use `animation-timing-function: steps(4)` or linear with keyframe positions. Add a second animation for color change. Combine with `animation` shorthand. Respect `prefers-reduced-motion`.
