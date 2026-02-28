# Terraform Basics

## Concept

Terraform is an open-source Infrastructure as Code tool by HashiCorp. You write declarative configuration in HCL (HashiCorp Configuration Language), and Terraform plans and applies changes to create or update cloud and on-prem resources. It supports 100+ providers (AWS, GCP, Azure, Kubernetes, etc.).

## Why It Matters

Terraform is the most widely used IaC tool. It's provider-agnostic, has a large ecosystem, and integrates with CI/CD. Backend engineers use it to provision databases, clusters, load balancers, and networking—all from code.

## Key Concepts

- **Providers**: Plugins for cloud/API (aws, google, kubernetes)
- **Resources**: The "things" you create (instance, database, subnet)
- **State**: Tracks created resources; required for updates and destroy
- **Plan/Apply**: Plan shows diff; apply executes changes
- **Modules**: Reusable packages of resources

## Code Example

```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
  }
}

provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "${var.project}-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true
}
```

## Under the Hood

Terraform parses HCL, builds a dependency graph, and queries provider APIs for current state. It computes a diff (desired vs actual) and generates a plan. Apply executes create/update/delete in dependency order. State is stored as JSON; remote backends enable team collaboration and locking.

## Common Mistakes

- Forgetting `terraform init` after adding providers
- Not using `-out` for plan (apply can drift)
- Storing state in git (secrets, corruption risk)
- Using `count` or `for_each` incorrectly (state migration)
- Not pinning provider versions

## Best Practices

- Use remote backend with state locking (DynamoDB for S3)
- Pin provider versions in required_providers
- Use variables and `.tfvars` (gitignored for secrets)
- Run `terraform fmt` and `terraform validate` in CI
- Use `terraform plan -out=tfplan` and `apply tfplan` for consistency

## Summary

Terraform manages infrastructure declaratively. Define resources in HCL, use providers for clouds, store state remotely with locking. Plan before apply; use modules for reuse.
