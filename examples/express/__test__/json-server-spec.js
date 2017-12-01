'use strict';
const test = require('tape');
const request = require('supertest');

const server = require('../json-server.js');

test('GET /upper/This is a Test', t => {
  request(server)
      .get('/upper/This is a Test')
      .end((err, res) => {
        if (err) throw err;
        t.plan(3);
        t.equal(res.body.original, 'This is a Test', 'input is correct');
        t.equal(res.body.upper, 'THIS IS A TEST', 'output is correct');
        t.deepEqual(res.body, { original: 'This is a Test', upper: 'THIS IS A TEST' }, 'body objects are equivalent');
        t.end();
      });
});

test('GET /lower/This is a Test', t => {
  request(server)
      .get('/lower/This is a Test')
      .end((err, res) => {
        if (err) throw err;
        t.plan(3);
        t.equal(res.body.original, 'This is a Test', 'input is correct');
        t.equal(res.body.lower, 'this is a test', 'output is correct');
        t.deepEqual(res.body, { original: 'This is a Test', lower: 'this is a test' }, 'body objects are equivalent');
        t.end();
      });
});

test('GET /length/This is a Test', t => {
  request(server)
      .get('/length/This is a Test')
      .end((err, res) => {
        if (err) throw err;
        t.plan(3);
        t.equal(res.body.original, 'This is a Test', 'input is correct');
        t.equal(res.body.length, 14, 'output is correct');
        t.deepEqual(res.body, { original: 'This is a Test', length: 14 }, 'body objects are equivalent');
        t.end();
      });
});

test('GET /split/This is a Test', t => {
  request(server)
      .get('/split/This is a Test')
      .end((err, res) => {
        if (err) throw err;
        t.plan(3);
        t.equal(res.body.original, 'This is a Test', 'input is correct');
        t.deepEqual(res.body.split, ['This', 'is', 'a', 'Test'], 'output is correct');
        t.deepEqual(res.body, { original: 'This is a Test', split: ['This', 'is', 'a', 'Test'] }, 'body objects are equivalent');
        t.comment('end of json-server testing');
        t.end();
      });
});
server.close();
