// Truncate a string if it is longer than the given maximum length.

const truncateString = (text, num) => {
	let textLength = text.length;

	if (textLength > num) {
		let newText = text.slice(0, num);
		return newText + "...";
	}
	return text;
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
	truncateString(
		"A-tisket a-tasket A green and yellow basket",
		"A-tisket a-tasket A green and yellow basket".length
	)
);
console.log(
	truncateString(
		"A-tisket a-tasket A green and yellow basket",
		"A-tisket a-tasket A green and yellow basket".length + 2
	)
);
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
