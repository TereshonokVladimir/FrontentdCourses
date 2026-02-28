# Practice: Refs

## Tasks

### Task 1
Create an input and a button. Use `useRef` to get the input element. When the button is clicked, call `inputRef.current.focus()`. Verify the input receives focus. Handle the case where ref might be null. No semicolons.

### Task 2
Build a `ScrollToTop` component: a button that scrolls the window to top when clicked. Use `window.scrollTo(0, 0)`. Add a `ScrollToBottom` that scrolls to a ref'd div at the bottom. Use `ref.current.scrollIntoView()`. Create a long page to test.

### Task 3
Create a `ResizeObserver` component: use a ref on a div, and useEffect to create a ResizeObserver that logs the element's dimensions when it resizes. Clean up the observer on unmount. Display the width and height in the component. Use state to store dimensions (observer callback updates state).

### Task 4
Build a `FancyInput` with `forwardRef`. The component wraps a styled input. Use `useImperativeHandle` to expose `focus` and `selectAll` methods. Parent has a ref and a button "Focus input" that calls `ref.current.focus()`. Also expose `getValue` and `setValue` for imperative control.

### Task 5
Create a `PreviousValue` hook: `usePrevious(value)` returns the previous value of `value`. Use useRef to store the previous value. In useEffect, after render, update the ref to current value. Use it in a counter: display "Previous: X, Current: Y". Create a `useIntersectionObserver` hook: `useIntersectionObserver(ref, options)` returns `isIntersecting`. Use for "load more when scroll to bottom" or "animate when in view". Clean up observer on unmount. Document both hooks.
