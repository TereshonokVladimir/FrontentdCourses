# CSS Organization and Methodology

## Concept

As CSS grows, organization matters. Methodologies: BEM (Block-Element-Modifier), utility-first (Tailwind), SMACSS, ITCSS. Key ideas: avoid specificity wars, make classes reusable, separate structure from skin. Use variables for tokens. Consider splitting by component or by layer (base, components, utilities).

## Why It Matters

Unorganized CSS becomes unmaintainable. Specificity wars, duplicate code, and "what does this class do?" slow development. A clear structure makes onboarding easier and refactoring safer.

## Key Concepts

- BEM: `.block__element--modifier`
- Single responsibility: one class, one purpose
- Design tokens: colors, spacing in variables
- Layer order: reset → base → components → utilities
- Avoid deep nesting (max 2–3 levels)

## Code Example

```css
/* BEM */
.card { }
.card__title { }
.card__body { }
.card--featured { }

/* Design tokens */
:root {
  --color-primary: #007bff;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --radius: 8px;
}

/* Layer structure */
/* 1. Reset */
/* 2. Base (typography, body) */
/* 3. Components */
/* 4. Utilities */
```

## Under the Hood

Methodologies are conventions—the browser doesn't care. They reduce cognitive load and prevent conflicts. Preprocessors and build tools can enforce or generate classes.

## Common Mistakes

- Inconsistent naming
- Mixing methodologies
- No clear file structure
- Global styles with high specificity

## Best Practices

- Pick one methodology and stick to it
- Use a consistent file/folder structure
- Document design tokens
- Keep specificity low and flat

## Summary

Organize CSS with methodology (BEM, utility-first) and layers. Use design tokens. Keep specificity low. Consistency and structure prevent chaos as the codebase grows.
