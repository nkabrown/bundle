# VIM

To search for a known file name in directory of folders use a wildcard `:e **/filename.txt`

`**` wildcard matches anything, including nothing, and **recurses** into directories. So you can call this anywhere in folder structure and it will search back up to the top-levels.

`$A` will append to the end of all selected lines when you are in visual block mode `<C-v>`

Convert Windows/DOS carriage return characters into newlines `:%s/^M/\r/g` — **this is great for formating csv files that were saved from Excel sheets**
