var test = require('tape');
var kmp = require('../kmp');

test('kmp', function (t) {
  'use strict';

  t.plan(15);

  t.equal(kmp(), -1);
  t.equal(kmp({}), -1);
  t.equal(kmp(0, ''), -1);
  t.equal(kmp(null, 'bar'), -1);
  t.equal(kmp('foobar'), -1);
  t.equal(kmp('foobar', 'qux'), -1);
  t.equal(kmp('foobar', 'bar'), 3);
  t.equal(kmp('12345', 6), -1);
  t.equal(kmp('12345', 3), 2);
  t.equal(kmp('12345', '3'), 2);
  t.deepEqual(kmp.table('bar'), [-1,0,0]);
  t.equal(kmp('The player can participate in parachute jumps in different locations around the map', 'participate in parachute'), 15);
  t.deepEqual(kmp.table('participate in parachute'), [-1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,1,2,3,0,0,0,0,0]);
  t.equal(kmp('she sells seashells by the seashore', 'seaweed'), -1);
  t.equal(kmp('she sells seashells by the seashore', 'shell'), 13);
});

