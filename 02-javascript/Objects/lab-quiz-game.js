const questions = [
	{
		category: "javascript",
		question:
			"What is the correct way to declare a variable that cannot be reassigned in JavaScript?",
		choices: [
			"Using the var keyword",
			"Using the let keyword",
			"Using the const keyword",
		],
		answer: "Using the const keyword",
	},
	{
		category: "javascript",
		question: "Which method adds new items to the end of an array?",
		choices: ["push()", "pop()", "shift()"],
		answer: "push()",
	},
	{
		category: "javascript",
		question: "What does 'DOM' stand for?",
		choices: [
			"Document Object Model",
			"Data Object Model",
			"Display Object Manager",
		],
		answer: "Document Object Model",
	},
	{
		category: "javascript",
		question:
			"Which operator returns true if both values are equal without type conversion?",
		choices: ["==", "===", "="],
		answer: "===",
	},
	{
		category: "javascript",
		question: "What will typeof null return?",
		choices: ["object", "null", "undefined"],
		answer: "object",
	},
];

function getRandomQuestion(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomComputerChoice(choicesArray) {
	return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

function getResults(obj, conputerChoice) {
	if (conputerChoice == obj.answer) {
		return "The computer's choice is correct!";
	} else {
		return (
			"The computer's choice is wrong. The correct answer is: " + obj.answer
		);
	}
}
