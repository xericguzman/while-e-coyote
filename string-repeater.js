const prompt = require('prompt-sync')({ sigint: true});

console.log('Enter a string: ');
let str = prompt(' > ');
console.log('');

let str2 = str
str = str + str2;