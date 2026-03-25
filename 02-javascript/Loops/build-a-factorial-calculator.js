const num = 5;

function factorialCalculator(num) {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);

function factorialCalculatorWhileLoop(num) {
	let result = 1;
	let i = 1;
	while (i <= num) {
		result *= i;
		i++;
	}
	return result;
}

const factorialWhile = factorialCalculatorWhileLoop(num);
const resultMsgWhile = `Factorial of ${num} using while loop is ${factorialWhile}`;
console.log(resultMsgWhile);

function factorialCalculatorDoWhileLoop(num) {
	let result = 1;
	let i = 1;
	do {
		result *= i;
		i++;
	} while (i <= num);
	return result;
}

const factorialDoWhile = factorialCalculatorDoWhileLoop(num);
const resultMsgDoWhile = `Factorial of ${num} using do-while loop is ${factorialDoWhile}`;
console.log(resultMsgDoWhile);
