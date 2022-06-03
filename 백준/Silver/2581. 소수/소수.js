const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const M = +input[0];
const N = +input[1];
let primeArr = [];

function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  return primeArr.push(num);
}
for (let i = M; i <= N; i++) {
  isPrime(i);
}

if (primeArr.length === 0) console.log(-1);
else {
  console.log(primeArr.reduce((acc, el) => acc + el, 0));
  console.log(Math.min(...primeArr));
}