import { format } from ".";
import { ErrorMessages } from "./errorMessages";

describe("Pass Simple strings or templates", () => {
  it("Pass Empty string", () => {
    expect(format("", {})).toBe("");
  });

  it("Pass string without templates", () => {
    expect(format("foo bar", {})).toBe("foo bar");
  });

  it("Pass Template with variable", () => {
    expect(format("Hello, {name}!", { name: "world" })).toBe("Hello, world!");
  });

  it("Pass 2 templates", () => {
    expect(format("{foo}, {bar}!", { foo: "Hello", bar: "Kitty" })).toBe("Hello, Kitty!");
  });

  it("Pass Numeric and Boolean values as arguments", () => {
    expect(format("{foo} {bar}", { foo: 42, bar: false })).toBe("42 false");
  });

  it("Pass string with long white spaces", () => {
    const stringWithWhiteSpaces = " Some string  with  __long__  white spaces ";
    expect(format(stringWithWhiteSpaces, {})).toBe(stringWithWhiteSpaces);
  });
});

describe("Nested Props case", () => {
  it("Some nested Props case", () => {
    expect(
      format("Hello, {user.name.first} {user.name.last}!", {
        user: { name: { first: "John", last: "Smith" } },
      })
    ).toBe("Hello, John Smith!");
  });

  it("Access to properties on different levels of nesting", () => {
    expect(
      format("Hello, {user.name.first} {user.name.last} ({user.role})", {
        user: { name: { first: "John", last: "Smith" }, role: "admin" },
      })
    ).toBe("Hello, John Smith (admin)");
  });
});

describe("Handle Errors | Prevent Incorrect behavior", () => {
  it("Throw error for using close curly bracket before the opening one", () => {
    expect(() => format("Hello }{world", {})).toThrowWithMessage(
      Error,
      ErrorMessages.closeBeforeOpen
    );
  });

  it("Pass bunch of opening curly brackets", () => {
    expect(() => format("}}} {{{", {})).toThrowWithMessage(Error, ErrorMessages.closeBeforeOpen);
  });
});
