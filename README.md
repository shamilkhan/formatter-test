# ✂️ ✨ Formatter

`Formatter` is a tool that allows you to create complex template strings

```ts
  // --> `Hello, world!`
  format("Hello, {name}!", { name: "world" }
  // --> `Hello, John Smith`
  format("Hello, {user.name.first} {user.name.last}!", {
    user: { name: { first: "John", last: "Smith" } },
  })
```

## Build with

<div>
    <img src=https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg alt="Typescript" width="30" height="30"/>
    <img src=https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg alt="Jest" width="30" height="30"/>
    <img src=https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg alt="Node.js" width="30" height="30"/>
    <img src=https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg alt="Yarn" width="30" height="30"/>
</div>

## Scripts:

Install Dependencies:

```bash
    yarn install
```

Development:

```bash
    yarn dev
```

Run tests:

```bash
    yarn test
```
