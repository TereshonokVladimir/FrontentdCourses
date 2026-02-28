# Security

## Concept

Nest provides security building blocks: Helmet (headers), CORS, rate limiting, CSRF, and JWT auth. Security is layered: transport (HTTPS), headers, auth, validation, and authorization. Production APIs require all layers configured correctly.

## Why It Matters

APIs are prime targets for attacks. Missing headers, weak auth, or validation gaps lead to data breaches. Nest's modules reduce boilerplate but you must configure them properly. Security is not optional in production.

## Key Concepts

- Helmet: sets security headers (XSS, clickjacking, etc.)
- CORS: restrict origins; don't use `*` in production
- Rate limiting: throttle requests per IP
- JWT: stateless auth; validate and verify tokens
- Validation: whitelist DTOs to prevent mass assignment

## Code Example

```typescript
// main.ts
app.use(helmet())
app.enableCors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') ?? [],
  credentials: true,
})
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
)

// JWT strategy
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    })
  }
  validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email }
  }
}
```

## Under the Hood

Helmet sets HTTP headers (Content-Security-Policy, X-Frame-Options, etc.). CORS middleware checks Origin header. Rate limiter uses in-memory or Redis store. JWT strategy validates signature and extracts payload.

## Common Mistakes

- CORS `origin: '*'` with credentials (insecure)
- Weak JWT secret or no expiration
- No rate limiting; vulnerable to brute force
- Exposing stack traces or internal errors

## Best Practices

- Use Helmet, restrict CORS, enable rate limiting
- Strong JWT secret, short expiry, refresh tokens
- Validate all input; whitelist DTOs
- Log security events; monitor for anomalies

## Summary

Security is layered: Helmet, CORS, rate limit, JWT, validation. Configure each for production. Never expose secrets or internal errors.
