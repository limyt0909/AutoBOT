let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let num1 = Number(input[0]);
let num2 = Number(input[1]); 

console.log(num1-num2);