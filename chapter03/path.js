const path = require('path');

const string = __filename;

console.log("path.: ", path.basename(string));
console.log("path.parse(): ", path.parse(string));
console.log("path.format(): ", path.format(path.parse(string)));
console.log("path.isAbsolute(): ", path.isAbsolute('././'));