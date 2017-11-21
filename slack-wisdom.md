**Keep track of helpful learnings shared in Slack channels**

Be a better Slack citizen and never just provide a link. If you give a link, also give a digest or a learning. Give the person who reads your Slack message a takeaway they can have regardless of whether they follow the link. Be a responsible linker, and let's not just link for the sake of linking. Move away from linking and toward communicating.

—

In the shell you can use brace expansion to create multiple directories all in the same command. For every project you might need a src directory with js, css, and assets directories. You can create them all at once `mkdir -p src/{js,css,assets}`. Just make sure not to leave whitespace between the comma seperated names within the braces.

— 

**Reconsider this example**

This example is already composable because the type is constant and the type's prototype methods can be chained. Perhaps an example with type conversion would be better.

`(document.getElementById('name-input').value).replace(/\s+/g, ' ').trim().toUppercase();`

Lot's of assignment to state is a bad code quality signal and we'd like to refactor that assignment to state away. Let's say we have a form where  users input their first and last name. We might write code to clean up and format the form input for our database like this 'FIRST LAST':

```
const nameInput = document.getElementById('name-input').value;
// => ' Nathan     brown'
const removeWhitespaceNameInput = nameInput.replace(/\s+/g, ' ');
// => ' Nathan brown'
const trimNameInput = removeWhitespaceNameInput.trim();
// => 'Nathan brown'
const upperCaseNameInput = trimNameInput.toUpperCase();
// => 'NATHAN BROWN'
```
We can capture assignment and eliminate all of this variable assignment by using a container type. If we wrap our input string in an array we can do this:
```
const wellFormattedStr = [document.getElementById('name-input').value]
     .map(s => s.replace(/\s+/g, ' ')
     .map(s => s.trim())
     .map(s => s.toUpperCase())[0];
// => 'NATHAN BROWN'
```
This creates a serially composed path (or linear data flow) of composed functions eliminating our messy state assignments and variable names. Just remember to unbox `[0]` your string value or you will receive an array back instead.

—

One more that's particularly helpful for getting answers out of codebases. Let's say you've heard that React 16.0 uses Rollup to shrink the package size by 32% and you're interested in checking that out inside React's internals. You can search the codebase git commit messages like so `git log --grep='Rollup'` to return the relevant commits to inspect with `git show <short sha1>`

Also great for when you need to find a commit you made about something in particular, but this is all dependent on writing good commit messages. You  can find some guidance for that here. http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

—

I've been thinking about ES6 and what has been most valuable to me at my work:

1. import/export
2. arrow functions
3. template literals
4. classes
5. sets/maps

—

One line of `grep` explained:

`grep 'TODO' -r -n --exclude-dir={node_modules,.git,lib} --exclude={"*bundle.js","*.map","*.min.js","*.csv",todos.txt} . > todos.txt`

This command searches through a directory and its subdirectories for TODO comments and writes them to a text file.

`grep` is a file pattern searcher and 'TODO' is the pattern we are searching our directories and files for

`-r` – search recursively through a directory and its subdirectories

`-n` – label lines matched and returned with their line numbers

`--exclude-dir` and `--exclude` – there may be many files and directories that we don't want to search through. Use brace expansion to
list them. Just make sure to not leave whitespace in the comma-separated list. Also it's very important that you list the file you are
writing your output to in the `--exclude` option, otherwise your file may not terminate and will continue writing your filename indefinitely

`.` – a single dot represents the current working directory. Our `-r` flag will search this directory and all its subdirectories

`>` – this is a bash redirection operator. It redirects the output of this command from the terminal screen to the `todos.txt` file.

—

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

—

What is the difference between these two arrow functions `() => {}` and `() => ({})`?

Try them out in the JavaScript console or node REPL. Rewriting them as function expressions may help or thinking about the two types of bodies that arrow functions take after their arrow `=>`.

Answer: The difference between the arrow functions `() => {}` and `() => ({})` is that the first evaluates a block with no statements inside (this and any block with no `return` statement or a `return` statement given no value, i.e. `() => { return; }`, will return `undefined`) and the second evaluates an expression that returns an empty object. Remember if you give an arrow function brackets it will evaluate them as code block delimiters unless you wrap them in parentheses. See more examples and explanation here: https://gist.github.com/nkabrown/cef868da12f2c0d0822bbfcc51fd01ed

—
