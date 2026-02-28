# File Upload

## Concept

Nest handles file uploads via `@nestjs/platform-express` with `multer`. Use `@UseInterceptors(FileInterceptor())` to receive single or multiple files. Files can be stored on disk, in memory, or streamed to cloud storage (S3, GCS).

## Why It Matters

File uploads require validation (type, size), storage strategy, and security (path traversal, malware). Nest's interceptors simplify handling; you still must validate and secure storage. Production often uses cloud storage for scalability.

## Key Concepts

- `FileInterceptor('field')`: single file
- `FilesInterceptor('field', maxCount)`: multiple files
- `@UploadedFile()`, `@UploadedFiles()`: access files
- Multer options: `limits`, `fileFilter`, `storage`
- `FileValidator`: custom validation (e.g., image type)

## Code Example

```typescript
@Post('upload')
@UseInterceptors(
  FileInterceptor('file', {
    limits: { fileSize: 5 * 1024 * 1024 },  // 5MB
    fileFilter: (req, file, cb) => {
      const allowed = ['image/jpeg', 'image/png']
      if (allowed.includes(file.mimetype)) cb(null, true)
      else cb(new BadRequestException('Invalid file type'), false)
    },
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const unique = `${Date.now()}-${randomUUID()}`
        cb(null, `${unique}${extname(file.originalname)}`)
      },
    }),
  }),
)
uploadFile(@UploadedFile() file: Express.Multer.File) {
  return { filename: file.filename, path: file.path }
}
```

## Under the Hood

Multer parses multipart/form-data. FileInterceptor configures multer for the route. Files are written to disk or kept in memory (Buffer) based on storage. Nest passes the file object to the handler.

## Common Mistakes

- No file size limit; DoS via large uploads
- Trusting client-provided filenames; path traversal risk
- Storing files on app server; doesn't scale
- Not validating MIME type; rely on extension only

## Best Practices

- Set strict size limits
- Generate safe filenames (UUID, no user input)
- Use cloud storage (S3) for production
- Validate MIME type; consider magic bytes for security

## Summary

Use FileInterceptor with multer for uploads. Set limits, validate type, use safe filenames. Prefer cloud storage in production.
