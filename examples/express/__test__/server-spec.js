'use strict';
const test = require('tape');
const request = require('supertest');

const server = require('../server.js');

test('GET /hello/repeat/exclaim', t => {
  request(server)
      .get('/hello/repeat/exclaim')
      .end((err, res) => {
        if (err) throw err;
        t.plan(1);
        const expectedResponse = 'hellohello!';
        t.equal(res.text, expectedResponse, 'response texts match');
        t.end();
      });
});

test('GET /hello/reverse/reverse', t => {
  request(server)
      .get('/hello/reverse/reverse')
      .end((err, res) => {
        if (err) throw err;
        t.plan(1);
        const expectedResponse = 'hello';
        t.equal(res.text, expectedResponse, 'response texts match');
        t.end();  
      });
});

test('GET /hello/repat/repeat', t => {
  request(server)
     .get('/hello/repat/repeat')
     .expect(404)
     .end((err, res) => {
       if (err) throw err;
       t.plan(1);
       const expectedResponse = `Invalid Command 'repat'`;
       t.equal(res.text, expectedResponse, 'handle spelling errors');
       t.end();
     });
});

test('GET /hello/repeat/uppercase', t => {
  request(server)
      .get('/hello/repeat/uppercase')
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
        t.plan(1);
        const expectedResponse = `Invalid Command 'uppercase'`;
        t.equal(res.text, expectedResponse, 'handle missing commands');
        t.comment('end of route parameters tests');
        t.end();
      });
});

// stop the server from receiving new connections and push it to emit a 'close' event
// if we do not call this our server will hang and our tests will not exit
server.close();
