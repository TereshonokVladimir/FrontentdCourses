# Practice: Metadata and SEO

## Tasks

### Task 1
Add metadata to the root layout: title with template "%s | My App", description, and viewport. Create a few pages and set page-specific title. Verify the template works: child page title should be "Page Title | My App". No semicolons.

### Task 2
Create a blog post page with generateMetadata. Fetch the post by slug. Return title, description (from post excerpt), and openGraph object with title and description. Add a blog layout with default metadata. Verify in browser devtools or a meta tag checker that the tags are correct.

### Task 3
Add JSON-LD structured data for a blog post. Create a component that renders a script tag with type="application/ld+json" and the structured data (Article schema). Include headline, author, datePublished, dateModified. Use the post data. Ensure it's valid JSON.

### Task 4
Implement a sitemap: create app/sitemap.js that returns an array of sitemap entries. Include the homepage and blog posts (from API or static list). Each entry has url, lastModified, changeFrequency, priority. Use the Next.js sitemap convention. Add a robots.txt that references the sitemap.

### Task 5
Build a complete SEO setup: metadata for all pages, generateMetadata for dynamic pages, JSON-LD for blog, sitemap, robots.txt. Add canonical URLs to prevent duplicate content. Add Twitter card meta. Create a reusable Metadata component or helper for common patterns. Document the SEO strategy. Test with a tool like Lighthouse or SEO extension.
