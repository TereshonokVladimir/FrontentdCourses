# Practice: Crypto Utils

## Tasks

### Task 1
Create `hash(data, algorithm)` that returns a hex-encoded hash. Support SHA-256 and SHA-512. Use `crypto.createHash`. Add `hmac(data, key, algorithm)` for HMAC. Both accept string or Buffer input.

### Task 2
Implement `encrypt(plaintext, key)` and `decrypt(ciphertext, key)` using AES-256-GCM. Generate a random IV (12 bytes) and auth tag. Prepend IV to the ciphertext (or use a known format). Key can be 32 bytes or derived from a password using scrypt. Return Buffer or base64 string.

### Task 3
Create `hashPassword(password)` and `verifyPassword(password, hash)`. Use `crypto.scrypt` with a random salt. Store hash as `salt:derivedKey` (hex or base64). Verify by re-deriving and comparing with `crypto.timingSafeEqual`. Support configurable salt length and key length.

### Task 4
Implement `sign(data, privateKey)` and `verify(data, signature, publicKey)` for RSA. Use `crypto.createSign` and `crypto.createVerify`. Support PEM-encoded keys. Add a `generateKeyPair()` that returns `{ publicKey, privateKey }` in PEM format.

### Task 5
Build a secure token generator: `generateToken(length)` using `crypto.randomBytes` (url-safe base64). Add `hashToken(token)` for storing tokens (e.g., API keys): store only the hash, verify by hashing input and comparing with `timingSafeEqual`. Implement token rotation: `rotateToken(oldToken)` returns a new token and invalidates the old one (maintain a Set of invalidated token hashes with TTL).