# Git

Create a new repository with an empty root commit because the first commit of an repository can not be rebased
like a regular commit.

`git init && git commit -m "root" --allow-empty`

To avoid tracking files that should be ignored and committing files that should not be a part of git history
never use `git add .`, or `git add -A`,  or `git add --all`. All files should be explicitly added to the index
except the initial commit when generating templates.

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

- `git branch -va` lists both remote-tracking branches and local branches
- `git remote` list existing remotes
- `git fetch <remote>` get all branches and objects held in the remote repository
- `git checkout -b develop origin/develop` create a local branch that tracks a branch in the remote repository

   Result: `Branch develop set up to track remote branch develop from origin`

- `git checkout --track upstream/issue11` create a local branch that tracks a branch in an upstream repository. Add a `-b <name>` flag to give your own name.

   Result: `Branch 'issue11' set up to track remote branch 'issue11' from 'upstream'`

**revert to previous project state**
It sometimes happens that you need to go back to a time when your application was working. Here is a routine
to restore a project to a previous state.

- `git log --oneline`

   commit history displayed as list of short SHA-1 and commit subject

- `git checkout <short SHA-1>`

   Checkout the files as they were when that commit was made

**git commit messages**

Writing informative and interesting git commit messages is a good habit and is beneficial beacuse they provide you one more opportunity to think about your work and they are searchable and give future codebase workers a path to follow.

Excellent discussion of the traditional git commit message best practice. http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

An alternative git commit message format from Bram Moolenaar:

> **patch 8.0.1309: cannot use 'balloonexpr' in a terminal**
>
> Problem:    Cannot use 'balloonexpr' in a terminal.
>
> Solution:   Add 'balloonevalterm' and add code to handle mouse movements in a terminal. Initial implementation for Unix with GUI.

**review today's work**

`git log --since="6am" --author="Nathan"`

**Centralized workflow**

When pulling from a central repository rebase your branch on top of the branch fetched from upstream. `--rebase` will move your "commits to the tip of the branch after synchronising it with the changes from the central repository". This will save you from unneeded 'merge conflict' commits. `git pull --rebase origin master` https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow

`.git` file extension is appended to repository names when the repo is a bare repository (does not have a working directory, commits should be pushed to a bare repo but not commited in the repo).

Don't forget to run `git help -g` to see a list of interesting guides including some tutorials.

You can use a redirection operator to write the results of a git command to a file. `git log --author="Nathan" > commits.txt`

**Find what your looking for**

Use the `--word-diff` option to highlight changes in a bundle with `git diff` or `git show`.

Search for a specific word in git commit messages `git log --all --grep="Carnegie"`.

Get a list of changed files `git diff --name-only HEAD HEAD~2 > changedfiles.txt`

See the changes to a directory over the course of a week `git diff HEAD 'HEAD@{1 week ago}' -- foldername/`. See `git help rev-parse` for information on how `'HEAD@{1 week ago}'` works.

**exclude files from git command output**

Separate your exclusion operators from your command parameters with the double dash `--` and use git's exclude pathspec alias `^`.

`git diff -- ':^*.csv'`

**dump git diffs into files**

Yesterday I had to make some code changes in a repo that I do not have write access to. I spent quite a long time copying and pasting changes into an email to send to a developer so she could make the changes. It was time-consuming and frustrating. I’m proud that I let the frustration get to me and did a little research to make sure I never have to do that again.

If you don’t have write access to a repo here is something you can do to get your changes to a developer who does. Commit them on a feature branch local to you and then run `git log --format=email --max-count 1 --patch > patch.txt` to get the git diff copied to a text file you can append to or copy into an email.

`--format=email` will create a header with information about the change

```
From 9799b344a5f4311cd4221543a4bf850aa5705532 Mon Sep 17 00:00:00 2001
From 9799b344a5f4311cd4221543a4bf850aa5705532 Mon Sep 17 00:00:00 2001
From: Nathan Brown <nathan.brown@somecompany.com>
Date: Mon, 25 Jun 2018 17:50:21 -0400
Subject: [PATCH] Bugfix - Correctly sum action type totals for pies
```
`--patch` will return the text of additions and subtractions you made to the files in the working directory.

`>` is the bash redirection operator. This operator will redirect standard output of the git command into the file we listed `patch.txt`.
