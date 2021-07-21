import { format, ErrorMessages } from ".";

test("Simple Formatter", () => {
  expect(format("Hello, {name}!", { name: "world" })).toBe("Hello, world!");
});

test("Nested Props", () => {
  expect(
    format("Hello, {user.name.first} {user.name.last}!", {
      user: { name: { first: "John", last: "Smith" } },
    })
  ).toBe("Hello, John Smith!");
});

test("Pass empty String", () => {
  expect(format("", {})).toBe("");

  const stringWithWhiteSpaces = " Some string  with  __long__  white spaces ";
  expect(format(stringWithWhiteSpaces, {})).toBe(stringWithWhiteSpaces);
});

test("Throw Error with incorrect strings", () => {
  expect(() => format("Hello }{world", {})).toThrowWithMessage(Error, ErrorMessages.closeBeforeOpen);
  expect(() => format("}}} {{{", {})).toThrowWithMessage(Error, ErrorMessages.closeBeforeOpen);
});