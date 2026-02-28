# Practice: Selectors and Specificity

## Tasks

### Task 1
Style a list using only descendant and child combinators: make direct children of `ul` have a border-left, but nested `ul` children should not. Use `ul > li` for direct children. Add a different style for `li` inside nested `ul`.

### Task 2
Use pseudo-classes to style a table: stripe every other row (`:nth-child(odd)`), highlight the first row (header), and add hover state to rows. Use `:first-child` and `:hover`. Ensure no !important.

### Task 3
Create a form with various inputs. Use attribute selectors: `input[type="text"]`, `input[type="email"]`, `input[required]`. Style `:focus` and `:invalid` states. Use `:not([type="submit"])` to style all inputs except the submit button.

### Task 4
Use `:is()` and `:where()` to simplify selectors. Create a rule that applies to `h1, h2, h3` using `:is()`. Create a low-specificity rule using `:where()`. Show the difference: `:where()` can be overridden by a single class; `:is()` uses the highest specificity in the list.

### Task 5
Use `:has()` to style a parent based on its children: style a `.form-group` that contains an `:invalid` input (red border). Style a `.card` that has an `img` differently from one that doesn't. Style a list that has more than 5 items. Document browser support considerations.
