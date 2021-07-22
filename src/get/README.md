# Get

`get` is simple implementation of `lodash.get`

```ts
// --> "John"
get({ user: { name: { first: "John", last: "Smith" } } }, "user.name.first");
```
