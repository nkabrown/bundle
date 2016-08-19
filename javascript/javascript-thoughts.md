# TOC

[If Statements](#if-statements)

[Modulo](#modulo)

[Console String Formatting](#string-formatting-specifiers-in-consolelog)

[Reduce](#reduce)

# If Statements

```
  if (Expression) Statement else Statement
  ```
The conditional expression in an if statement is coerced to a boolean value.
  
  Therefore javascript's falsy values can be used in the right situations to check for missing values.
  
  For example: 
  ```javascript
  if (name) return `Hello, ${name}!`;
  else return 'Hello, World!';
  ```
  or in an expression statement that produces a value:
  ```javascript
  name ? `Hello, ${name}!` : 'Hello, World!';
  ```
  
  Javascript's falsy values are `undefined, null, false, 0, NaN, ''`.
  
# Modulo

Wolfram defines the modulo operation as "m mod n is the remainder on division of m by n.
The sign of m mod n for real m, n is always the same sign of n."

Python has a true modulo operator.
```python
-5 % 2
# => 1

5 % -2
# => -1
```

JavaScript does not have a modulo operator. According to the ECMAScript Specification "The
% *MultiplicativeOperator* yields the remainder of its operands from an implied division; the
left operand is the dividend and the right operand is the divisor."

Most importantly **"The sign of the result equals the sign of the dividend."**

JavaScript has a remainder operator, not a modulo operator.
```javascript
-5 % 2
// => -1

5 % -2
// => 1
```
  
# String Formatting Specifiers in console.log

https://github.com/DeveloperToolsWG/console-object/blob/master/api.md#consolelogobject--object-

| Specifier         | Description                                                                        |
|:----------------- |:-----------------------------------------------------------------------------------| 
| `%s`              | Formats the value as a string (cooercing via toString() if necessary)              |
| `%d`, `%i`        | Formats the value as an integer                                                    |
| `%f`              | Formats the value as a floating point value                                        |
| `%o`              | Formats the value as an expandable DOM Element (or JavaScript Object if it is not) |
| `%O`              | Formats the value as an expandable JavaScript Object                               |
| `%c`              | Formats the output string according to CSS styles you provide                      |

```javascript
var array = [1, 3, 5, 6, 2];

console.log('We have this many elements in %s and the elements are %o', array, array);
//=> We have this many elements in Array[5] and the elements are [1, 3, 5, 6, 2]
```

# Reduce

The reduce method compresses the elements of an array to a single value, even if that single value is another array of elements.

**Array.prototype.reduce( callbackfn [, initialValue])**


> callbackfn is called with four arguments: the previousValue (value from the previous call to callbackfn),
> the currentValue (value of the current element), the currentIndex, and the object being traversed

```javascript
var a = [1, 2, 3, 4, 5];

// return the sum of the elements of the array
a.reduce((prev, cur) => {
  return prev + cur;
});
//=> 15

// reduce the array to an object whose sum
// property is the sum of the elements of the array
a.reduce((prev, cur) => {
  // give a value of 1 for when the property is non-existent
  prev.sum = prev.sum + cur || 1;
  return prev;
}, {})
//=> { sum: 15 }

// reduce an array to a single element that is 
// the sum of all elements of the array
a.reduce((prev, cur) => {
  // give a value of 1 for when the array is empty
  prev[0] = prev[0] + cur || 1;
  return prev;
}, [])
//=> [15]
```