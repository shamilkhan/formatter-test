import { format } from ".";
import { ErrorMessages } from './errorMessages';

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

describe("Handle Errors | Prevent Incorrect behavior", () => {

  it("Throw error for using close curly bracket before the opening one", () => {
    expect(() => format("Hello }{world", {})).toThrowWithMessage(Error, ErrorMessages.closeBeforeOpen);
  });

  it("Pass bunch of opening curly brackets", () => {
    expect(() => format("}}} {{{", {})).toThrowWithMessage(Error, ErrorMessages.closeBeforeOpen);
  });

});