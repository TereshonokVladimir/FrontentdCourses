# Tables

## Concept

Tables structure tabular data with rows and columns. Use `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, and `<td>`. `<th>` is for headers; `<td>` is for data cells. Tables are for data, not layout—use CSS Grid or Flexbox for layout.

## Why It Matters

Proper table markup helps screen readers navigate and announce headers. Complex tables need `scope` and `headers` for accessibility. Tables are still the right choice for financial data, comparisons, and schedules.

## Key Concepts

- `<thead>`, `<tbody>`, `<tfoot>` group rows semantically
- `<th>` for headers; use `scope="col"` or `scope="row"`
- `<caption>` describes the table (good for accessibility)
- Use `colspan` and `rowspan` for merged cells

## Code Example

```html
<table>
  <caption>Monthly Revenue 2024</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$12,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$15,000</td>
    </tr>
  </tbody>
</table>
```

## Under the Hood

Browsers lay out tables using the table layout algorithm. `table-layout: fixed` speeds up rendering for wide tables. Screen readers use `<th>` and `scope` to associate headers with cells.

## Common Mistakes

- Using tables for page layout (use CSS instead)
- Missing `<th>` or using `<td>` for headers
- Forgetting `scope` on complex tables
- Nesting tables (avoid when possible)

## Best Practices

- Use tables only for tabular data
- Add `<caption>` for context
- Use `scope` on `<th>` for accessibility
- Consider responsive patterns (horizontal scroll, card layout on mobile)

## Summary

Tables are for data. Use thead/tbody/tfoot, th for headers with scope, and caption for description. Avoid tables for layout.
