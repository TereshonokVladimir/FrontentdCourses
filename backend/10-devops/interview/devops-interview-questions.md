# Interview Questions: DevOps

## Beginner

1. What is DevOps? How does it differ from traditional development and operations?
2. What is CI/CD? What is the difference between continuous delivery and continuous deployment?
3. What is a container? How does it differ from a virtual machine?
4. What is a Dockerfile? Name three common instructions and what they do.
5. What is Docker Compose? When would you use it?
6. What is Kubernetes? What problem does it solve?
7. What is infrastructure as code (IaC)? Name one tool for IaC.
8. What is a pipeline? What stages might a typical CI pipeline have?
9. What are environment variables? Why use them instead of hardcoding?
10. What is a health check? Why is it important for deployments?
11. What is a rolling deployment? How does it differ from a blue-green deployment?
12. What is monitoring? Name two metrics you might monitor for a backend API.
13. What are logs? Why would you aggregate logs from multiple services?
14. What is a secret? Why should secrets not be stored in code?
15. What is the difference between staging and production environments?

## Intermediate

1. Explain the difference between maxSurge and maxUnavailable in a Kubernetes rolling update. How would you configure them for zero-downtime deployment?
2. How would you implement blue-green deployment for a Node.js API? What considerations exist for database migrations?
3. What is the purpose of liveness vs readiness probes? When might a pod fail liveness but pass readiness?
4. How would you manage secrets in a Kubernetes deployment? What are the trade-offs of using Kubernetes Secrets vs external vaults?
5. Explain how Docker layer caching works. How would you order Dockerfile instructions to optimize build time?
6. What is Terraform state? Why use a remote backend with state locking?
7. How would you set up a CI pipeline that deploys to staging automatically but requires approval for production?
8. What are the four golden signals of monitoring? How would you implement them for a REST API?
9. What is SLO-based alerting? How does it differ from threshold-based alerting?
10. How would you implement canary deployment? What percentage of traffic would you start with and why?
11. What is the difference between Prometheus and Grafana? How do they work together?
12. How would you handle database migrations in a zero-downtime deployment?
13. What is a PodDisruptionBudget? When would you use it?
14. How would you implement log aggregation for a microservices architecture?
15. What is the difference between horizontal and vertical scaling in Kubernetes?
16. How would you secure a Docker image for production? What practices would you follow?
17. What is the expand-contract pattern for database migrations? When is it used?
18. How would you implement multi-environment configuration (dev, staging, prod) for an application?
19. What is a cold start in serverless? How can you mitigate it?
20. How would you design a disaster recovery plan? What are RTO and RPO?

## Advanced

1. Design a CI/CD pipeline for a microservices architecture with 10+ services. How would you handle build caching, parallelization, and deployment ordering?
2. How would you implement a zero-downtime deployment for a stateful service (e.g., one that holds WebSocket connections)?
3. Explain the trade-offs between Kubernetes, ECS, and serverless for deploying a backend API. When would you choose each?
4. How would you implement secrets rotation for a database without downtime?
5. Design a monitoring and alerting strategy for a system with 99.99% availability target. How would you avoid alert fatigue?
6. How would you implement distributed tracing across services? What data would you propagate and store?
7. Explain how you would achieve multi-region deployment with active-active traffic. What are the challenges?
8. How would you handle a thundering herd problem when a cache expires during high traffic?
9. Design a blue-green deployment system with automated rollback based on error rate and latency. What metrics and thresholds would you use?
10. How would you implement GitOps? What are the benefits and trade-offs compared to traditional CI/CD?
11. Explain the security implications of running containers. What would you do to harden a container for production?
12. How would you implement cost optimization for a cloud deployment? What strategies would you use?
13. Design a disaster recovery strategy for a system with RTO of 1 hour and RPO of 5 minutes. What components and processes would you need?
14. How would you debug a production issue where latency spiked but no errors were logged?
15. Explain the trade-offs of using a service mesh (e.g., Istio) vs. application-level load balancing.
16. How would you implement progressive delivery (canary, feature flags) for a breaking API change?
17. What is the difference between pull-based and push-based monitoring? When would you use each?
18. How would you implement infrastructure drift detection? What tools and processes would you use?
19. Design a backup and restore strategy for a system with strict compliance requirements (e.g., 7-year retention).
20. How would you run a chaos engineering experiment in production? What safeguards would you put in place?
