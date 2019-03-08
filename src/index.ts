export type Nothing = null | undefined;

export interface Match<T, U> {
  just: (value: T) => U;
  nothing: () => U;
}

const isNothing = (value: any): value is null | undefined => {
  return value === null || value === undefined;
};

export class Maybe<T> {
  private _value: T | Nothing;

  public constructor(value: T | Nothing) {
    this._value = value;
  }

  public isNothing(): boolean {
    return isNothing(this._value);
  }

  public value(): T | undefined {
    return isNothing(this._value) ? undefined : this._value;
  }

  public valueOr<U>(defaultValue: U): T | U {
    return isNothing(this._value) ? defaultValue : this._value;
  }

  public map<U>(fn: (value: T) => U | Nothing): Maybe<U> {
    return new Maybe<U>(isNothing(this._value) ? undefined : fn(this._value));
  }

  public then(fn: (value: T) => void): this {
    if (!isNothing(this._value)) {
      fn(this._value);
    }

    return this;
  }

  public match<U>(match: Match<T, U>): U {
    return isNothing(this._value) ? match.nothing() : match.just(this._value);
  }
}

export const just = <T>(value: T) => new Maybe<T>(value);
export const nothing = <T>() => new Maybe<T>(undefined);
export const fromNullable = <T>(value: T | Nothing) => new Maybe<T>(value);
