/*

	Build an application using ExpressJS or the http module with the following routes:

	/upper/:str
	returns JSON with two keys: original and upper
	the value of original is :str
	the value of upper is an all uppercase version of :str

	/lower/:str
	returns JSON with two keys: original and lower
	the value of original is :str
	the value of lower is an all lowercase version of :str

	/length/:str
	return JSON with two keys: original and length
	the value of original is :str
	the value of length is the length of :str

	/split/:str
	return JSON with two keys: original and split
	the value of original is :str
	the value of split is an array of each word in input

*/
'use strict';
const express = require('express');
const app = express();
const port = 8000;

const commands = {
  upper: (str) => str.toUpperCase(),
  lower: (str) => str.toLowerCase(),
  length: (str) => str.length,
  split: (str) => str.split(' ')
}

const getCommand = commands => key => str => key in commands ? commands[key](str) : null;

// partially apply one function nd bind to name
const commandDispatch = getCommand(commands);

const createJSON = str => cmd => result =>  ({ original: str, [cmd]: result });
 
app.get('/upper/:str', (req, res, next) => {
  res.send(createJSON(req.params.str)('upper')(commandDispatch('upper')(req.params.str)));
});

app.get('/lower/:str', (req, res, next) => {
  res.send(createJSON(req.params.str)('lower')(commandDispatch('lower')(req.params.str)));
});

app.get('/length/:str', (req, res, next) => {
  res.send(createJSON(req.params.str)('length')(commandDispatch('length')(req.params.str)));
});

app.get('/split/:str', (req, res, next) => {
  res.send(createJSON(req.params.str)('split')(commandDispatch('split')(req.params.str)));
});

// app.listen returns a node http.Server, see 'express/lib/application.js', so we can call server.close() to stop the server from receiving new connections
const server = app.listen(port, () => {
  console.log(`JSON server listening on port ${port}`);
});

// export server so we can require for our tests
module.exports = server;
