#URI

[RFC 3986](https://tools.ietf.org/html/rfc3986)
[RFC 7320](https://tools.ietf.org/html/rfc7320)

## URL (Uniform Resource Locator)

URLs are a subset of URIs (Uniform Resource Identifiers) that provide a means to identify and locate a resource (show its network location).

The slash `/`, question mark `?`, and number sign `#` are delimiters.

A **delimiter** is a sequence of one or more characters used to specify the boundary between separate, independent regions in plain text or other data streams.

The components of a URI are scheme, authority, path, query, and fragment

```txt
  https://example.com:8042/over/there?name=ferret#nose
  \___/   \______________/\_________/ \_________/ \__/
    |            |             |           |        |
  scheme     authority        path       query   fragment
```

The authority component is preceded by a double slash `//`.

Queries are generally key value pairs and `&` is a query delimiter.

**about URI**

`about:blank` references a blank page.

[RFC 6694](https://tools.ietf.org/html/rfc6694)

`about` is translated into `chrome` in the Chrome browser. `chrome://chrome-urls` or `chrome://about` lists the available about uris exposing browswer internals.
