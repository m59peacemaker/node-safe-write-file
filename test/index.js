var fs   = require('fs');
var test = require('tape');
var rimraf = require('rimraf');
var safeWriteFile = require('../');

var tmp = __dirname+'/tmp';

test('creates directories for file and writes it', function(t) {
  t.plan(1);
  var dest = tmp+'/foo/bar/baz.txt';
  safeWriteFile(dest, 'Text, bro!', function() {
    fs.stat(dest, function(err, stats) {
      rimraf(tmp, function() {
        t.false(err);
      });
    });
  });
});
