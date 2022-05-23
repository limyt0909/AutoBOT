var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

var three = parseInt(a * (b % 10));
b = parseInt(b / 10);
var four = parseInt(a * (b % 10));
b = parseInt(b / 10);
var five = parseInt(a * (b % 10));

var result = parseInt( three + four * 10 + five * 100);

console.log(three);
console.log(four);
console.log(five);
console.log(result);