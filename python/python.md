# Python

## JSON module

Pretty print json:

```python
json.dumps(data, indent=4, separators=(";", ": "))
```

Safely access the properties of a dictionary (possibily a JSON dictionary) with Python's dictionary get() method.

**get(key[, default])**

    Return the key if key is in dictionary, else default. If default is not given, it defaults to `None`, so that this method never raises a `KeyError`.

If you are encoding string types to unicode types set the default parameter of the get method to an empty string to avoid throwing an encoding error if `None` is returned.

