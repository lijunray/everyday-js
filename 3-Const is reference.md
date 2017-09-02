In ES6, `const` and `let` were introduced. `const` means the variable can't be "changed" once it gets a value. But here the word "changed" means its reference, not its actual value. See examples below.

```
const a = 1;
a = 2; // Wrong
```
`a` is referenced to a static value `1`, and you can't change `a`'s reference.

However, you can do:
```
// True
const a = [];
a.push(1); // [1]

// Wrong
a = [1];
```
`const` is more like the feature in back end language, which denotes a reference instead of the values. So here you can add as many values as you want to the array `a` using `push()`, since this doesn't change `a`'s reference, but you can never reassign `a` to another value, nor array, string, etc.

Same as array, object has the same feature:
```
// True
const obj = { a: 1 };
obj.b = 2; // { a: 1, b: 2 }

// Wrong
obj = { a: 1 }; // don't reassign
```
