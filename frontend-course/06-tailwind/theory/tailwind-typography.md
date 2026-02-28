# Typography

## Concept

Tailwind provides typography utilities: font size (`text-sm`, `text-xl`), font weight (`font-normal`, `font-bold`), line height (`leading-tight`, `leading-relaxed`), letter spacing (`tracking-wide`), and font family (`font-sans`, `font-mono`). The `@tailwindcss/typography` plugin adds prose classes for article content.

## Why It Matters

Typography affects readability and hierarchy. Consistent type scale creates rhythm. The prose plugin handles long-form content (headings, lists, links) without custom CSS.

## Key Concepts

- Size: `text-xs` through `text-9xl`
- Weight: `font-thin` to `font-black`
- Line height: `leading-none`, `leading-tight`, `leading-normal`, `leading-relaxed`
- Font: `font-sans`, `font-serif`, `font-mono`
- Prose: `prose`, `prose-lg`, `prose-gray` (plugin)

## Code Example

```html
<h1 class="text-3xl font-bold tracking-tight text-gray-900">
  Heading
</h1>
<p class="text-base leading-relaxed text-gray-600">
  Body text with good readability.
</p>
<article class="prose prose-lg max-w-none">
  <!-- Rich content styled automatically -->
</article>
```

## Under the Hood

Typography utilities map to font-size, font-weight, line-height, etc. The prose plugin adds a comprehensive set of styles for common HTML elements inside a prose container. It uses the theme's type scale.

## Common Mistakes

- Using too many font sizes (stick to a scale: sm, base, lg, xl)
- Ignoring line height for long text (use leading-relaxed)
- Prose on dark background without prose-invert
- Mixing font families inconsistently

## Best Practices

- Define a type scale (3–5 sizes)
- Use font-weight for hierarchy
- prose for markdown/HTML content
- Test readability (line length, contrast)

## Summary

Size, weight, line-height, font. Use a consistent scale. prose for articles. Plugin for rich content. Mind readability.
