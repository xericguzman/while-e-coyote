const prompt = require('prompt-sync')({ sigint: true});
let number = prompt('Pick a number')

while(number < 0){
    number = number * 2;
    console.log(number)
}
