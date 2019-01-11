# CSS

By far the best CSS rescource is https://drafts.csswg.org/indexes/.

To see the current state of the field visit [CSS Snapshot 2017](https://www.w3c.org/TR/css-2017/)

The white-space property controls whether whitespace collaspes or is preserved.

The CSS specification states that 1 inch in CSS is 96px. Helpful to keep in mind for guesstimating screen sizes.

In order for the UA to know if/when to apply an overflow scrollbar `overflow: auto` the height or width or both of the containing element must be specified. If not how will the UA know that the content is overflowing the container element.

**The significance of spaces in CSS style rules.**

 A space in a CSS ruleset is a [descendant combinator](https://www.w3.org/TR/css3-selectors/#descendant-combinators). `header .active` will select any element with the class `.active` that is a descendant of the `header` element. This is quite different than chaining class selectors together. `.callout.active` will select an element whose classlist contains both of these classes. There is also a difference between the descendant combinator and the child combinator `>` which only selects elements that are directly children of the parent element.

**Problems with CSS**

The most problematic and difficult aspect of CSS is that CSS rules create variables in the global scope. The cascade is a description of how all of these overlapping globals interact with one another and resolve style declarations. Polluting the global scope is not good practice and a lot of mental energy is used in the simple process of naming class and id attributes.
