# Images and Fonts

## Concept

Next.js provides an `Image` component that optimizes images (resize, WebP, lazy load). Use `next/image`. For fonts, use `next/font` to load and optimize fonts with zero layout shift. Both improve Core Web Vitals (LCP, CLS).

## Why It Matters

Images and fonts are often the largest assets. Unoptimized images hurt LCP. Font loading causes layout shift (FOUT/FOIT). next/image and next/font solve these. They're built-in and require minimal config.

## Key Concepts

- `Image`: src, width, height (or fill), alt required
- Automatic optimization: WebP, responsive srcset
- Lazy load by default (below viewport)
- `next/font`: import font, use in className
- Fonts are self-hosted, no external request

## Code Example

```jsx
import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Page() {
  return (
    <div className={inter.className}>
      <Image
        src="/hero.jpg"
        alt="Hero"
        width={800}
        height={600}
        priority
      />
    </div>
  )
}
```

## Under the Hood

next/image generates multiple sizes and formats. It serves the right one based on device and viewport. next/font downloads the font at build time, inlines it, and provides a className. CSS is generated to prevent layout shift.

## Common Mistakes

- Using img instead of Image (loses optimization)
- Missing width/height or fill (causes layout shift)
- Forgetting alt (accessibility)
- Using remote images without configuring domains in next.config

## Best Practices

- Use Image for all images
- Set priority for above-the-fold images
- Use next/font for text fonts
- Configure remote domains for external images

## Summary

next/image optimizes images. next/font optimizes fonts. Both improve performance. Image needs dimensions or fill. Fonts self-hosted. Configure domains for remote images.
