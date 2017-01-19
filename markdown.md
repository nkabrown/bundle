 Markdown

You can underline in Markdown by using the `<ins>` tag.

   <ins>Chapter One</ins>

- [Anchor Links in Markdown](https://gist.github.com/asabaylus/3071099)
- [Detail expansion](https://gist.github.com/ericclemmons/b146fe5da72ca1f706b2ef72a20ac39d)

convert markdown to latex using [pandoc](http://pandoc.org/)

http://www.bytebang.at/Blog/Better+notes+with+pandoc#

`pandoc -f markdown logs.md -t latex -o logs.pdf`

`-f` - input format

`t` - output format

`-o` - output to file instead of `stdout`

a more complicated example: `pandoc -V geometry:margin=0.5in --listings -f markdown d3-diagnostic.md -t latex -o d3-diagnostic.pdf`
