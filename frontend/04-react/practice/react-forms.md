# Practice: Forms

## Tasks

### Task 1
Create a login form: email and password inputs, submit button. Use controlled inputs (useState for each). On submit, prevent default and log the values to console. No semicolons.

### Task 2
Build a registration form: name, email, password, confirm password. State holds all fields. On submit, check that password and confirm match. If not, show an error message. If they match, log the data. Clear form on success.

### Task 3
Create a `FeedbackForm` with: name, email, rating (1–5 stars), and comment (textarea). Use state object. On submit, validate: name and email required, rating 1–5. Show validation errors inline. Disable submit until valid. Show success message after submit.

### Task 4
Build a multi-step form: Step 1 (name, email), Step 2 (address, city), Step 3 (review). State holds form data and current step. "Next" and "Back" buttons. On Step 3, show summary and "Submit". Validate each step before advancing. Use a single state object for all fields.

### Task 5
Create a dynamic form builder: user can add "text" or "number" fields with a label. Each field has a remove button. State holds array of `{ id, type, label }`. Render the form from this config. Add "Submit" that collects all values. Support reordering (optional: drag or up/down buttons). Generate unique ids for new fields.
