# HTML Entities

## Concept

Entities represent special characters that would otherwise be interpreted as HTML or are hard to type. Syntax: `&name;` or `&#code;`. Common ones: `&lt;` (<), `&gt;` (>), `&amp;` (&), `&quot;` ("), `&nbsp;` (non-breaking space). Use them when you need to display reserved characters literally.

## Why It Matters

Without entities, `<` and `>` could break the HTML structure. `&` in URLs can truncate attributes. Entities ensure characters render correctly and don't break parsing. They're also used for symbols (©, €, →) that may not be in your charset.

## Key Concepts

- `&lt;` `&gt;` `&amp;` `&quot;` `&#39;` – reserved characters
- `&nbsp;` – non-breaking space (prevents line break)
- `&copy;` `&reg;` `&trade;` – symbols
- `&#1234;` – numeric decimal; `&#x4A;` – numeric hex

## Code Example

```html
<!-- Reserved characters -->
<p>Use &lt;div&gt; for blocks and &amp; for ampersands.</p>
<a href="?a=1&amp;b=2">Link with params</a>

<!-- Symbols -->
<p>&copy; 2024 Company. All rights reserved.</p>
<p>Price: &euro;99 &rarr; Buy now</p>

<!-- Non-breaking space -->
<p>Dr.&nbsp;Smith will see you now.</p>
```

## Under the Hood

The HTML parser replaces entities with the corresponding Unicode character before building the DOM. Named entities are defined in the HTML spec. Numeric entities work for any Unicode code point.

## Common Mistakes

- Forgetting the semicolon (`&amp` vs `&amp;`)
- Using entities when plain characters work (UTF-8 handles most)
- Overusing `&nbsp;` for spacing (use CSS margin/padding)
- Wrong numeric code (check Unicode charts)

## Best Practices

- Use entities for `<`, `>`, `&` in text
- Use `&amp;` in URLs inside attributes
- Prefer UTF-8 and actual characters for symbols when possible
- Use CSS for spacing, not multiple `&nbsp;`

## Summary

Entities encode special characters: `&lt;` `&gt;` `&amp;` and symbols. Use them for reserved chars and when typing is impractical. Always include the trailing semicolon.
