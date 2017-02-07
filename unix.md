# UNIX

how many files are in a directory

`ls -l | wc -l`

how many files of a certain file extension are in a directory

`ls -l path/to/file/*.jpg | wc -l`

display first lines of a file

`head -n 5` — without `-n` option default is 10 lines

inspect the pattern behind bash's primary prompt variable run `echo $PS1`.

`\h:\W \u\$` `\h` = hostname `\W` = basename of current directory `\u` = username


## tmux

List sessions under the management of tmux

`tmux ls`

Attach to a session

`tmux attach -t 0`

Detach from a session

`Ctrl-b d`
