 # Markdown

You can underline in Markdown by using the `<ins>` tag.

   <ins>Chapter One</ins>

- [Anchor Links in Markdown](https://gist.github.com/asabaylus/3071099)
- [Detail expansion](https://gist.github.com/ericclemmons/b146fe5da72ca1f706b2ef72a20ac39d)

Convert markdown to latex using [pandoc](http://pandoc.org/)

[Better Notes with Pandoc](http://www.bytebang.at/Blog/Better+notes+with+pandoc#)

simple example: `pandoc -f markdown logs.md -t latex -o logs.pdf`

`-f` - input format

`t` - output format

`-o` - output to file instead of `stdout`

a more complex example: `pandoc -V geometry:margin=0.5in --pdf-engine=xelatex --listings --template=ty -f markdown d3-diagnostic.md -t latex -o d3-diagnostic.pdf`

**Custom fonts in latex pdf**

font headers for markdown to latex transformation:

```
---
mainfont: Museo Sans 300
mainfontoptions:
- BoldFont=Museo Sans 900
- ItalicFont=Museo Sans 300 Italic
- BoldItalicFont=Museo Sans 900 Italic
...
```

If you need a hard line break in your markdown that is being transformed into latex put two or more spaces at the end of a line.

Workaround for [markdown in latex blocks](https://groups.google.com/forum/#!msg/pandoc-discuss/ggcrRN-ja-s/nFyiQ3cXCAAJ). An amazing facilitator to converting documentation to pdf with pandoc.

```
---
header-includes:
    - \newcommand{\hideFromPandoc}[1]{#1}
    - \hideFromPandoc{
        \let\Begin\begin
        \let\End\end
      }
...
```
