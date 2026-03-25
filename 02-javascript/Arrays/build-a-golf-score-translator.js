/*
==================================================================
Lab: Build a Golf Score Translator
==================================================================

Problem:
In the game of Golf, each hole has a par, meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

In this lab, you will write a function that converts the par and strokes to their nickname.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named golfScore.
golfScore should take two numeric arguments, which are the par for the course and the amount of strokes made.
golfScore should return a string.
golfScore should return "Hole-in-one!" if strokes is 1.
golfScore should return "Eagle" if strokes is less than or equal to par minus 2.
golfScore should return "Birdie" if strokes is equal to par minus 1.
golfScore should return "Par" if strokes is equal to par.
golfScore should return "Bogey" if strokes is equal to par plus 1.
golfScore should return "Double Bogey" if strokes is equal to par plus 2.
golfScore should return "Go Home!" if strokes is greater than or equal to par plus 3.

Example Test Cases:
1. You should create a function named golfScore.
2. golfScore should take two parameters.
3. golfScore should return a string
4. golfScore(1, 1) should return the string Hole-in-one!
5. golfScore(3, 1) should return the string Hole-in-one!
6. golfScore(4, 1) should return the string Hole-in-one!
7. golfScore(5, 1) should return the string Hole-in-one!
8. golfScore(4, 2) should return the string Eagle
9. golfScore(5, 2) should return the string Eagle
10. golfScore(3, 2) should return the string Birdie
11. golfScore(4, 3) should return the string Birdie
12. golfScore(5, 4) should return the string Birdie
13. golfScore(3, 3) should return the string Par
14. golfScore(4, 4) should return the string Par
15. golfScore(5, 5) should return the string Par
16. golfScore(3, 4) should return the string Bogey
17. golfScore(4, 5) should return the string Bogey
18. golfScore(5, 6) should return the string Bogey
19. golfScore(3, 5) should return the string Double Bogey
20. golfScore(4, 6) should return the string Double Bogey
21. golfScore(5, 7) should return the string Double Bogey
22. golfScore(3, 7) should return the string Go Home!
23. golfScore(4, 8) should return the string Go Home!
24. golfScore(5, 9) should return the string Go Home!
==================================================================
*/

const names = [
	"Hole-in-one!",
	"Eagle",
	"Birdie",
	"Par",
	"Bogey",
	"Double Bogey",
	"Go Home!",
];

function golfScore(par, strokes) {
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (strokes == par + 2) {
		return names[5];
	} else if (strokes >= par + 3) {
		return names[6];
	}
}

console.log(golfScore(1, 1));
console.log(golfScore(3, 1));
console.log(golfScore(4, 1));
console.log(golfScore(5, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(3, 2));
console.log(golfScore(4, 3));
console.log(golfScore(5, 4));
console.log(golfScore(3, 3));
console.log(golfScore(4, 4));
console.log(golfScore(5, 5));
console.log(golfScore(3, 4));
console.log(golfScore(4, 5));
console.log(golfScore(5, 6));
console.log(golfScore(3, 5));
console.log(golfScore(4, 6));
console.log(golfScore(5, 7));
console.log(golfScore(3, 7));
console.log(golfScore(4, 8));
console.log(golfScore(5, 9));
