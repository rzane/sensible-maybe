import { Maybe } from "../src";

describe("isNothing", () => {
  test("when the value is present", () => {
    expect(Maybe.of(0).isNothing()).toEqual(false);
    expect(Maybe.of("").isNothing()).toEqual(false);
    expect(Maybe.of([]).isNothing()).toEqual(false);
  });

  test("when the value is nothing", () => {
    expect(Maybe.of(null).isNothing()).toEqual(true);
    expect(Maybe.of(undefined).isNothing()).toEqual(true);
  });
});

describe("get", () => {
  test("when the value is present", () => {
    expect(Maybe.of(0).get()).toEqual(0);
    expect(Maybe.of("").get()).toEqual("");
    expect(Maybe.of([]).get()).toEqual([]);
  });

  test("when the value is nothing", () => {
    expect(Maybe.of(null).get()).toBeUndefined();
    expect(Maybe.of(undefined).get()).toBeUndefined();
  });
});

describe("getOrElse", () => {
  test("when the value is preset", () => {
    expect(Maybe.of(0).getOrElse(9)).toEqual(0);
    expect(Maybe.of("").getOrElse(9)).toEqual("");
    expect(Maybe.of([]).getOrElse(9)).toEqual([]);
  });

  test("when the value is nothing", () => {
    expect(Maybe.of(null).getOrElse(9)).toEqual(9);
    expect(Maybe.of(undefined).getOrElse(9)).toEqual(9);
  });
});

describe("expect", () => {
  test("when the value is preset", () => {
    expect(Maybe.of(0).expect("foo")).toEqual(0);
    expect(Maybe.of("").expect("foo")).toEqual("");
    expect(Maybe.of([]).expect("foo")).toEqual([]);
  });

  test("when the value is nothing", () => {
    expect(() => Maybe.of(null).expect("foo")).toThrow(new TypeError("foo"));
    expect(() => Maybe.of(undefined).expect("foo")).toThrow(
      new TypeError("foo")
    );
  });
});

describe("orElse", () => {
  test("when the value is present", () => {
    const maybe = Maybe.just(1).orElse(7);
    expect(maybe.get()).toEqual(1);
  });

  test("when the value is nothing", () => {
    const maybe = Maybe.nothing<number>().orElse(7);
    expect(maybe.get()).toEqual(7);
  });
});

describe("map", () => {
  test("when the value is present", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = Maybe.just(0).map(fn);

    expect(maybe.get()).toEqual(5);
    expect(fn).toHaveBeenCalledWith(0);
  });

  test("when the value is nothing", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = Maybe.nothing<number>().map(fn);

    expect(maybe.get()).toBeUndefined();
    expect(fn).not.toHaveBeenCalled();
  });
});

describe("chain", () => {
  test("when the value is present", () => {
    const fn = jest.fn(v => Maybe.just(v + 5));
    const maybe = Maybe.just(0).chain(fn);

    expect(maybe.get()).toEqual(5);
    expect(fn).toHaveBeenCalledWith(0);
  });

  test("when the value is nothing", () => {
    const fn = jest.fn(v => Maybe.just(v + 5));
    const maybe = Maybe.nothing<number>().chain(fn);

    expect(maybe.get()).toBeUndefined();
    expect(fn).not.toHaveBeenCalled();
  });
});

describe("filter", () => {
  test("when the value is nothing", () => {
    const original = Maybe.nothing();
    const result = original.filter(() => true);

    expect(result).toBe(original);
    expect(result.get()).toBeUndefined();
  });

  test("when the predicate is truthy", () => {
    const original = Maybe.just(1);
    const result = original.filter(v => v === 1);

    expect(result).toBe(original);
    expect(result.get()).toEqual(1);
  });

  test("when the predicate is falsy", () => {
    const original = Maybe.just(1);
    const result = original.filter(v => v !== 1);

    expect(result).not.toBe(original);
    expect(result.get()).toBeUndefined();
  });
});

describe("forEach", () => {
  test("when the value is present", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = Maybe.just(0).forEach(fn);

    expect(maybe.get()).toEqual(0);
    expect(fn).toHaveBeenCalledWith(0);
  });

  test("when the value is nothing", () => {
    const fn = jest.fn(v => v + 5);
    const maybe = Maybe.nothing<number>().forEach(fn);

    expect(maybe.get()).toBeUndefined();
    expect(fn).not.toHaveBeenCalled();
  });
});
