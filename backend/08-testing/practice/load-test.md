# Practice: Load Test

## Tasks

### Task 1
Write a simple k6 (or Artillery) script that sends 100 requests to `GET /health` over 30 seconds. Use 10 virtual users. Assert all responses are 200. Run it and report RPS and p95 latency.

### Task 2
Create a load test for `GET /products` with 50 VUs for 1 minute. Add a threshold: p95 latency < 500ms, error rate < 1%. Run against a local server. Identify if any threshold is violated and document the baseline.

### Task 3
Build a load test that simulates a realistic flow: 70% GET /products, 20% GET /products/:id, 10% POST /cart/items. Use a CSV or array of product IDs. Run for 2 minutes. Report throughput and latency per endpoint.

### Task 4
Implement a stress test: gradually increase load from 10 to 200 VUs over 5 minutes. Record when error rate or latency degrades. Plot or log the "breaking point" (VUs or RPS where the system starts failing).

### Task 5
Create a load test suite: smoke (10 VUs, 1 min), load (50 VUs, 5 min), stress (ramp to 200 VUs). Add a spike test: 0 → 100 VUs in 10 seconds, hold 2 min. Integrate into CI or a nightly job. Document how to run and interpret results.
