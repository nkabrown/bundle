# JS Switch Statement

Replace a JavaScript switch statement with curried function composition.

Original example from https://gist.github.com/Elli-P/cccaacfae68515c0cdab0e62aaa60538

```
// change the value of `education` to test your code
var education = "an Associate's degree";

// set the value of this based on a person's education
var salary = "";

// your code goes here
switch (education) {
    case "no high school diploma":
        salary += "$25,636";
        break;
    case "a high school diploma":
        salary += "$35,256";
        break;
    case "an Associate's degree":
        salary += "$41,496";
        break;
    case "a Bachelor's degree":
        salary += "$59,124";
        break;
    case "a Master's degree":
        salary += "$69,732";
        break;
    case "a Professional degree":
        salary += "$89,960";
        break;
    case "a Doctoral degree":
        salary += "$84,396";
        break;
  }

console.log ("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year.");
```

Example of a JavaScript switch statment made functional

```
const education = "an Associate's degree";

const switchcase = cases => key => key in cases ? cases[key] : 'unknown amount';

const salary = switchcase({
  "no high school diploma": "$25,636",
  "a high school diploma": "$35,256",
  "an Associate's degree": "$41,496",
  "a Bachelor's degree": "$59,124",
  "a Master's degree": "$69,732",
  "a Professional degree": "$89,960",
  "a Doctoral degree": "$84,396"
})(education);

console.log(`In 2015, a person with ${education} earned an average of ${salary}/year.`);
```

There are a lot of advantages to replacing the switch statement with currying functions. For example it's very reusable. We can apply any object with strings for values as the first argument.

```
const ageGroup = {
  "20-35": "$32,687",
  "36-45": "$51,433",
  "46-55": "$58,701",
  "56-70": "$55,378"
};

const educationLevel = {
  "no high school diploma": "$25,636",
  "a high school diploma": "$35,256",
  "an Associate's degree": "$41,496",
  "a Bachelor's degree": "$59,124",
  "a Master's degree": "$69,732",
  "a Professional degree": "$89,960",
  "a Doctoral degree": "$84,396"
};

const salaryByEducation = switchcase(educationLevel);
const salaryByAge = switchcase(ageGroup);
```

This is an example of partial application. We can pass these values around into other functions and then apply the key whenever we'd like to get a value back. But that is just the start, even better if we have just these two cases we can do a little rewriting and do this:

```
const switchcase = cases => optionalCases => key => key in cases ? cases[key] : switchcase(optionalCases)(cases)(key);

const bothCases = switchcase(educationLevel)(ageGroup)

bothCases("20-35") // => "$32,687"
bothCases("a Master's degree") // => "$69,732"
```

Awesome right!
