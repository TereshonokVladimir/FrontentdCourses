# Practice: Quick JavaScript Exercises

## Tasks

### Task 1
Write a function that reverses a string. Use a loop or split/reverse/join. Write a function that checks if a string is a palindrome.

### Task 2
Write a function that returns the factorial of a number. Use recursion. Handle edge cases (0, negative). Write a function that returns the nth Fibonacci number.

### Task 3
Write a function that flattens an array one level: [1, [2, 3], 4] -> [1, 2, 3, 4]. Use flat or reduce. Then write one that flattens to any depth (recursion).

### Task 4
Write a function that removes duplicates from an array. Use Set. Preserve order. Handle objects? (Use Map with JSON.stringify as key, or a custom key function.)

### Task 5
Implement a simple pub/sub: createEventBus() returns { on(event, fn), emit(event, data), off(event, fn) }. Multiple listeners per event. off removes a specific listener. Use a Map or object to store listeners.
