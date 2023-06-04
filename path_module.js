const path = require('path');

console.log(path.sep); // path separator used in a system windows(\), macOS(/)

console.log(__dirname);

//path.join concatenates strings to  generate a path name using system separator
const pName = path.join('NODETUT','content','test.txt')
console.log(pName);

//name of base file in the pathname
console.log(path.basename(pName));

//resolves absolute path using segments
const absolute = path.resolve(__dirname, 'content', 'test.txt')
console.log(absolute);