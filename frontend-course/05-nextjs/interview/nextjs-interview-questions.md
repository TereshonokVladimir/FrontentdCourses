# Interview Questions: Next.js

## Beginner

1. What is Next.js? How does it differ from Create React App?
2. What is the App Router? Where are routes defined?
3. What is the difference between a page and a layout?
4. What is a Server Component? What is a Client Component?
5. When do you use "use client"?
6. How do you create a dynamic route (e.g., /blog/[slug])?
7. What is the Link component? Why use it instead of an anchor tag?
8. How do you fetch data in a Server Component?
9. What is an API route? Where do you create one?
10. What is the difference between static and dynamic rendering?
11. What does generateStaticParams do?
12. How do you add metadata (title, description) to a page?
13. What is the public folder used for?
14. How do you use environment variables in Next.js?
15. What is the difference between getServerSideProps and Server Components? (or: What replaced getServerSideProps?)

## Intermediate

1. Explain the difference between Server and Client Components. When would you use each?
2. How does Next.js handle caching? What is the default cache behavior for fetch?
3. What is revalidation? Explain time-based and on-demand revalidation.
4. What are Server Actions? How do they differ from API routes?
5. How do you protect routes (e.g., require authentication)?
6. What is middleware? What can you do with it?
7. Explain the loading.js and error.js conventions. When does each run?
8. What is streaming? How does Suspense relate to it?
9. How do you implement a 404 page?
10. What is the difference between redirect() and router.push()?
11. How do you pass data from a Server Component to a Client Component?
12. What is generateMetadata? When would you use it?
13. How does next/image optimize images?
14. What is the Edge Runtime? Where does middleware run?
15. How do you handle form submissions in Next.js? (Server Actions vs API routes)
16. What is the difference between force-static and force-dynamic?
17. How do you use cookies in Next.js? (Server vs Client)
18. What is the difference between revalidatePath and revalidateTag?
19. How do you configure CORS for API routes?
20. What is hydration? How does it work with Server Components?

## Advanced

1. Explain the Next.js caching layers (Data Cache, Full Route Cache, Router Cache).
2. How does the App Router handle client-side navigation? What is soft navigation?
3. What is the RSC payload? How does it differ from traditional HTML?
4. How would you implement incremental static regeneration (ISR) in the App Router?
5. Explain how Server Actions are serialized and invoked from the client.
6. What is the difference between a rewrite and a redirect in middleware?
7. How does Next.js handle code splitting? What gets bundled for the client?
8. What is partial prerendering (PPR)? How does it work?
9. How would you implement internationalization (i18n) in Next.js?
10. What security considerations exist for Server Actions?
11. How do you optimize a Next.js app for Core Web Vitals?
12. What is the Turbopack? How does it differ from webpack?
13. How would you implement a BFF (Backend for Frontend) pattern with Next.js?
14. Explain the difference between static export and standard Next.js deployment.
15. How do you handle large file uploads in Next.js?
16. What is the purpose of the Route Segment Config (dynamic, revalidate, etc.)?
17. How would you implement real-time features (WebSockets) with Next.js?
18. What is the difference between pages/ and app/ directory?
19. How does Next.js handle CSS? (CSS Modules, Tailwind, CSS-in-JS)
20. How would you debug a slow page in Next.js? What tools would you use?
