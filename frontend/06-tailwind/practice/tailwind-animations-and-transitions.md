# Practice: Animations and Transitions

## Tasks

### Task 1
Add hover transitions to a button: background color and scale (scale-105 on hover). Use `transition` and `duration-200`. Add focus ring with transition. Add active state (scale-95). Ensure smooth animation. No semicolons.

### Task 2
Create a loading spinner using Tailwind's animate-spin. Style a circular border that spins. Add a "Loading..." text. Create a skeleton loader: placeholder blocks with animate-pulse. Use for a card skeleton (image placeholder, title bar, text lines). Ensure reduced-motion support (motion-reduce:animate-none).

### Task 3
Build a dropdown menu: button toggles a menu that appears below. Animate the menu: fade in and slide down. Use `transition` and `opacity`, `transform`. Consider using `scale` or `translate-y`. Add a slight delay for polish. Ensure the menu is accessible (focus, keyboard). Style the menu items with hover.

### Task 4
Create a modal with animation: overlay fades in, modal scales in (from 95% to 100%). Use transition and transform. Add backdrop blur (backdrop-blur-sm). Ensure the animation runs on open and close. Use state to toggle (e.g., opacity-0 vs opacity-100, pointer-events-none vs auto). Add focus trap when open.

### Task 5
Build an animated card list: cards fade in and slide up on load. Use stagger (delay-100, delay-200, etc.) or CSS animation. Add a "Show more" button that reveals more cards with animation. Create a toast notification that slides in from the top-right and fades out after a delay. Use transition and transform. Ensure all animations respect prefers-reduced-motion. Document the animation patterns. Consider using a library (e.g., Framer Motion) for complex animations—note when Tailwind is sufficient vs when to use a lib.
