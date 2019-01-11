# Functions Workout

Functions represent computations to be performed.

A `return` statement causes a function to cease execution and return a value to the caller. If no value is specified the return statement will return the `undefined` value.

The difference between parameters and arguments. Parameters are used in function definition.

```javascript
function loop(array) { // array is a parameter that defines what is passed into the function
}
```

Arguments are used to call a function.

```javascript
loop([1, 2, 3]); // [1, 2, 3] is this functions argument. It is the actual array value passed into the function.
```

## What's wrong with this code? List out every problem:

```javascript
var 3TimesArgument = func(argument) {
  arg * 3 return
}

/*
  1. Variable identifiers cannot begin with an integer. Identifiers can begin with any letter, dollar sign ($),
  or underscore (_), but not a digit.
  2. 'func' is not the function declaration keyword 'function'. Keywords can't be shortened.
  3. 'argument' is a poor name for the parameter you are using to define your function. Give your parameters
  meaningful names that make it clear what you are giving to the function as input.
  4. You must reference your parameters exactly within the function's block. 'argument' is the name of the
  parameter. 'arg' is undefined.
  5. The return keyword must precede the expression you are seeking to return. return argument * 3
  6. JavaScript statements should be ended with a semicolon.
 */
 
 // correct, clearer, simpler
 var timesThree = function(num) {
   return num * 3;
 }
```

## Finish this function:

A perfect square is defined as a number that has a square-root that is a whole number. For example:

* 9 has a square root of 3, which is a whole number. It is a perfect square.
* 16 has a square root of 4, which is a whole number. It is a perfect square.
* 2 has a square root of approximately 1.414, which is NOT a whole number. It is NOT a perfect square.

I set up the conditional part of the isPerfectSquare function. It works because if the square-root of a number
and the rounded down value of that square-root is the same then it's a whole number, and thus the input number
is a perfect square.

```javascript
var isPerfectSquare = function(arg) {
  // Some code belongs here.
  // Hint: what variable needs to be created and assigned?
  var sqrtOfArg = Math.sqrt(arg);
  
  // Math.floor rounds a fractional number to the nearest lower whole number
  if(Math.floor(sqrtOfArg) == sqrtOfArg) {
    return true;
    // It's a perfect square!
  } else {
    return false;
    // It's not
  }
}

isPerfectSquare(9); // returns true
isPerfectSquare(16); // returns true
isPerfectSquare(2); // return false

// could also be done like this
var isPerfectSqaure = function(arg) {
  var sqrtOfArg = Math.sqrt(arg);
  if (sqrtOfArg % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
```

## Multiples of numbers

Write a function that takes as input a number, and returns a list of the first 20 multiples of that number.

```javascript
function twentyTimes(num) {
  // initialize an empty array to store our list of multiples
  var list = [];
  
  // iterate 20 times
  for (var i = 1; i <= 20; i++) {
    // add new multiples to the array using the array's push method
    list.push(i * 20);
  }
  
  return list;
}

// call our function
console.log(twentyTimes(10));
//=> "10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200"
```

## What does this function do?

```javascript
var MysteryFunction = function(input1, input2) {
  return MysteryFunction2(input1) + MysteryFunction2(input2);
}

var MysteryFunction2 = function(input) {
  if (input > 10) {
    return 10;
  } else {
    return input + 10;
  }
}

// What does it log?
console.log(MysteryFunction(15, 7));
//=> 27

// what is the highest number that could be returned? 40
// what is the lowest? 20
// what are some meaningful names for these MysteryFunctions?
// acceptableRange(input1, input2); and limitTo20(input);
```

## Let's try a harder one

```javascript
var MysteryFunction = function(input) {
  // input 23 and 23 % 5 equals 3
  if (MysteryFunction2(input % 5) > 10) {
    // 9 is not greater than 10 skip execution
    return MysteryFunction2(input % 3);
  }
  // return 9
  return MysteryFunction2(input % 4);
}

var MysteryFunction2 = function(input) {
  // input 3 the remainder of 23 % 5 for first test
  // input 3 the remainder of 23 % 4 for second test
  return input * 3; // return 9 for first test return 9 for the second test 
}

// What does it log?
console.log(MysteryFunction(23));
//=> 9
```

## Here's one with loops

```javascript
var MysteryFunction = function(input) {
  if (input.length > 4) {
    return MysteryFunction2(input, 3);
  }
  return MysteryFunction2(input, 2);
}

var MysteryFunction2 = function(input1, input2) {
  for (i = input2; i >= 0; i--) {
    input1.push(i);
  }
  return input1;
}

// What does it log?
console.log(MysteryFunction([4,5,6]));
//=> [4, 5, 6, 2, 1, 0]
// What about this call?
console.log(MysteryFunction([10,9,8,7,6]);
//=> [10, 9, 8, 7, 6, 3, 2, 1, 0]
```
