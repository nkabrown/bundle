# 2019 Q1 Marginal Returns

11 Jan 2019

**Use pathspecs to make git use more efficient.**

Pathspecs will enable me to execute a git operation on subsets of the working tree. Without understanding pathspecs each operation applied either to all of the working tree `git add -a` or to specific paths `git add src/static/js/index.js`. I tended to abstain from working on the entire working tree and confine myself to working at a very granular level in git. Pathspecs will help me to improve my efficiency by applying one operation to multiple specific files at once.

Reference: pathspec entry located at `git help glossary`

Follow-up: Make connections between pathspecs and set theory. Explore history of pathspecs in Unix and their relationship to file systems.

Examples: Recently faced with a terrible situation where someone committed directory names and files names containing spaces to a git repository. The spaces in the directory names prevented another developer from being able to clone the repo. To remove directories or files with spaces from git the paths need to be surrounded by single quotes. `git rm 'path/to/directory/with/spaces /'` To remove a set of files in such a directory whose names have been amended use a pathspec `git rm 'path/with spaces/'*`.
