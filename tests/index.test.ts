import { fromNullable } from "../src";

describe("isNothing", () => {
  test("when the value is present", () => {
    expect(fromNullable(0).isNothing()).toEqual(false);
    expect(fromNullable("").isNothing()).toEqual(false);
    expect(fromNullable([]).isNothing()).toEqual(false);
  });

  test("when the value is nothing", () => {
    expect(fromNullable(null).isNothing()).toEqual(true);
    expect(fromNullable(undefined).isNothing()).toEqual(true);
  });
});

describe("value", () => {
  test("when the value is present", () => {
    expect(fromNullable(0).value()).toEqual(0);
    expect(fromNullable("").value()).toEqual("");
    expect(fromNullable([]).value()).toEqual([]);
  });

  test("when the value is nothing", () => {
    expect(fromNullable(null).value()).toBeUndefined();
    expect(fromNullable(undefined).value()).toBeUndefined();
  });
});

describe("valueOr", () => {
  test("when the value is preset", () => {
    expect(fromNullable(0).valueOr(9)).toEqual(0);
    expect(fromNullable("").valueOr(9)).toEqual("");
    expect(fromNullable([]).valueOr(9)).toEqual([]);
  });

  test("when the value is nothing", () => {
    expect(fromNullable(null).valueOr(9)).toEqual(9);
    expect(fromNullable(undefined).valueOr(9)).toEqual(9);
  });
});

describe("map", () => {
  test("when the value is present", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = fromNullable(0).map(fn);

    expect(maybe.value()).toEqual(5);
    expect(fn).toHaveBeenCalledWith(0);
  });

  test("when the value is nothing", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = fromNullable<number>(null).map(fn);

    expect(maybe.value()).toEqual(undefined);
    expect(fn).not.toHaveBeenCalled();
  });
});

describe("then", () => {
  test("when the value is present", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = fromNullable(0).then(fn);

    expect(maybe.value()).toEqual(0);
    expect(fn).toHaveBeenCalledWith(0);
  });

  test("when the value is nothing", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = fromNullable<number>(null).then(fn);

    expect(maybe.value()).toEqual(undefined);
    expect(fn).not.toHaveBeenCalled();
  });
});

describe("match", () => {
  test("when the value is present", () => {
    const just = jest.fn(v => v + 5);
    const nothing = jest.fn(() => 9);

    const value = fromNullable(0).match({
      just,
      nothing
    });

    expect(value).toEqual(5);
    expect(just).toHaveBeenCalledWith(0);
    expect(nothing).not.toHaveBeenCalled();
  });

  test("when the value is nothing", () => {
    const just = jest.fn(v => v + 5);
    const nothing = jest.fn(() => 9);

    const value = fromNullable<number>(null).match({
      just,
      nothing
    });

    expect(value).toEqual(9);
    expect(just).not.toHaveBeenCalled();
    expect(nothing).toHaveBeenCalled();
  });
});
