# Context

## Concept

Context provides a way to pass data through the component tree without prop drilling. You create a context, provide a value at a level, and consume it in descendants with `useContext` or a Consumer. Context is for "global" or tree-scoped data (theme, auth, locale).

## Why It Matters

Prop drilling—passing props through many levels—is tedious and couples components. Context lets you skip levels. Use it for data that many components need: theme, user, language. Overuse causes unnecessary re-renders.

## Key Concepts

- `createContext(defaultValue)` creates a context
- `Context.Provider` supplies a value to the tree
- `useContext(Context)` reads the value in a descendant
- Consumers re-render when the context value changes
- Split contexts to avoid broad re-renders

## Code Example

```jsx
const ThemeContext = createContext("light")

function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  )
}

function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>Click</button>
}
```

## Under the Hood

React stores context values on the fiber. When a component uses useContext, it subscribes to that context. When the Provider's value changes, all consuming descendants re-render. Object identity matters—new object every render = re-render all.

## Common Mistakes

- Putting frequently changing values in context (causes wide re-renders)
- Creating context value inline: `value={{ user }}` creates new object each render
- Using context for state that could be props (overkill)
- Forgetting to wrap with Provider

## Best Practices

- Memoize context value: `useMemo(() => ({ user }), [user])`
- Split contexts (ThemeContext, AuthContext) to limit re-renders
- Use context for truly global data
- Consider composition or state management lib for complex state

## Summary

Context avoids prop drilling. Create, Provider, useContext. Memoize value to prevent re-renders. Split contexts. Use for theme, auth, locale—not for every prop.
