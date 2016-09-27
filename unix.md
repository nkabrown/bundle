# UNIX

how many files are in a directory

`ls -l | wc -l`

how many files of a certain file extension are in a directory

`ls -l path/to/file/*.jpg | wc -l`

## tmux

List sessions under the management of tmux

`tmux ls`

Attach to a session

`tmux attach -t 0`

Detach from a session

`Ctrl-b d`
