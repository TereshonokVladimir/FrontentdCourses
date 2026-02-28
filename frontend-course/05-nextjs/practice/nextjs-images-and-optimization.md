# Practice: Images and Optimization

## Tasks

### Task 1
Add a static image to the homepage. Use next/image. Place an image in the public folder. Set width, height, and alt. Add a priority prop for above-the-fold. Verify in devtools that the image is optimized (check srcset, format). No semicolons.

### Task 2
Create a gallery page with 6 images. Use next/image for each. Use the fill prop with a parent that has position relative and aspect ratio. Create a responsive grid: 1 col mobile, 2 tablet, 3 desktop. Add lazy loading (default)—verify images load as you scroll. Add a placeholder (blur) for one image using placeholder="blur" and blurDataURL.

### Task 3
Use a remote image from a CDN (e.g., picsum.photos). Configure the domain in next.config.js (images.domains or images.remotePatterns). Add the image with next/image. Handle different sizes: use sizes prop for responsive images. Verify the correct srcset is generated.

### Task 4
Add next/font: import a Google font (e.g., Inter) and apply it to the body in the root layout. Import a second font for headings. Use the className from the font. Verify no layout shift (CLS). Add a custom font from a local file if possible (e.g., fonts/MyFont.woff2).

### Task 5
Optimize a full page: hero with priority image, gallery with lazy-loaded images, custom fonts. Run Lighthouse and check LCP, CLS. Ensure images have correct dimensions. Add an image that uses the loader prop for a custom image service (mock). Document the image optimization strategy. Consider using the Image component for all images in the project.
