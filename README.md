# sensible-maybe

A pretty barebones Maybe implementation in TypeScript. Let's try to stay practical. You don't need to build your entire application with this thing.

[View the documentation](docs/README.md)

## Installing

    $ yarn add sensible-maybe

## Examples

```tsx
Maybe.of(getUser())
  .map(user => user.name)
  .getOrElse("Not signed in");

Maybe.of(getUser()).either(
  user => <a href="/account">{user.name}</a>,
  () => <a href="/login">Login</a>
);

Maybe.of(getUser())
  .filter(user => user.isAdmin)
  .map(user => `Admin: ${user.name}`)
  .getOrElse("Unauthorized!");

Maybe.of(getUser())
  .map(user => user.name)
  .forEach(name => console.log(name));
```
