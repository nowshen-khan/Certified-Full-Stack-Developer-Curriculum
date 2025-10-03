function fearNotLetter(string) {
	for (let i = 0; i < string.length - 1; i++) {
		let currentCode = string.charCodeAt(i);
		let nextCode = string.charCodeAt(i + 1);
		if (currentCode + 1 !== nextCode) {
			return String.fromCharCode(currentCode + 1);
		}
	}
	return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
