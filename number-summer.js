const prompt = require('prompt-sync')({sigint: true});

let input = prompt('Enter a number or [done]');

let sum = 0;

while (input !== 'done' ) {
sum = sum + Number(input);
const input = prompt ('Enter a number or [done]')
}

console.log('Sum: ', sum);