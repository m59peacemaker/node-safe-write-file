var fs       = require('fs');
var path     = require('path');
var mkdirp   = require('mkdirp');

module.exports = function(filepath) {
  var args = arguments;
  mkdirp(path.dirname(filepath), function() {
    fs.writeFile.apply(fs, args);
  });
};
