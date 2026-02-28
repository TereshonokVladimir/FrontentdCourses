# Blue-Green Deployment

## Concept

Blue-Green deployment maintains two identical production environments (Blue and Green). At any time, one is live and one is idle. You deploy to the idle environment, test it, then switch traffic to it. The previous environment stays ready for instant rollback.

## Why It Matters

Blue-Green eliminates the "in-between" state of rolling deployments. The switch is atomic—either old or new, never mixed. Rollback is instant: switch traffic back. Essential for critical services where any partial failure is unacceptable.

## Key Concepts

- **Two environments**: Identical capacity; one active, one standby
- **Instant switch**: Load balancer or DNS points to new environment
- **Zero-downtime**: New env is fully up before switch
- **Instant rollback**: Switch back if issues detected
- **Resource cost**: 2x capacity during deployment (or scale down idle)

## Code Example

```bash
# Simplified blue-green switch script
#!/bin/bash
CURRENT=$(kubectl get svc api -o jsonpath='{.spec.selector.version}')
if [ "$CURRENT" = "blue" ]; then
  NEW="green"
else
  NEW="blue"
fi

# Deploy to idle environment
kubectl set image deployment/api-$NEW api=my-registry/api:$NEW_VERSION
kubectl rollout status deployment/api-$NEW

# Health check on new env
curl -f https://api-$NEW.internal/health || exit 1

# Switch traffic
kubectl patch svc api -p "{\"spec\":{\"selector\":{\"version\":\"$NEW\"}}}"

echo "Switched to $NEW"
```

```yaml
# Service selector determines which deployment receives traffic
apiVersion: v1
kind: Service
metadata:
  name: api
spec:
  selector:
    app: api
    version: blue  # or green
  ports:
    - port: 80
      targetPort: 3000
```

## Under the Hood

Both deployments run simultaneously. The service/load balancer uses a selector (e.g., `version: blue`) to route traffic. Changing the selector shifts all traffic. The idle environment can be scaled down to save cost or kept warm for fast rollback.

## Common Mistakes

- Database migrations that aren't backward compatible (old code can't run)
- Not verifying the new environment before switch
- Stale connections to old environment after switch
- Forgetting to run migrations on the new environment
- Session state in the old environment (users get logged out)

## Best Practices

- Ensure DB migrations are backward compatible (expand-contract)
- Run smoke tests on new env before switch
- Use connection draining for graceful switch
- Keep idle env warm for fast rollback
- Document and automate the switch procedure

## Summary

Blue-Green uses two identical environments; deploy to idle, test, switch traffic. Instant rollback by switching back. Plan for database compatibility and connection draining.
