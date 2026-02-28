# Practice: File Upload Endpoint

## Tasks

### Task 1
Create `POST /upload` with `FileInterceptor('file')`. Use `multer` with `diskStorage` to save files to `./uploads`. Generate a unique filename with `Date.now()` and `extname(file.originalname)`. Return `{ filename, path, size }`. Add a 5MB size limit. Test with a multipart form.

### Task 2
Add file type validation. Only allow `image/jpeg`, `image/png`, `image/gif`. Use `fileFilter` in multer options. Reject with `BadRequestException('Invalid file type')` for disallowed types. Add a custom `FileTypeValidator` pipe that checks `file.mimetype` and `file.originalname` extension.

### Task 3
Implement multiple file upload: `FilesInterceptor('files', 10)`. Return an array of `{ filename, path }` for each file. Validate each file (type, size). If any file fails, reject the entire request with a 400 listing invalid files. Use a custom interceptor or pipe for validation.

### Task 4
Add an upload that streams to cloud storage (mock). Create an `S3Service` (mock) with `upload(buffer, key)`. Use `memoryStorage()` in multer to get a Buffer. In the controller, call `s3Service.upload(file.buffer, key)` and return the mock URL. Add `DELETE /upload/:filename` to remove a file from disk (or mock S3).

### Task 5
Implement image resize on upload. Use `sharp` to resize images to max 1200x1200 (preserve aspect ratio) and create a thumbnail 200x200. Store both: `original`, `resized`, `thumbnail`. Return URLs for all three. Add validation: reject non-image files. Use a queue to process resize asynchronously: add a job on upload, return immediately with "processing", and provide `GET /upload/:id/status` to check if processing is done. Store job ID with the upload record.
