module.exports = stuff;

var fs = require('fs');
var path = require('path');
var stuff={};

var dir = process.argv[2];
var ext1 = process.argv[3];

fs.readdir(dir, function(err,files) {
  if (err) {
    throw err;
  }
  for (var i=0; i<files.length; i++) {
    var ext2 = path.extname(files[i]);
    if (ext2 === ext1) {
    // console.log(ext2);
    console.log(files[i]);
    }
  }
});

module.exports = stuff;