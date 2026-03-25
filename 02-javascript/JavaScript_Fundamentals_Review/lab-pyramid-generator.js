function pyramid(char, height, reverse) {
	let result = "\n"; // Start with new line as per test cases

	if (!reverse) {
		// Normal pyramid (pointing up)
		for (let i = 1; i <= height; i++) {
			const spaces = " ".repeat(height - i);
			const chars = char.repeat(2 * i - 1);
			result += spaces + chars + "\n";
		}
	} else {
		// Reversed pyramid (pointing down)
		for (let i = height; i >= 1; i--) {
			const spaces = " ".repeat(height - i);
			const chars = char.repeat(2 * i - 1);
			result += spaces + chars + "\n";
		}
	}

	return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
