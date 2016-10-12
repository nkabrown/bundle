# Snippets

You can save snippets of code to execute in your dev tool console.

https://developers.google.com/web/tools/chrome-devtools/javascript/snippets

## css-layout-outline — https://gist.github.com/addyosmani/fd3999ea7fce242756b1

```js
[].forEach.call(document.querySelectorAll('*'),
function(a) {
  a.style.outline="1px solid #" + 
  (~~(Math.random() * (1<<24))).toString(16)
});
```
