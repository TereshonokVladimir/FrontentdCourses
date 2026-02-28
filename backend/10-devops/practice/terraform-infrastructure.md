# Practice: Terraform Infrastructure

## Tasks

### Task 1
Initialize a Terraform project with the AWS provider. Create a single EC2 instance (t3.micro) in the default VPC. Use a variable for the instance type. Output the public IP of the instance. Run `terraform init`, `plan`, and `apply` (or use a local provider for practice).

### Task 2
Refactor the configuration into modules: one for networking (VPC, subnets, internet gateway) and one for compute (EC2 with security group). Use a remote backend (e.g., S3 with DynamoDB for state locking) or document the backend configuration. Add variables for `environment` and `project_name` to tag resources.

### Task 3
Add an RDS PostgreSQL instance in a private subnet. Create a security group that allows the EC2 instance to connect to RDS on port 5432. Use a data source to fetch the latest Amazon Linux AMI. Output the RDS endpoint and ensure the EC2 instance can resolve it.

### Task 4
Create a reusable Terraform module for a "web app" that provisions: VPC with public/private subnets, ALB, EC2 instances in an ASG (or ECS Fargate), and RDS. Support variables for environment, instance count, and DB credentials (from variables, not hardcoded). Use `terraform workspace` or separate `.tfvars` files for dev/staging/prod.

### Task 5
Build a production-grade Terraform setup: use `terraform-docs` for module documentation, implement a CI pipeline that runs `terraform plan` on PR and `apply` on merge to main (with manual approval), add `tflint` and `tfsec` for validation, use `pre-commit` hooks for `terraform fmt` and `validate`, and document the state management and team workflow.
