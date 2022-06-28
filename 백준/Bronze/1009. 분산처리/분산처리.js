let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((el) => el.split(" ").map((el) => Number(el)));
input.shift();
let result = [];

for (let i = 0; i < input.length; i++) {
	let rotationNum = [];
	let startNum = 1;
	while (true) {
		let value = String(Number(input[i][0]) ** startNum);
		if (rotationNum.includes(value[value.length - 1])) break;
		rotationNum.push(value[value.length - 1]);
    startNum++;
	}
	if (input[i][1] % rotationNum.length === 0) {
    if(rotationNum[rotationNum.length - 1] === '0') result.push('10');
    else result.push(rotationNum[rotationNum.length - 1]);
  }
	else {
    result.push(rotationNum[(input[i][1] % rotationNum.length) - 1]);
  }
}

console.log(result.join('\n'));