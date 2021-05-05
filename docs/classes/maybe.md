[sensible-maybe](../README.md) / [Exports](../modules.md) / Maybe

# Class: Maybe<T\>

Encapsulates a value that may or may not be present.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [chain](maybe.md#chain)
- [either](maybe.md#either)
- [expect](maybe.md#expect)
- [filter](maybe.md#filter)
- [forEach](maybe.md#foreach)
- [get](maybe.md#get)
- [getOrElse](maybe.md#getorelse)
- [isNothing](maybe.md#isnothing)
- [map](maybe.md#map)
- [orElse](maybe.md#orelse)
- [just](maybe.md#just)
- [nothing](maybe.md#nothing)
- [of](maybe.md#of)

## Methods

### chain

▸ **chain**<U\>(`fn`: (`value`: T) => [*Maybe*](maybe.md)<U\>): [*Maybe*](maybe.md)<U\>

Returns the result of applying the provided function to the value
contained in the Just instance. If the instance is a Nothing, then
a Nothing is returned.

#### Type parameters:

| Name |
| :------ |
| `U` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: T) => [*Maybe*](maybe.md)<U\> |

**Returns:** [*Maybe*](maybe.md)<U\>

Defined in: [index.ts:111](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L111)

___

### either

▸ **either**<L, R\>(`whenJust`: L \| (`value`: T) => L, `whenNothing`: R \| () => R): L \| R

Returns the result of `whenJust` if the value is a Just, otherwise
the result of `whenNothing` will be returned.

#### Type parameters:

| Name |
| :------ |
| `L` |
| `R` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `whenJust` | L \| (`value`: T) => L |
| `whenNothing` | R \| () => R |

**Returns:** L \| R

Defined in: [index.ts:87](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L87)

___

### expect

▸ **expect**(`message`: *string*): T

Returns the value if the instance is a Just, otherwise a `TypeError`
will be thrown with the provided message.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `message` | *string* |

**Returns:** T

Defined in: [index.ts:75](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L75)

___

### filter

▸ **filter**<S\>(`fn`: (`value`: T) => value is S): [*Maybe*](maybe.md)<S\>

Converts a Just to a Nothing if the provided function returns falsy.

#### Type parameters:

| Name |
| :------ |
| `S` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: T) => value is S |

**Returns:** [*Maybe*](maybe.md)<S\>

Defined in: [index.ts:126](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L126)

▸ **filter**(`fn`: (`value`: T) => *any*): [*Maybe*](maybe.md)<T\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: T) => *any* |

**Returns:** [*Maybe*](maybe.md)<T\>

Defined in: [index.ts:127](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L127)

___

### forEach

▸ **forEach**(`fn`: (`value`: T) => *void*): [*Maybe*](maybe.md)<T\>

Returns itself after applying the provided function to the value
contained in the Just instance. If the instance is a Nothing, then
the function will not be called. This method is intended for
side-effects.

#### Parameters:

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: T) => *void* |

**Returns:** [*Maybe*](maybe.md)<T\>

Defined in: [index.ts:138](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L138)

___

### get

▸ **get**(): *undefined* \| T

Returns the value if the instance is a Just, otherwise `undefined`
will be returned.

**Returns:** *undefined* \| T

Defined in: [index.ts:59](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L59)

___

### getOrElse

▸ **getOrElse**<U\>(`defaultValue`: U): T \| U

Returns the value if the instance is a Just, otherwise the provided
default value will be returned.

#### Type parameters:

| Name |
| :------ |
| `U` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `defaultValue` | U |

**Returns:** T \| U

Defined in: [index.ts:67](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L67)

___

### isNothing

▸ **isNothing**(): *boolean*

Returns `true` if the value is empty.

**Returns:** *boolean*

Defined in: [index.ts:51](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L51)

___

### map

▸ **map**<U\>(`fn`: (`value`: T) => [*Nothing*](../modules.md#nothing) \| U): [*Maybe*](maybe.md)<U\>

Transforms the value of a Just with the provided function, returning
a new Just. If Nothing is received, Nothing will be returned.

#### Type parameters:

| Name |
| :------ |
| `U` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: T) => [*Nothing*](../modules.md#nothing) \| U |

**Returns:** [*Maybe*](maybe.md)<U\>

Defined in: [index.ts:119](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L119)

___

### orElse

▸ **orElse**<U\>(`defaultValue`: U): [*Maybe*](maybe.md)<T \| U\>

Returns itself if the instance is a Just, otherwise a `Maybe` containing
the `defaultValue` will be returned.

#### Type parameters:

| Name |
| :------ |
| `U` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `defaultValue` | U |

**Returns:** [*Maybe*](maybe.md)<T \| U\>

Defined in: [index.ts:102](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L102)

___

### just

▸ `Static`**just**<T\>(`value`: T): [*Maybe*](maybe.md)<T\>

Constructs a Maybe instance that represents the existence of some value.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T |

**Returns:** [*Maybe*](maybe.md)<T\>

Defined in: [index.ts:27](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L27)

___

### nothing

▸ `Static`**nothing**<T\>(): [*Maybe*](maybe.md)<T\>

Constructs a Maybe instance that represents the absence of a value.

#### Type parameters:

| Name |
| :------ |
| `T` |

**Returns:** [*Maybe*](maybe.md)<T\>

Defined in: [index.ts:40](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L40)

___

### of

▸ `Static`**of**<T\>(`value`: T \| [*Nothing*](../modules.md#nothing)): [*Maybe*](maybe.md)<T\>

Constructs a Maybe instance that represents a given value.

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `value` | T \| [*Nothing*](../modules.md#nothing) |

**Returns:** [*Maybe*](maybe.md)<T\>

Defined in: [index.ts:20](https://github.com/rzane/sensible-maybe/blob/1bc8939/src/index.ts#L20)
