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
* [either](maybe.md#either)
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

*Defined in [index.ts:111](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L111)*

Returns the result of applying the provided function to the value contained in the Just instance. If the instance is a Nothing, then a Nothing is returned.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| fn | `function` |

**Returns:** [Maybe](maybe.md)<`U`>

___
<a id="either"></a>

###  either

▸ **either**<`L`,`R`>(whenJust: *`L` \| `function`*, whenNothing: *`R` \| `function`*): `L` \| `R`

*Defined in [index.ts:87](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L87)*

Returns the result of `whenJust` if the value is a Just, otherwise the result of `whenNothing` will be returned.

**Type parameters:**

#### L 
#### R 
**Parameters:**

| Name | Type |
| ------ | ------ |
| whenJust | `L` \| `function` |
| whenNothing | `R` \| `function` |

**Returns:** `L` \| `R`

___
<a id="expect"></a>

###  expect

▸ **expect**(message: *`string`*): `T`

*Defined in [index.ts:75](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L75)*

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

*Defined in [index.ts:126](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L126)*

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

*Defined in [index.ts:136](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L136)*

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

*Defined in [index.ts:59](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L59)*

Returns the value if the instance is a Just, otherwise `undefined` will be returned.

**Returns:** `T` \| `undefined`

___
<a id="getorelse"></a>

###  getOrElse

▸ **getOrElse**<`U`>(defaultValue: *`U`*): `T` \| `U`

*Defined in [index.ts:67](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L67)*

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

*Defined in [index.ts:51](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L51)*

Returns `true` if the value is empty.

**Returns:** `boolean`

___
<a id="map"></a>

###  map

▸ **map**<`U`>(fn: *`function`*): [Maybe](maybe.md)<`U`>

*Defined in [index.ts:119](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L119)*

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

*Defined in [index.ts:102](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L102)*

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

*Defined in [index.ts:27](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L27)*

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

*Defined in [index.ts:40](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L40)*

Constructs a Maybe instance that represents the absence of a value.

**Type parameters:**

#### T 

**Returns:** [Maybe](maybe.md)<`T`>

___
<a id="of"></a>

### `<Static>` of

▸ **of**<`T`>(value: *`T` \| [Nothing](../#nothing)*): [Maybe](maybe.md)<`T`>

*Defined in [index.ts:20](https://github.com/rzane/sensible-maybe/blob/bc883f7/src/index.ts#L20)*

Constructs a Maybe instance that represents a given value.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` \| [Nothing](../#nothing) |

**Returns:** [Maybe](maybe.md)<`T`>

___

