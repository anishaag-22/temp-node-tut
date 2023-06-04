const _ = require('lodash') // we need to install the package first.

const items = [1,[2,[3,[4]]]];
console.log(items);

const newItems = _.flattenDeep(items) // lodash package method
console.log(newItems);