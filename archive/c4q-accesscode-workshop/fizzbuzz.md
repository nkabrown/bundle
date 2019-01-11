# FizzBuzz

```javascript
function fizzbuzz(times) {
  for (var i = 1; i <= times; i++) {
    // you must test for both first
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(100);
```
