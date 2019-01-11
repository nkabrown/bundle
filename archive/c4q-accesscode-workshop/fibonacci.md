# Fibonacci Sequence

Write a function that takes in an integer and returns an array of that size filled with the Fibonacci sequence.

```javascript
function fibonacci(size) {
  // create an empty array to store our fibonacci sequence values
  var fibArray = [];
  
  // iterate the value of the size argument
  for (var i = 0; i < size; i++) {
    // if the array contains less than two elements push the value 1 into the array
    if (fibArray.length < 2) {
      fibArray.push(1);
    } else {
      // add together the values of the last two elements in the array
      var sum = fibArray[i - 1] + fibArray[i - 2];
      fibArray.push(sum);
    }
  }
  return fibArray;
}

fibonacci(10);
//=> [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
fibonacci(4);
//=> [1, 1, 2, 3]
```
