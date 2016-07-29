# Array Workout

## Find min & max within an array

Given an array write a program that returns the **largest** element. Then try the **smallest** element.

```javascript
// construct an array of values
var arr = [25, 101, 66, 10, 99];

/* 
  find the numerically largest value in the array
  by checking the value of each element in the array
  and storing the higher values
 */
 
// initialize a variable for our comparison test
var largestElement = arr[0];

// iterate over each element of the array
// show that array[i] = i;
for (var i = 0; i < array.length; i++) {
  // conditional test
  if (largestElement < arr[i]) {
    // variable reassignment if expression test is true
    largestElement = arr[i];
  }
}

console.log(largestElement);
//=> 101

/*
  find the numerically smallest value in the array
  by checking the value of each element in the array
  and storing the lower values.
 */
 
// initialize a variable for our comparison test 
var smallestElement = arr[0];

// iterate over each element of the array
for (var i = 0; i < arr.length; i++) {
  // conditional test
  if (smallestElement > arr[i]) {
    // variable reassignment if expression test is true
    smallestElement = arr[i];
  }
}

console.log(smallestElement);
//=> 10
```

## Detect if an element is within an array

Given an array and a target value, write a program that returns whether or not the target value exists within the array. Hint: what type will the result value be? What should its default value be?

```javascript
var result = false;
// construct an array of values
var arr = [25, 101, 66, 10, 99];

var target = 77;

/*
  determine whether a value is or is not collected within an array
 */

// iterate over each element of the array
for (var i = 0; i < arr.length; i++) {
  // conditional test
  if (arr[i] === target) {
    // variable reassignment if expression test is true
    result = true;
  }
}

console.log(result);
//=> false

// Do we what to introduce .indexOf() array method?
target = 66;
if (arr.indexOf(target) > -1) {
  // variable reassignment if expression test is true
  result = true;
}

console.log(result);
//=> true
```

## Build a simple array

Given an integer size, write a program that builds an array of that size where each element is its own index.

```javascript
var integerSize = 10;

// create an empty array to store our values
var array = [];

/*
  return an array that collects a list of the indices
  belonging to an array the size of the input value
 */

// iterate the value of integerSize
for (var i = 0; i < integerSize; i++) {
  // append the value of i to the array using the array's length property
  array[array.length] = i;
}

console.log(array);
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// each element value double it own index
for (var i =0; i < integerSize; i++) {
  array[array.length] = i * 2;
}

console.log(array);
//=> [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

// all odd indices are doubled while all even indices are quadrupled
for (var i = 0; i < integerSize; i++) {
  // use javascript's remainder operator (is there any remainder when the index is divided by 2?)
  if (i % 2 === 0) {
    // quadruple the value of the index if even
    array[array.length] = i * 4;
  } else if (i % 2 === 1) {
    // double the value of the index if odd
    array[array.length] = i * 2;
  }
}

console.log(array);
//=> [0, 2, 8, 6, 16, 10, 24, 14, 32, 18]
```

## Range of numbers

Given two integers less than 1000, make an array with all the numbers between the two integers (inclusive).

```javascript
var lowerBound = 20,
    upperBound = 25,
    // create an empty array to store our values
    range = [];
    
 /* 
  return an array that collects all of the whole numbers
  between any two integers inclusive
 */
 
// iterate the value of distance plus 1
for (var i = lowerBound; i <= upperBound; i++) {
  // append the value of the expression to the array using the array's push method
  range.push(i);
}

console.log(range);
//=> [20, 21, 22, 23, 24, 25]
```

## Average value

Given an array of numbers, find the average (mean) value. You can do this by adding up all the numbers and then dividing by how many you added together.

```javascript
var inputArray = [5, 15, 10, 30, 25];

var sum = 0,
    mean;

/*
  return the mean value of all of the elements in an array
  the mean, sometimes called the average, is a common way to
  measure the center of a distribution of data
 */
 
// iterate over each element of the array
for (var i = 0; i < inputArray.length; i++) {
  // reassign the value of sum to the current value of sum plus the value of the array element
  sum = sum + inputArray[i];
}

console.log(sum);
//=> 85
// calculate the mean value of the elements of the array
mean = sum / inputArray.length;
console.log(mean);
//=> 17
```
