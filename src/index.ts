export type Nothing = null | undefined;

const isNothing = (value: any): value is null | undefined => {
  return value === null || value === undefined;
};

const isFunction = (value: any): value is Function => {
  return typeof value === "function";
};

/**
 * Encapsulates a value that may or may not be present.
 */
export class Maybe<T> {
  private value: T | Nothing;

  /**
   * Constructs a Maybe instance that represents a given value.
   */
  public static of<T>(value: T | Nothing): Maybe<T> {
    return new Maybe(value);
  }

  /**
   * Constructs a Maybe instance that represents the existence of some value.
   */
  public static just<T>(value: T): Maybe<T> {
    if (isNothing(value)) {
      throw new TypeError(
        "The argument passed to `Maybe.just` cannot be `undefined` or `null`."
      );
    }

    return new Maybe(value);
  }

  /**
   * Constructs a Maybe instance that represents the absence of a value.
   */
  public static nothing<T>(): Maybe<T> {
    return new Maybe();
  }

  private constructor(value?: T | Nothing) {
    this.value = value;
  }

  /**
   * Returns `true` if the value is empty.
   */
  public isNothing(): boolean {
    return isNothing(this.value);
  }

  /**
   * Returns the value if the instance is a Just, otherwise `undefined`
   * will be returned.
   */
  public get(): T | undefined {
    return isNothing(this.value) ? undefined : this.value;
  }

  /**
   * Returns the value if the instance is a Just, otherwise the provided
   * default value will be returned.
   */
  public getOrElse<U>(defaultValue: U): T | U {
    return isNothing(this.value) ? defaultValue : this.value;
  }

  /**
   * Returns the value if the instance is a Just, otherwise a `TypeError`
   * will be thrown with the provided message.
   */
  public expect(message: string): T {
    if (isNothing(this.value)) {
      throw new TypeError(message);
    }

    return this.value;
  }

  /**
   * Returns the result of `whenJust` if the value is a Just, otherwise
   * the result of `whenNothing` will be returned.
   */
  public either<L, R>(
    whenJust: L | ((value: T) => L),
    whenNothing: R | (() => R)
  ): L | R {
    if (isNothing(this.value)) {
      return isFunction(whenNothing) ? whenNothing() : whenNothing;
    }

    return isFunction(whenJust) ? whenJust(this.value) : whenJust;
  }

  /**
   * Returns itself if the instance is a Just, otherwise a `Maybe` containing
   * the `defaultValue` will be returned.
   */
  public orElse<U>(defaultValue: U): Maybe<T | U> {
    return isNothing(this.value) ? new Maybe<U>(defaultValue) : this;
  }

  /**
   * Returns the result of applying the provided function to the value
   * contained in the Just instance. If the instance is a Nothing, then
   * a Nothing is returned.
   */
  public chain<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    return isNothing(this.value) ? new Maybe<U>() : fn(this.value);
  }

  /**
   * Transforms the value of a Just with the provided function, returning
   * a new Just. If Nothing is received, Nothing will be returned.
   */
  public map<U>(fn: (value: T) => U | Nothing): Maybe<U> {
    return new Maybe<U>(isNothing(this.value) ? undefined : fn(this.value));
  }

  /**
   * Converts a Just to a Nothing if the provided function returns falsy.
   */
  public filter(fn: (value: T) => any): Maybe<T> {
    return isNothing(this.value) || fn(this.value) ? this : new Maybe();
  }

  /**
   * Returns itself after applying the provided function to the value
   * contained in the Just instance. If the instance is a Nothing, then
   * the function will not be called. This method is intended for
   * side-effects.
   */
  public forEach(fn: (value: T) => void): Maybe<T> {
    if (!isNothing(this.value)) {
      fn(this.value);
    }

    return this;
  }
}
