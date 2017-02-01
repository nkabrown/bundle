# Git

Create a new repository with an empty root commit because the first commit of an repository can not be rebased
like a regular commit.

`git init && git commit -m "root" --allow-empty`

To avoid tracking files that should be ignored and committing files that should not be a part of git history
never use `git add .`, or `git add -A`,  or `git add --all`. All files should be explicitly added to the index
execpt the initial commit when generating templates.

Be careful before you commit in git. Never use `git add .`
- `git add -p`
- `git diff --cached` show the changes staged for next commit relative to the `HEAD`
- `git show -w` ignore whitespace when comparing lines

There are several advantages to using `git add -p`:
- one more chance for you to review exactly what you are going to commit
- know exactly what's in your commit so you can write better commit messages
- reveals whitespace errors so they can be removed before committing
- pick and choose the changes you want to commit to make commits more granular

To get all remote branches:

- `git branch -a` lists both remote-tracking branches and local branches
- `git remote` list existing remotes
- `git fetch <remote>` get all branches and objects held in the remote repository
- `git checkout -b develop origin/develop` create a local branch that tracks a branch in the remote repository

Result: `Branch develop set up to track remote branch develop from origin`

**revert to previous project state**
It sometimes happens that you need to go back to a time when your application was working. Here is a routine
to restore a project to a previous state.

- `git log --oneline`

   commit history displayed as list of short SHA-1 and commit subject

- `git checkout <short SHA-1>`

   Checkout the files as they were when that commit was made

**review today's work**

`git log --since="6am" --author="Nathan"`

**Centralized workflow**

When pulling from a central repository rebase your branch on top of the branch fetched from upstream. `--rebase` will move your "commits to the tip of the branch after synchronising it with the changes from the central repository". This will save you from unneeded 'merge conflict' commits. `git pull --rebase origin master` https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow

`.git` file extension is appended to repository names when the repo is a bare repository (does not have a working directory, commits should be pushed to a bare repo but not commited in the repo).
