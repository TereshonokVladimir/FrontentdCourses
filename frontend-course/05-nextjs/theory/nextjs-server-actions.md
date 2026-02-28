# Server Actions

## Concept

Server Actions are async functions that run on the server. They can be called from Client Components (forms or programmatically). Add "use server" at the top of a file or at the start of a function. They're an alternative to API routes for mutations. No need to create an endpoint—call the function directly.

## Why It Matters

Server Actions simplify form handling and mutations. No API route, no fetch. They run on the server with access to DB and secrets. They integrate with the form action prop. They're the recommended way to handle mutations in Next.js 14+.

## Key Concepts

- "use server" at file top or function start
- Can be passed to form action or called with startTransition
- Receive FormData when used with form action
- Can use redirect(), revalidatePath(), cookies
- Serialization: only serializable arguments (no functions, etc.)

## Code Example

```jsx
// actions.js
"use server"

export async function createPost(formData) {
  const title = formData.get("title")
  await db.posts.create({ data: { title } })
  revalidatePath("/blog")
  redirect("/blog")
}

// Form
<form action={createPost}>
  <input name="title" />
  <button type="submit">Create</button>
</form>

// Programmatic
"use client"
import { createPost } from "./actions"
function Client() {
  const handleClick = () => {
    createPost(new FormData()) // or pass object
  }
}
```

## Under the Hood

Server Actions are RPC-like. The client sends a serialized request to the server. The server runs the function and returns the result. Next.js handles the wire format. Used with forms, the form's action is the Server Action.

## Common Mistakes

- Passing non-serializable values (functions, class instances)
- Forgetting "use server"
- Not using revalidatePath after mutations
- Using for reads (use Server Component fetch instead)

## Best Practices

- Use for mutations (create, update, delete)
- Validate input server-side
- revalidatePath or revalidateTag after mutations
- Use with form action for progressive enhancement

## Summary

Server Actions run on server. "use server" in file or function. Use with form action or programmatically. Mutations only. Revalidate after. Serializable args only.
