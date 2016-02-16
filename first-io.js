var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString();

// console.log(str);

var strArray = str.split('\n').length;

console.log(strArray - 1);