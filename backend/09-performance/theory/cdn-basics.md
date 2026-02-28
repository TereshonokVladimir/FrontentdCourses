# CDN Basics

## Concept

A Content Delivery Network (CDN) is a distributed network of edge servers that cache and serve static assets (and sometimes dynamic content) from locations close to users. It reduces latency and offloads origin servers.

## Why It Matters

Latency is dominated by distance. A user in Tokyo hitting a server in Virginia adds ~150ms RTT. CDNs place copies near users, cutting latency and reducing load on the origin. Critical for global applications and static asset delivery.

## Key Concepts

- **Edge caching**: Content cached at PoPs (Points of Presence) worldwide
- **Cache keys**: URL, headers (e.g., Accept-Language) determine cache hit
- **Cache control**: `Cache-Control`, `CDN-Cache-Control` headers
- **Purge/invalidation**: Remove or update cached content before TTL
- **Origin**: Your backend; CDN fetches on cache miss

## Code Example

```javascript
// Set cache headers for CDN
res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400')
res.setHeader('Vary', 'Accept-Encoding')
res.json(staticData)

// Purge CDN cache on content update (e.g., Cloudflare API)
await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`, {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}` },
  body: JSON.stringify({ files: ['https://api.example.com/data/123'] })
})
```

## Under the Hood

User requests hit nearest edge. On miss, edge fetches from origin, caches, and serves. Subsequent requests from that region hit cache. TTL controls freshness; purge forces refresh.

## Common Mistakes

- Caching dynamic or user-specific content without proper keys
- No Vary header when content varies by header (e.g., Accept-Language)
- Overly long TTL for frequently updated content
- Not purging on updates (stale content)

## Best Practices

- Cache static assets with long TTL; use versioned URLs for cache busting
- Use short TTL or purge for dynamic content
- Set Vary for content that differs by request headers
- Monitor cache hit ratio; optimize keys and TTL

## Summary

CDNs reduce latency and origin load by caching at the edge. Configure cache headers, use purge for updates, and monitor hit rates.
