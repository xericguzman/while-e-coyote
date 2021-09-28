const prompt = require('prompt-sync')({ sigint: true});

let x = prompt('Enter ');
let y = prompt('Enter ');

while (x % y != 0);
x = x + 1 
console.log('x is divisible by y')