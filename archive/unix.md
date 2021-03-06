# UNIX

how many files are in a directory

`ls -l | wc -l`

how many files of a certain file extension are in a directory

`ls -l path/to/file/*.jpg | wc -l`

display first lines of a file

`head -n 5` — without `-n` option default is 10 lines

inspect the pattern behind bash's primary prompt variable run `echo $PS1`.

`\h:\W \u\$` `\h` = hostname `\W` = basename of current directory `\u` = username

create multiple directories with bash brace expansion (do not put whitespace between the comma-separated items)

`mkdir src/{js,css,img,fonts}`

**copy & paste**

Copy text from your clipboard into the terminal with `Cmd-v` and use `pbpaste` with the redirection operator `>` to write text in your clipboard into a file.

**grep tasks**

search for TODO's in a codebase excluding files and directories and redirect to file

`grep 'TODO' -r -n --exclude-dir={node_modules,.git,lib} --exclude={"*.csv","*.map","*.min.js","*bundle.js",todos.txt} . > todos.txt`

search for commented out code and redirect to file

`grep -E "/\*|//\s" -r -n --exclude-dir={node_modules,.git,lib} --exclude={"*bundle.js","*.map","*.min.js","*.csv","*.json",comments.txt} . > comments.txt`

## tmux

List sessions under the management of tmux

`tmux ls`

Attach to a session

`tmux attach -t 0`

Detach from a session

`Ctrl-b d`

Enter scroll mode

`Ctrl-b [` and use arrow keys to navigate. Press `q` to exit scroll mode.
