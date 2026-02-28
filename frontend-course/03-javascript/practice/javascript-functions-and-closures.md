# Practice: Functions and Closures

## Tasks

### Task 1
Create a function that returns a function: the inner function adds a number to a value passed to the outer function. Example: const add5 = makeAdder(5); add5(3) // 8. Use closure.

### Task 2
Implement a counter factory: createCounter() returns an object with increment(), decrement(), and getValue(). The count is private (closure). Each call to createCounter has its own count.

### Task 3
Create a debounce function: debounce(fn, delay) returns a function that, when called, waits `delay` ms before calling fn. If called again before delay, reset the timer. Use setTimeout and closure.

### Task 4
Implement a throttle function: throttle(fn, limit) ensures fn is called at most once per `limit` ms. Unlike debounce, throttle fires immediately and then at intervals. Use for scroll or resize handlers.

### Task 5
Create a memoize function: memoize(fn) returns a wrapped function that caches results by arguments. Same arguments return cached value. Use a Map or object. Handle non-primitive args (JSON.stringify for key, or WeakMap for objects). Test with a slow function (e.g., fibonacci).
