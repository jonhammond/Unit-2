var fs = require('fs');

fs.readFile(process.argv[2], function (err, response){
  if (!err) {
    var numberOfNewLines = response.toString().split('\n').length;
    console.log(numberOfNewLines - 1);
  }
  else {
    console.log("Ahhhh, shit! It's broke.");
  }
});