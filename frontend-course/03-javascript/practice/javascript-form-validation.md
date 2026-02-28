# Practice: Form Validation (Mini-Project)

## Tasks

### Task 1
Create a registration form: name, email, password, confirm password. Add a submit handler that prevents default. Log form data as an object. Use FormData or manual collection. Validate that all fields are non-empty (show alert or inline message).

### Task 2
Add inline validation: show error message below each invalid field. Use HTML5 validation (required, type, pattern) and/or custom JS. Validate email format (regex or type="email"). Validate password length (min 8). Only show errors after first submit or on blur.

### Task 3
Validate confirm password: it must match password. Show error if they don't match. Disable submit button until form is valid, or show all errors on submit. Use a validity state object or check each field. Add visual feedback (red border, error text).

### Task 4
Add real-time validation: validate on input or blur. Debounce validation for performance (e.g., 300ms after last keystroke for length checks). Clear errors when user corrects. Use setCustomValidity for native integration, or custom error divs. Validate username format (alphanumeric, 3–20 chars).

### Task 5
Complete the form: add phone (optional, with format validation), terms checkbox (required). Submit only when valid. On valid submit, simulate API call (setTimeout) and show success message. Handle async errors. Add a "Reset" button that clears form and errors. Ensure accessibility: associate errors with inputs via aria-describedby, focus first error on submit.
