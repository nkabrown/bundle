# Flask

Within the html markup we can rely on Flask to build dynamic urls with the `url_for()` method. This is particularly important
as we move back and forth from local versions to served versions. Flask's `url_for()` will handle a variety of paths being
appended to the url root. We need that same flexibility in inline and embedded scripts.

To create dynamic urls in scripts add a script tag to create a global variable with info from Flask's request object.

```html
  <script type=text/javascript>
    $SCRIPT_ROOT = {{ request.script_root|tojson|safe }};
  </script>
```

http://flask.pocoo.org/docs/0.11/patterns/jquery/
