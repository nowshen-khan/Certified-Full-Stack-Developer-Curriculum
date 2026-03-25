// Lab: JavaScript Trivia Bot
// This code is a simple trivia bot that introduces itself and shares some fun facts about coding in JavaScript.

console.log("Hello! I'm your coding fun fact guide!");
let botName = "teacherBot",
	botLocation = "Bangladesh",
	favoriteLanguage = "JavaScript";
console.log("My name is " + botName + " and I live on " + botLocation + ".");

console.log("My favorite programming language is " + favoriteLanguage + ".");

let codingFact = "I am learning " + favoriteLanguage + ".";
console.log(codingFact);

codingFact = "I love to learn " + favoriteLanguage + ".";
console.log(codingFact);

codingFact = "I love to work with " + favoriteLanguage + ".";
console.log(codingFact);

console.log(
	"It was fun sharing these facts with you. Goodbye! - " +
		botName +
		" from " +
		botLocation +
		"."
);
