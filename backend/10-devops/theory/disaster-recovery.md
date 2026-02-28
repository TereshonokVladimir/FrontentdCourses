# Disaster Recovery

## Concept

Disaster Recovery (DR) is the process of restoring systems after a major failure—data center outage, region failure, ransomware, or data corruption. It involves backup strategies, recovery procedures, RTO (Recovery Time Objective), and RPO (Recovery Point Objective).

## Why It Matters

Disasters happen. Without a plan, recovery is chaotic and slow. RTO and RPO define how much downtime and data loss are acceptable. Backend engineers must design for failure and document recovery steps.

## Key Concepts

- **RTO**: Maximum acceptable downtime (e.g., 4 hours)
- **RPO**: Maximum acceptable data loss (e.g., 1 hour of transactions)
- **Backup**: Copies of data; full, incremental, differential
- **Replication**: Real-time or near-real-time copy to another region
- **Runbooks**: Step-by-step recovery procedures

## Code Example

```bash
# Database backup and restore (PostgreSQL)
# Backup
pg_dump -h db.example.com -U admin mydb | gzip > backup-$(date +%Y%m%d).sql.gz

# Restore
gunzip -c backup-20250228.sql.gz | psql -h db-new.example.com -U admin mydb
```

```yaml
# Terraform: Multi-region RDS replica for DR
resource "aws_db_instance" "primary" {
  identifier     = "api-db-primary"
  engine         = "postgres"
  instance_class = "db.t3.medium"
  multi_az       = true
  # ...
}

resource "aws_db_instance" "replica" {
  identifier     = "api-db-replica"
  replicate_source_db = aws_db_instance.primary.identifier
  instance_class = "db.t3.medium"
  availability_zone = "us-west-2a"
  # Cross-region read replica for DR
}
```

## Under the Hood

Backups are scheduled (cron, managed service); they copy data to durable storage (S3, another region). Replication streams changes to a standby. In a disaster, you promote the replica or restore from backup. DNS or load balancer config switches traffic to the recovered system.

## Common Mistakes

- No tested restore procedure (backup exists but restore fails)
- Backups in the same region as primary (region outage loses both)
- No RTO/RPO defined (unclear what "recovered" means)
- Missing runbooks (tribal knowledge)
- Not testing DR regularly (procedures go stale)

## Best Practices

- Define and document RTO and RPO
- Store backups in a different region
- Test restore at least quarterly
- Use replication for low RPO; backups for point-in-time recovery
- Maintain runbooks and keep them updated

## Summary

Disaster recovery restores systems after major failure. Define RTO/RPO; use backups and replication. Test restores regularly; document runbooks.
