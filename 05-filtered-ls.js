var fs = require('fs');
var path = require('path');

// My Solution
// fs.readdir(process.argv[2], function callback(err, list) {
//   var listOfFileNames = list;
//   listOfFileNames.forEach(function(eachFile) {
//     if (path.extname(eachFile) === '.md'){
//       console.log(eachFile);
//     }
//   });
// });

// OR, more technically correct:
// fs.readdir(process.argv[2], function callback(err, list) {
//   var listOfFileNames = list;
//   listOfFileNames.forEach(function(eachFile) {
//     if (path.extname(eachFile) === '.' + process.argv[3]){
//       console.log(eachFile);
//     }
//   });
// });


// Mike's solution
// var filePath = process.argv[2];
// var extension = '.' + process.argv[3];

// fs.readdir(filePath, function callback(err, list) {
//   if (!err) {
//     list.filter(function(fileName) {
//       return path.extname(fileName) === extension;
//     })
//     .forEach(function(el) {
//       console.log(el);
//     });
//   }
// });

// path.extname('test.txt') => .txt;