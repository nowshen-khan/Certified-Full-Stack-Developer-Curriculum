// Build an email masker function that takes an email address as input and returns a masked version of the email address.
const maskEmail = (email) => {
	const atIndex = email.indexOf("@");

	let localPart = email.slice(0, atIndex);

	let firstChar = localPart.at(0);
	let lastChar = localPart.at(-1);

	const middleLength = localPart.length - 2;
	const maskedMiddle = middleLength > 0 ? "*".repeat(middleLength) : "";

	const domainPart = email.slice(atIndex);

	const maskedEmail = `${firstChar}${maskedMiddle}${lastChar}${domainPart}`;

	return maskedEmail;
};

let email = "freecodecamp@example.com";

console.log(maskEmail(email));
