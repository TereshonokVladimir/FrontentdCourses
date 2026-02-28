# Infrastructure as Code

## Concept

Infrastructure as Code (IaC) is the practice of managing infrastructure (servers, networks, databases) through machine-readable definition files rather than manual configuration. Changes are version-controlled, reviewed, and applied through automated pipelines.

## Why It Matters

Manual infrastructure is fragile, undocumented, and impossible to reproduce. IaC gives you reproducibility, audit trails, and the ability to spin up identical environments for dev, staging, and production. It's the foundation of reliable, scalable backends.

## Key Concepts

- **Declarative vs imperative**: Declare desired state (Terraform) vs run commands (Ansible)
- **Idempotency**: Running the same config multiple times yields the same result
- **State management**: Track what exists to compute diffs and apply changes
- **Modularity**: Reusable modules for VPCs, clusters, databases
- **Drift detection**: Detect when manual changes diverge from code

## Code Example

```hcl
# Terraform: declarative IaC
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

resource "aws_instance" "api" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = aws_subnet.private.id

  tags = {
    Name = "api-server"
    Env  = var.environment
  }
}

resource "aws_security_group" "api" {
  name_prefix = "api-"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

## Under the Hood

IaC tools parse config, build a graph of resources and dependencies, and call cloud APIs to create/update/delete. State files (often in remote backends) record what was created. Plan shows diff; apply executes changes. Drift is detected by re-reading actual state and comparing to desired state.

## Common Mistakes

- Storing state locally (lost on machine change)
- Hardcoding values instead of variables
- Not using remote state locking (concurrent apply corruption)
- Mixing manual changes with IaC (drift)
- Committing secrets or sensitive values

## Best Practices

- Use remote state (S3, Terraform Cloud) with locking
- Parameterize with variables; use workspaces or folders for envs
- Run plan in CI; require approval for apply
- Use modules for reuse; keep root configs thin
- Never commit state files or secrets

## Summary

IaC defines infrastructure in code. Use declarative tools, remote state, and variables. Version control, review, and apply through pipelines. Reproducibility and auditability are the payoff.
