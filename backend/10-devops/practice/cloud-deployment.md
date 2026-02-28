# Practice: Cloud Deployment

## Tasks

### Task 1
Deploy a Node.js API to a cloud platform (AWS ECS Fargate, Google Cloud Run, or Azure Container Apps). Use a container image from a registry. Configure the service to scale to 2 instances minimum, expose HTTPS, and set environment variables for `NODE_ENV=production` and `LOG_LEVEL=info`. Verify the API is accessible.

### Task 2
Add a managed database (RDS, Cloud SQL, or Azure Database) and connect the API to it. Use a private connection (VPC, private endpoint). Store the database URL in the platform's secret manager and inject it as an environment variable. Configure the database with automated backups and multi-AZ (if available).

### Task 3
Set up a CI/CD pipeline that deploys to the cloud on push to main. Use the cloud provider's native CI (e.g., AWS CodePipeline, Google Cloud Build) or GitHub Actions with provider credentials. Build the Docker image, push to the provider's registry, and update the service. Add a manual approval step for production.

### Task 4
Implement a blue-green or canary deployment on the cloud platform. Use the platform's deployment features (e.g., AWS CodeDeploy, Cloud Run traffic splitting) or implement with two services and a load balancer. Add automated rollback if health checks fail. Document the deployment and rollback procedure.

### Task 5
Build a production cloud deployment: use multi-region or multi-AZ for high availability, configure auto-scaling based on CPU and request count, set up a CDN for static assets, add WAF rules for security, configure custom domain with TLS, implement cost monitoring and alerts, and document the architecture (diagram), runbooks, and disaster recovery plan.
