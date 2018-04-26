var fs = require('fs');

const buffe = fs.readFileSync(process.argv[2]);

var con= buffe.toString().split('\n');
console.log(con.length-1);