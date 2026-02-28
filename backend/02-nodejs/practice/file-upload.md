# Practice: File Upload

## Tasks

### Task 1
Create an HTTP endpoint that accepts `POST /upload` with `multipart/form-data`. Use a library like `busboy` or parse manually. Extract the file and save it to a `uploads/` directory with a unique filename (UUID or timestamp). Return 201 with `{ "filename": "..." }`.

### Task 2
Add validation: max file size (e.g., 5MB). Reject the request with 413 if exceeded. Stream the upload to disk instead of buffering in memory. Abort the stream if size limit is exceeded. Create the uploads directory if it doesn't exist.

### Task 3
Restrict allowed file types (e.g., images only: jpeg, png, gif). Check the `Content-Type` or file extension. Return 400 for disallowed types. Support configurable allowlist. Optionally validate magic bytes for extra safety.

### Task 4
Add support for multiple files in one request (field name `files` or multiple fields). Save each file and return `{ "files": [{ "filename": "...", "size": ... }, ...] }`. Handle partial failure: if one file fails validation, decide whether to reject all or return partial success (document the choice).

### Task 5
Implement virus scanning simulation: after save, call an async `scanFile(path)` that returns `{ safe: boolean }` after a short delay. If not safe, delete the file and return 400. Use a queue to avoid overwhelming the scanner. Add cleanup of orphaned files (uploaded but not yet scanned) on server restart.