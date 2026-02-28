# Practice: API Routes (Mini-Project)

## Tasks

### Task 1
Create an API route: app/api/hello/route.js. Export a GET function that returns `Response.json({ message: "Hello" })`. Test with fetch or curl. Add a POST handler that accepts JSON body and echoes it back. Use request.json() to parse. No semicolons.

### Task 2
Create a CRUD API for "tasks": app/api/tasks/route.js. GET returns a list (use in-memory array for now). POST creates a task (id, title, completed). Store in a module-level variable. Add app/api/tasks/[id]/route.js: GET returns one task, PUT updates, DELETE removes. Return 404 for missing task. Use proper status codes (200, 201, 404).

### Task 3
Add validation: POST and PUT require a title (string, 1-200 chars). Return 400 with error message if invalid. Add CORS headers if needed (NextResponse with headers). Create a simple frontend page that uses fetch to list tasks and add new ones. Use a Client Component for the form and list.

### Task 4
Persist tasks: use a JSON file (tasks.json) in the project. Read on GET, write on POST/PUT/DELETE. Use fs (Node.js) in the API route. Handle file not existing (create empty array). Ensure atomic writes (read, modify, write). Add error handling for file operations. Consider using a proper DB in a real app—document that this is for practice.

### Task 5
Build a full API: tasks CRUD with file persistence. Add filtering: GET /api/tasks?completed=true. Add pagination: ?page=1&limit=10. Add a health check: GET /api/health that returns { status: "ok" }. Create an API client hook (useTasks) for the frontend. Add rate limiting (mock: simple in-memory counter). Document the API with a README: endpoints, request/response shapes, status codes. Add error handling for malformed JSON, missing fields.
