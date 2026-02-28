# Practice: Serverless Function

## Tasks

### Task 1
Create a simple AWS Lambda function (or equivalent: Vercel, Netlify, GCP Cloud Functions) that handles HTTP GET requests. Return a JSON response with `{ message: "Hello", timestamp: <iso> }`. Deploy using the Serverless Framework or AWS SAM. Verify the function responds correctly via the generated URL.

### Task 2
Add a POST handler that accepts JSON body, validates it with Zod, and stores the data in DynamoDB (or a similar key-value store). Return 201 with the created resource ID. Add error handling for invalid input (400) and database errors (500). Configure the function with 256MB memory and 10s timeout.

### Task 3
Implement an event-driven function: trigger on SQS message (or equivalent queue). Process each message (e.g., send email, update record), and handle partial failures (return failed message IDs for retry). Use idempotency (message ID) to avoid duplicate processing. Add dead-letter queue configuration for failed messages.

### Task 4
Build a serverless API with multiple routes: use API Gateway (or HTTP trigger) with routing by path and method. Implement CRUD for a resource (e.g., items). Use DynamoDB for storage. Add middleware for request validation, error handling, and request ID propagation. Optimize cold start (minimize package size, use provisioned concurrency if needed).

### Task 5
Create a production-ready serverless setup: add structured logging with correlation IDs, implement distributed tracing (X-Ray or OpenTelemetry), configure VPC for database access (if using RDS), add API key or JWT authentication, implement rate limiting, set up CI/CD for deployment, and add monitoring (CloudWatch metrics, custom dashboards). Document cold start mitigation and cost optimization strategies.
