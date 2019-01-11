# Head Element

Always declare `<meta charset="UTF-8">` in any page that makes an external request for css stylesheets. As of CSS 2.2 the `@charset` at-rule is an [invalid rule](https://drafts.csswg.org/css-syntax-3/#at-ruledef-charset) and shouldn't be present in stylesheets.The [referring document should declare](https://drafts.csswg.org/css-syntax-3/#determine-the-fallback-encoding) its encoding to be UTF-8.

Do not use `<meta name="viewport" content="width=device-width, initial-scale=1">` in pages that are not responsive. http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho
