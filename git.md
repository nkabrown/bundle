# Git

Be careful before you commit in git. Never use `git add .`
- `git add -p`
- `git diff --cached` show the changes staged for next commit relative to the `HEAD`
- `git show -w` ignore whitespace when comparing lines

To get all remote branches:

- `git branch -a` lists both remote-tracking branches and local branches
- `git remote` list existing remotes
- `git fetch <remote>` get all branches and objects held in the remote repository
- `git checkout -b develop origin/develop` create a local branch that tracks a branch in the remote repository

Result: `Branch develop set up to track remote branch develop from origin`
