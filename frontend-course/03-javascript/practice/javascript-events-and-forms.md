# Practice: Events and Forms

## Tasks

### Task 1
Add a click handler to a button. Add a keydown handler to the document that logs the key. Add a submit handler to a form that prevents default and logs form data. Use addEventListener.

### Task 2
Implement event delegation: a list of items, each with a delete button. Listen for click on the parent ul. Check if the target is a delete button (matches). Get the item id from data attribute. Remove the li. No listeners on each button.

### Task 3
Create a form that collects: name, email, and a dynamic list of "phone numbers" (add/remove rows). Use a container and a template. Add button clones the template row. Remove button removes that row. On submit, collect all data as an object (phones as array).

### Task 4
Implement drag and drop: a list of items can be reordered. Use dragstart, dragover, drop events. Prevent default on dragover to allow drop. Store the dragged item's id or index. Use dataTransfer.setData/getData. Update the DOM and underlying array.

### Task 5
Build a multi-step form: Step 1 (name, email), Step 2 (address), Step 3 (review). Show one step at a time. Next/Back buttons. Validate current step before moving. On final submit, show all data and a "Submit" button. Use a step state variable. Disable submit until all steps valid. Add a progress indicator.
