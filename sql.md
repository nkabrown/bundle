## SQL

Finding duplicates in a column:

`SELECT name, COUNT(*) c FROM table GROUP BY name HAVING c > number;`

i.e.: `SELECT image_file, COUNT(*) c FROM insta_images GROUP BY image_file HAVING c > 1;`
