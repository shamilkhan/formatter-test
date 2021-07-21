# ✂️ ✨ Formatter

is a tool for string formatting

```ts
    // --> `Hello, world!`
    format("Hello, {name}!", { name: "world" }
    // --> `Hello, John Smith`
    format("Hello, {user.name.first} {user.name.last}!", {
      user: { name: { first: "John", last: "Smith" } },
    })
```
