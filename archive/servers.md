# Server Information

## Compressing Content

There are huge performance gains to be made by compressing content before sending it to the client. Apache uses the `mod_deflate` module to compress content on the server. For example to gzip csv files add this directive to your apache conf file.

`AddOutputFilterByType DEFLATE text/csv`
