# TOC

[If Statements](#if-statements)

[Modulo](#modulo)

[Console String Formatting](#string-formatting-specifiers-in-consolelog)

[Reduce](#reduce)

[Division](#division)

[Arrays](#arrays)

[Template Literals](#template-literals)

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

https://console.spec.whatwg.org/#formatter

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

console.log('This is my data %o and it has %d elements.', array, array.length);
//=> This is my data ▶ Array[5] and it has 5 elements.

// template literals will print the array elements to the console
console.log(`This is my data ${array} and it has ${array.length} elements.`);
//=> This is my data 1,3,5,6,2 and it has 5 elements.
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

# Division

JavaScript does not do integer division. The multiplicative `/` operator applied to two operands always returns a double precision floating point number. This rule from C will not hold true: `If the quotient a/b is representable, the expression
(a/b)*b + a%b shall equal a;`

```c
#include <stdlib.h>
#include <stdio.h>

int main(void) {
  size_t a = 13;
  size_t b = 5;

  size_t x = (a == (a / b) * b + (a % b));

  printf("The result is %s\n", x == 0 ? "false" : "true");

  return EXIT_SUCCESS;
}
```

In JavaScript `a === (a / b) * b + (a % b)` will return `true` only when the result has no fractional part as a remainder. You can replicate integer division only by forcing the quotient to throw away the fractional part.

```javascript
var a = 13;
var b = 5;

var x = a === (Math.floor(a / b)) * b + (a % b);

console.log('The result is %s', x);
```

# Arrays

Iterate through an array from the last element to the first

```javascript
for (let i = array.length; i-- > 0;) {
  console.log(i);
}
```

# + Operator

Why is the `+` operator both the addition operation and string concatenation? It's because the definition of a natural number is a string of ones. The sum of numbers `n` and `m` is the combination of the strings of ones. 1111 + 111 = 1111111 Addition is the concatenation of two strings of ones.

# Template Literals

Template literals are a string literal value that allows multiple lines and for interpolation. Interpolation is the ability to insert the values of expressions into a string.
