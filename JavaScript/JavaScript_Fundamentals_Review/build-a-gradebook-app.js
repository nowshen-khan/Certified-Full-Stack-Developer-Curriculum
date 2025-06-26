function getAverage(arr) {
	let average,
		sum = 0;
	for (let i of arr) {
		sum += i;
	}
	average = sum / arr.length;
	return average;
}

function getGrade(studentScore) {
	if (studentScore == 100) {
		return "A+";
	} else if (studentScore >= 90 && studentScore <= 99) {
		return "A";
	} else if (studentScore >= 80 && studentScore <= 89) {
		return "B";
	} else if (studentScore >= 70 && studentScore <= 79) {
		return "C";
	} else if (studentScore >= 60 && studentScore <= 69) {
		return "D";
	} else if (studentScore >= 0 && studentScore <= 59) {
		return "F";
	} else {
		return "Invalid Score";
	}
}

function hasPassingGrade(score) {
	return getGrade(score) !== "F";
}

function studentMsg(arrScores, score) {
	const average = getAverage(arrScores);
	const grade = getGrade(score);
	const passed = hasPassingGrade(score);

	return `Class average: ${average}. Your grade: ${grade}. You ${
		passed ? "passed" : "failed"
	} the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
