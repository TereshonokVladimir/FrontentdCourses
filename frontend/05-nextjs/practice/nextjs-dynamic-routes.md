# Practice: Dynamic Routes

## Tasks

### Task 1
Create a dynamic route: app/products/[id]/page.js. Fetch product by id from JSONPlaceholder (use /posts/[id] as products). Display the product. Handle loading with loading.js. Handle not-found: if fetch returns 404, call notFound(). No semicolons.

### Task 2
Add generateStaticParams for the products route. Return ids 1 through 10. Build the app and verify those pages are pre-rendered. Add dynamicParams = false—verify that visiting /products/99 returns 404. Set dynamicParams = true again for on-demand generation of other ids.

### Task 3
Create a nested dynamic route: app/products/[id]/reviews/[reviewId]/page.js. Use mock review data (object with productId and reviewId). Display the review. Add a link from the product page to its reviews. Use generateStaticParams for both segments—return a few combinations.

### Task 4
Implement a catch-all route: app/docs/[...slug]/page.js. The slug is an array: /docs/a/b/c → slug = ["a", "b", "c"]. Create a simple docs structure (object or file-based). Render the doc content based on the slug path. Add a sidebar that lists all docs and highlights the current path. Handle /docs (empty slug) as the index.

### Task 5
Build an optional catch-all: app/shop/[[...slug]]/page.js. /shop shows the shop index. /shop/category shows category. /shop/category/product shows product. Use one page that handles all cases based on slug length. Add generateStaticParams for known paths. Add breadcrumbs. Ensure 404 for invalid paths (e.g., /shop/invalid). Document the routing structure.
