const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
 
function factorial(n) {
if (n === 0) {
// 0! === 1
return 1;
}
 
if (n < 2) {
return n;
}
 
return factorial(n - 1) * n;
}
 
console.log(factorial(input));