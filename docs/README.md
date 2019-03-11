
sensible-maybe
==============

A pretty barebones Maybe implementation in TypeScript. Let's try to stay practical. You don't need to build your entire application with this thing.

[View the documentation](docs/README.md)

Installing
----------

```
$ yarn add sensible-maybe
```

Example
-------

```typescript
import { Maybe } from "sensible-maybe";

Maybe.of(getUser())
  .map(user => user.profile)
  .map(profile => profile.name)
  .filter(name => name !== "Jerry")
  .orElse("Unknown")
  .map(name => `Name: ${name}`)
  .then(message => console.log(message));
```

## Index

### Classes

* [Maybe](classes/maybe.md)

### Type aliases

* [Nothing](#nothing)

---

## Type aliases

<a id="nothing"></a>

###  Nothing

**Ƭ Nothing**: *`null` \| `undefined`*

*Defined in [index.ts:1](https://github.com/rzane/sensible-maybe/blob/6749b97/src/index.ts#L1)*

___

