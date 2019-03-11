[sensible-maybe](../README.md) > [Maybe](../classes/maybe.md)

# Class: Maybe

Encapsulates a value that may or may not be present.

## Type parameters
#### T 
## Hierarchy

**Maybe**

## Index

### Methods

* [chain](maybe.md#chain)
* [expect](maybe.md#expect)
* [filter](maybe.md#filter)
* [forEach](maybe.md#foreach)
* [get](maybe.md#get)
* [getOrElse](maybe.md#getorelse)
* [isNothing](maybe.md#isnothing)
* [map](maybe.md#map)
* [orElse](maybe.md#orelse)
* [just](maybe.md#just)
* [nothing](maybe.md#nothing)
* [of](maybe.md#of)

---

## Methods

<a id="chain"></a>

###  chain

▸ **chain**<`U`>(fn: *`function`*): [Maybe](maybe.md)<`U`>

*Defined in [index.ts:92](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L92)*

Returns the result of applying the provided function to the value contained in the Just instance. If the instance is a Nothing, then a Nothing is returned.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** [Maybe](maybe.md)<`U`>

___
<a id="expect"></a>

###  expect

▸ **expect**(message: *`string`*): `T`

*Defined in [index.ts:71](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L71)*

Returns the value if the instance is a Just, otherwise a `TypeError` will be thrown with the provided message.

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |

**Returns:** `T`

___
<a id="filter"></a>

###  filter

▸ **filter**(fn: *`function`*): [Maybe](maybe.md)<`T`>

*Defined in [index.ts:107](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L107)*

Converts a Just to a Nothing if the provided function returns falsy.

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** [Maybe](maybe.md)<`T`>

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(fn: *`function`*): [Maybe](maybe.md)<`T`>

*Defined in [index.ts:117](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L117)*

Returns itself after applying the provided function to the value contained in the Just instance. If the instance is a Nothing, then the function will not be called. This method is intended for side-effects.

**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** [Maybe](maybe.md)<`T`>

___
<a id="get"></a>

###  get

▸ **get**(): `T` \| `undefined`

*Defined in [index.ts:55](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L55)*

Returns the value if the instance is a Just, otherwise `undefined` will be returned.

**Returns:** `T` \| `undefined`

___
<a id="getorelse"></a>

###  getOrElse

▸ **getOrElse**<`U`>(defaultValue: *`U`*): `T` \| `U`

*Defined in [index.ts:63](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L63)*

Returns the value if the instance is a Just, otherwise the provided default value will be returned.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| defaultValue | `U` |

**Returns:** `T` \| `U`

___
<a id="isnothing"></a>

###  isNothing

▸ **isNothing**(): `boolean`

*Defined in [index.ts:47](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L47)*

Returns `true` if the value is empty.

**Returns:** `boolean`

___
<a id="map"></a>

###  map

▸ **map**<`U`>(fn: *`function`*): [Maybe](maybe.md)<`U`>

*Defined in [index.ts:100](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L100)*

Transforms the value of a Just with the provided function, returning a new Just. If Nothing is received, Nothing will be returned.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** [Maybe](maybe.md)<`U`>

___
<a id="orelse"></a>

###  orElse

▸ **orElse**<`U`>(defaultValue: *`U`*): [Maybe](maybe.md)<`T` \| `U`>

*Defined in [index.ts:83](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L83)*

Returns itself if the instance is a Just, otherwise a `Maybe` containing the `defaultValue` will be returned.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| defaultValue | `U` |

**Returns:** [Maybe](maybe.md)<`T` \| `U`>

___
<a id="just"></a>

### `<Static>` just

▸ **just**<`T`>(value: *`T`*): [Maybe](maybe.md)<`T`>

*Defined in [index.ts:23](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L23)*

Constructs a Maybe instance that represents the existence of some value.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** [Maybe](maybe.md)<`T`>

___
<a id="nothing"></a>

### `<Static>` nothing

▸ **nothing**<`T`>(): [Maybe](maybe.md)<`T`>

*Defined in [index.ts:36](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L36)*

Constructs a Maybe instance that represents the absence of a value.

**Type parameters:**

#### T 

**Returns:** [Maybe](maybe.md)<`T`>

___
<a id="of"></a>

### `<Static>` of

▸ **of**<`T`>(value: *`T` \| [Nothing](../#nothing)*): [Maybe](maybe.md)<`T`>

*Defined in [index.ts:16](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L16)*

Constructs a Maybe instance that represents a given value.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` \| [Nothing](../#nothing) |

**Returns:** [Maybe](maybe.md)<`T`>

___

