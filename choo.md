# Choo Notes

[choo](https://github.com/yoshuawuyts/choo)

Models are where state is contained and methods for updating the state are defined. All logic is centralized within models.

Views are functions that return a DOM tree of elements.

choo's tagged template string html builder is the [yo-yo](https://github.com/maxogden/yo-yo) library — A tiny library for building modular UI components using DOM diffing and ES6 tagged template literals.

the yo-yo data binding pattern is **data down, actions up**

choo uses uni-directional data flow which means that all data in the application follows the same life cycle pattern.

To build an app first import the choo module and the html builder from choo then initialize the app

**importing `choo-log` is a necessity for development**

```javascript
const log = require('choo-log');
const choo = require('choo');
const html = require('choo/html'); // importing the yo-yo library

const app = choo();
app.use(log());
```

## Principles

MV of MVC — seperation of concerns

uni-directional data flow — all data follows the same life cycle pattern

**Important Note** you cannot omit `<body>` element tags from index.html as per Google style guidelines, etc. Must be included or the Mutation Observer will throw a TypeError. `<body>` tags are not optional.

**Important Note** tagged templates and template literals can take interpolated expressions...note expressions but not statements.

See https://github.com/kvnneff/hackernews-choo/tree/master/test for examples of a choo app tested with [tape](https://github.com/substack/tape)
