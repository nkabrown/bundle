# Migrate Functions

## Migrate building a simple array

```javascript
var arrayBuilder = function(size) {
  // create an empty array to store our values
  var array = [];
  
  // iterate the value of the argument
  for (var i = 0; i < size; i++) {
    // append the value of i to our array
    array.push(i);
  }
  return array;
}

console.log(arrayBuilder(4));
//=> [0, 1, 2, 3]
```

## Migrate building an array that doubles the index

```javascript
var doubleTheIndex = function(size) {
  // create an empty array to store our values
  var array = [];
  
  // iterate the value of the argument
  for (var i = 0; i < size; i++) {
    // append double the value of i to our array
    array.push(i *  2);
  }
  return array;
}

console.log(doubleTheIndex(4));
//=> [0, 2, 4, 6]
```

## Migrate building an array whose odd indicies are double and even indicies quadruple

```javascript
function oddOrEvenResults(size) {
  // create an empty array to store our values
  var array = [];
  
  // all odd indices are doubled while all even indices are quadrupled
  for (var i = 0; i < size; i++) {
    // use javascript's remainder operator (is there any remainder when the index is divided by 2?)
    if (i % 2 === 0) {
      // quadruple the value of the index if even
      array[array.length] = i * 4;
    } else if (i % 2 === 1) {
      // double the value of the index if odd
      array[array.length] = i * 2;
    }
  }
  
  return array;
}

console.log(oddOrEvenResults(6));
//=> [0, 2, 8, 6, 16, 10]
```

## Migrate building an array of all of the whole numbers between two integers inclusive

```javascript
var inclusiveRange = function(lowerBound, upperBound) {
  // calculate the distance between the higher and lower values
  var  distance = upperBound - lowerBound;
  // create an empty array to store our values
  var range = [];
  
  // iterate the value of distance plus 1
  for (var i = 0; i <= distance; i++) {
  // append the value of the expression to the array using the array's length property
  range[range.length] = lowerBound + i;
  }
  
  return range;
}

console.log(inclusiveRange(0, 5);
//=> [0, 1, 2, 3, 4, 5]

// even better and more abstract handles any two numbers in any order
var inclusiveRange = function(num1, num2) {
  // initialize variables to range boundaries
  var lowerBound,
      upperBound;
  
  // determine the larger and smaller number    
  if (num1 > num2) {
    upperBound = num1;
    lowerBound = num2;
  } else {
    upperBound = num2;
    lowerBound = num1;
  }
  
  // calculate the distance between the higher and lower values
  var  distance = upperBound - lowerBound;
  // create an empty array to store our values
  var range = [];
  
  // iterate the value of distance plus 1
  for (var i = 0; i <= distance; i++) {
  // append the value of the expression to the array using the array's length property
  range[range.length] = lowerBound + i;
  }
  
  return range;
}

console.log(inclusiveRange(5, 0);
//=> [0, 1, 2, 3, 4, 5]
```

## Migrate finding the mean (average) value of the elements within an array

```javascript
var averageValue = function(array) {
  var sum = 0;

  // iterate over each element of the array
  for (var i = 0; i < array.length; i++) {
    // reassign the value of sum to the current value of sum plus the value of the array element
    sum = sum + array[i];
  }
  
  // the mean value is the total sum of the array elements divided by the number of elements
  return sum / array.length;
}
```
