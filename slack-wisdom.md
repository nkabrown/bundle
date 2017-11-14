**Keep track of helpful learnings shared in Slack channels**

In the shell you can use brace expansion to create multiple directories all in the same command. For every project you might need a src directory with js, css, and assets directories. You can create them all at once `mkdir -p src/{js,css,assets}`. Just make sure not to leave whitespace between the comma seperated names within the braces.

— 

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
3. classes
4. sets
5. maps

The first three are prevalent in react and you might be very familiar. If you don't know the last two they can be very helpful.

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
