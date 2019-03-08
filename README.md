# sensible-maybe

A pretty barebones Maybe implementation in TypeScript. Let's try to stay practical. You don't need to build your entire application with this thing.

## Installing

    $ yarn add sensible-maybe

## Example

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
