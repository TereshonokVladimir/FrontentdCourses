# Classes

## Concept

Classes are syntactic sugar over prototypes. `class Name { }` defines a constructor and methods. `extends` sets up inheritance. `super` calls parent constructor or methods. Instance fields, static fields, private fields (`#`) are supported. Classes are not hoisted like function declarations.

## Why It Matters

Classes are the standard OOP syntax. React class components (legacy), Error subclasses, and many libraries use them. Understanding extends and super is needed for inheritance. Modern React prefers hooks, but classes appear in codebases.

## Key Concepts

- `class Name { constructor() {} method() {} }`
- `extends Parent` – inheritance
- `super()` – call parent constructor (must be first in constructor)
- `super.method()` – call parent method
- `static` – class-level method/property
- `#private` – private field (newer)

## Code Example

```javascript
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(this.name)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }
  speak() {
    super.speak()
    console.log("Woof!")
  }
}
```

## Under the Hood

Classes compile to constructor functions and prototype assignment. Extends sets up the prototype chain. Super is syntactic sugar for parent call. Private fields are enforced by the engine.

## Common Mistakes

- Forgetting super() in derived constructor
- Using this before super()
- Losing this in callbacks (bind or arrow)
- Overusing classes when functions suffice

## Best Practices

- Use for clear OOP structure
- Prefer composition over deep inheritance
- Use private fields for encapsulation
- Consider functional approach when appropriate

## Summary

Classes provide OOP syntax. Extends and super for inheritance. Use for structure; prefer composition. Private fields for encapsulation.
