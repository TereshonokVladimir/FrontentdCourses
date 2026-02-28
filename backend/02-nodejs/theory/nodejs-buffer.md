# Node.js Buffer

## Concept

Buffer is a fixed-size raw binary data container. Used for file I/O, network, crypto. Similar to Uint8Array but with extra methods. Created with Buffer.alloc(), Buffer.from(), or from streams.

## Why It Matters

Network and file data arrive as bytes. Buffers are the bridge between binary and JavaScript. Encoding (utf8, base64, hex) matters for correctness. Misuse can cause encoding bugs or security issues.

## Key Concepts

- Buffer is Uint8Array subclass
- Encoding: utf8, base64, hex, ascii
- Buffer.alloc(size), Buffer.from(string, encoding)
- Don't use new Buffer() (deprecated, use alloc/from)
- Buffer.concat() for combining

## Code Example

```javascript
const buf = Buffer.from('Hello', 'utf8')
console.log(buf.toString('base64'))  // SGVsbG8=

const decoded = Buffer.from('SGVsbG8=', 'base64').toString('utf8')

// Binary from stream
const chunks = []
readable.on('data', (chunk) => chunks.push(chunk))
readable.on('end', () => {
  const full = Buffer.concat(chunks)
})
```

## Under the Hood

Buffer allocates memory outside V8 heap. Encoding converts between string and bytes. base64 is 4 chars per 3 bytes. Buffer.from(string) defaults to utf8.

## Common Mistakes

- new Buffer(size) or new Buffer(string) (deprecated, use alloc/from)
- Assuming default encoding (be explicit)
- Buffer in JSON (serializes as object; use base64)
- Not handling partial UTF-8 in chunks

## Best Practices

- Use Buffer.alloc() or Buffer.from()
- Specify encoding explicitly
- Use Buffer.isBuffer() for checks
- Be careful with user input (encoding attacks)

## Summary

Buffer: binary data, encodings. Use alloc/from, not new Buffer(). Specify encoding.
