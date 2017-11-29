/* 

	Question Prompt: 

	Create a new route, that takes the word first, followed by two commands.
			
	• /:word/:cmd1/:cmd2 - will take the word and:
	◦ pass it as input to the function specified by cmd1,
	◦ pass the output  from cmd1 to the function specified by cmd2,
	◦ send the output of cmd2 as a response.

	Examples:
	Request URL: http://localhost:3000/hello/repeat/exclaim
	Response: hellohello!
	---
	Request URL: http://localhost:3000/hello/exclaim/repeat
	Response: hello!hello!

*/
'use strict';
const express = require('express');
const app = express();
const port = 8000;

const commands = {
  repeat: (str) => str + str,
  exclaim: (str) => `${str}!`,
  reverse: (str) => str.split('').reverse().join('')
};

const getCommand = commands => word => key => key in commands ? commands[key](word) : null;

// partially apply one function and bind to name
const commandDispatch = getCommand(commands);

// route handlers to test for well-formed commands
const check = (req, res, next) => {
  req.params.cmd1 in commands ? (req.params.cmd2 in commands ? 'ok': res.status(404).send(`Invalid Command '${req.params.cmd2}'`)) : res.status(404).send(`Invalid Command '${req.params.cmd1}'`);
  next();
}


app.get('/:word/:cmd1/:cmd2', [check], (req, res, next) => {
  // test if headers have already been sent, if not then send response
  res.headersSent ? null : res.send(commandDispatch(commandDispatch(req.params.word)(req.params.cmd1))( req.params.cmd2));
});

// app.listen returns a node http.Server, see 'express/lib/application.js', so we can call server.close() to stop the
// server from receiving new connections
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// export server so we can require for our tests
module.exports = server;
