# HTML Comments

## Concept

Comments use `<!-- -->` syntax. Content between the delimiters is ignored by the browser. Comments are for developers—to document, temporarily disable code, or leave notes. They are sent to the client (visible in view-source) so never put sensitive data in them.

## Why It Matters

Comments improve maintainability and team communication. They can mark sections, explain non-obvious decisions, or disable code during debugging. Over-commenting clutters; strategic comments help.

## Key Concepts

- Syntax: `<!-- comment text -->`
- Cannot nest `--` inside (invalid)
- Visible in HTML source; not in rendered page
- Conditional comments (IE) are deprecated

## Code Example

```html
<!-- Main navigation -->
<nav>...</nav>

<!-- TODO: Add mobile menu -->
<!-- <div class="old-widget">...</div> -->

<!--
  Multi-line comment for longer explanations.
  Used when a single line isn't enough.
-->
```

## Under the Hood

The HTML parser skips everything between `<!--` and `-->`. Comments become Comment nodes in the DOM. They're included in the document size and sent over the network—minimizers often strip them in production.

## Common Mistakes

- Putting `--` inside a comment (breaks parsing)
- Leaving sensitive info (API keys, internal URLs)
- Over-commenting obvious code
- Using comments for large disabled blocks (use version control instead)

## Best Practices

- Comment why, not what (code shows what)
- Use comments for section markers in long files
- Remove or minimize comments in production builds
- Never put secrets in comments

## Summary

Comments use `<!-- -->`. They're for developers, visible in source, and ignored by the renderer. Use them sparingly for clarity; avoid nesting `--` and sensitive data.
