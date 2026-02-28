# Practice: Mapped Types

## Tasks

### Task 1
Create `ReadonlyDeep<T>` – recursive readonly. Create `Mutable<T>` – remove readonly from all properties. Create `Nullable<T>` – add null to each property. Use mapped types. Handle nested objects recursively (simplified: one level for Task 1).

### Task 2
Implement `Getters<T>` – for each key K in T, add `get${Capitalize<K>}: () => T[K]`. Use key remapping with `as`. Create `Setters<T>` similarly. Ensure it works with `{ name: string; age: number }`.

### Task 3
Create `PartialByKeys<T, K extends keyof T>` – make only keys K optional. Create `RequiredByKeys<T, K extends keyof T>` – make only keys K required. Use intersection of Pick and Partial/Omit. Add `OmitByKeys<T, K>` – omit keys K.

### Task 4
Implement `DeepPartial<T>` with mapped types. Handle arrays: `Array<T>` becomes `Array<DeepPartial<T>>`. Handle Date (keep as Date). Handle primitives (add undefined). Ensure no infinite recursion with self-referential types (use a depth limit or avoid).

### Task 5
Build `ApiToDto<T>` – convert API response to DTO: camelCase keys, Date strings to Date, exclude 'internal' fields. Use template literal types for key mapping. Create `DtoToApi<T>` – reverse. Use a combination of mapped types, conditional types, and key remapping. Document limitations.