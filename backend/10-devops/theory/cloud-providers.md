# Cloud Providers

## Concept

Cloud providers (AWS, Google Cloud, Azure, etc.) offer on-demand infrastructure: compute, storage, networking, databases, and managed services. You provision resources via API or console; they handle hardware, availability, and scaling. The cloud replaces on-prem data centers for most modern backends.

## Why It Matters

Backend systems run in the cloud. Understanding provider offerings—compute, databases, queues, identity—helps you choose the right services, control costs, and design for reliability. Multi-cloud is possible but adds complexity; most teams standardize on one provider.

## Key Concepts

- **IaaS**: Virtual machines, networks, storage (EC2, GCE, VMs)
- **PaaS**: Managed runtimes (Elastic Beanstalk, App Engine)
- **FaaS**: Serverless functions (Lambda, Cloud Functions)
- **Managed services**: RDS, SQS, S3—no ops on the underlying infra
- **Regions/AZs**: Geographic distribution for latency and resilience

## Code Example

```javascript
// Multi-provider abstraction (conceptual)
const providers = {
  aws: {
    compute: 'ECS',
    database: 'RDS',
    queue: 'SQS',
    storage: 'S3'
  },
  gcp: {
    compute: 'Cloud Run',
    database: 'Cloud SQL',
    queue: 'Pub/Sub',
    storage: 'Cloud Storage'
  },
  azure: {
    compute: 'Container Apps',
    database: 'Azure Database',
    queue: 'Service Bus',
    storage: 'Blob Storage'
  }
}

const provider = process.env.CLOUD_PROVIDER || 'aws'
const config = providers[provider]
```

```bash
# AWS CLI: Create infrastructure
aws ec2 run-instances --image-id ami-xxx --instance-type t3.micro
aws rds create-db-instance --db-instance-identifier mydb --engine postgres
```

## Under the Hood

Cloud providers run massive data centers; you get logical resources (VMs, buckets) that map to shared hardware. APIs create/update/delete resources. Billing is typically per resource and usage. Multi-AZ and multi-region provide redundancy.

## Common Mistakes

- Over-provisioning (cost)
- Single region (no disaster recovery)
- Ignoring IAM (overly permissive access)
- Vendor lock-in without abstraction
- Not using managed services (reinventing the wheel)

## Best Practices

- Use IaC (Terraform, CloudFormation) for reproducibility
- Prefer managed services over self-hosted
- Design for multi-AZ at minimum
- Implement cost monitoring and alerts
- Abstract provider-specific code where possible

## Summary

Cloud providers supply compute, storage, and managed services. Choose services that fit your workload; use IaC and IAM correctly. Plan for regions and cost.
