# Practice: Error Handling

## Tasks

### Task 1
Create error.js in the app directory. It must be a Client Component. Display "Something went wrong" and a Reset button that calls the reset function. Create a page that throws an error (e.g., when a button is clicked, set state that causes throw). Verify the error boundary catches it. No semicolons.

### Task 2
Create not-found.js. Display a custom 404 page with a link back to home. Create a page that calls notFound() when data is missing (e.g., fetch returns 404). Use the notFound() function from next/navigation. Verify the custom 404 is shown.

### Task 3
Add error.js to a specific segment (e.g., app/dashboard/error.js). Create a dashboard page that can throw. Verify only the dashboard content is replaced by the error UI, not the entire app. Add a global error.js (app/error.js) that catches errors in the root layout. Document the error boundary hierarchy.

### Task 4
Create a data-fetching page that handles fetch errors. Wrap the fetch in try/catch. On error, throw or set an error state. If you throw, the error.js will catch it. Alternatively, return an error UI from the page. Add a "Retry" button that re-fetches. Use a Client Component for the retry logic or use the error boundary's reset.

### Task 5
Build a robust error strategy: global error.js with a generic message, segment-level error.js for dashboard and blog with segment-specific messages. Add not-found.js with helpful links. Create an API route that can return errors—handle them in the client. Add error logging (console or mock service). Ensure the reset button in error.js works. Document the error handling flow and when each boundary is used. Add a "Report" button that would send the error to a service (mock).
