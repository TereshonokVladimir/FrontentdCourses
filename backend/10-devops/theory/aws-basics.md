# AWS Basics

## Concept

Amazon Web Services (AWS) is the largest cloud provider, offering 200+ services. Core building blocks for backends include EC2 (compute), RDS (managed databases), S3 (object storage), Lambda (serverless), and VPC (networking). Understanding these enables you to deploy and operate production systems.

## Why It Matters

AWS dominates enterprise cloud. Most backend jobs involve AWS in some form. Knowing EC2, RDS, S3, IAM, and VPC is foundational for deploying APIs, databases, and event-driven systems.

## Key Concepts

- **EC2**: Virtual machines; choose instance types, AMIs, security groups
- **RDS**: Managed PostgreSQL, MySQL, etc.; backups, multi-AZ
- **S3**: Object storage; buckets, versioning, lifecycle policies
- **Lambda**: Serverless functions; event-driven, pay per invocation
- **VPC**: Virtual network; subnets, route tables, NAT gateway
- **IAM**: Identity and access management; users, roles, policies

## Code Example

```bash
# Deploy a container to ECS
aws ecs create-service \
  --cluster my-cluster \
  --service-name api \
  --task-definition api-task \
  --desired-count 3 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxx],securityGroups=[sg-xxx]}"

# Create RDS instance
aws rds create-db-instance \
  --db-instance-identifier api-db \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username admin \
  --master-user-password secret \
  --allocated-storage 20 \
  --multi-az
```

```javascript
// Use AWS SDK for S3
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const s3 = new S3Client({ region: 'us-east-1' })
await s3.send(new PutObjectCommand({
  Bucket: 'my-bucket',
  Key: 'uploads/file.json',
  Body: JSON.stringify(data),
  ContentType: 'application/json'
}))
```

## Under the Hood

AWS services are API-driven. CLI and SDKs call REST APIs. Resources live in regions (us-east-1, eu-west-1); availability zones are isolated data centers within a region. IAM policies control who can do what. Billing is per resource and usage.

## Common Mistakes

- Public S3 buckets (data exposure)
- Overly broad IAM policies (principle of least privilege)
- Single-AZ RDS (no failover)
- No VPC peering or private subnets (exposed resources)
- Ignoring cost (unused resources, wrong instance sizes)

## Best Practices

- Use IAM roles for workloads (no long-lived keys)
- Put resources in private subnets; use NAT for outbound
- Enable encryption at rest (S3, RDS)
- Use multi-AZ for production databases
- Tag resources for cost allocation

## Summary

AWS provides compute (EC2, Lambda), databases (RDS), storage (S3), and networking (VPC). Use IAM correctly, prefer managed services, design for multi-AZ. Know the core services for backend deployment.
