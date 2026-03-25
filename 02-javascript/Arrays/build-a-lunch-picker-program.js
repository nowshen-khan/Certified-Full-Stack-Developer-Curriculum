const lunches = [];

const addLunchToEnd = (arr, string) => {
	arr.push(string);
	console.log(`${string} added to the end of the lunch menu.`);
	return arr;
};

const addLunchToStart = (arr, string) => {
	arr.unshift(string);
	console.log(`${string} added to the start of the lunch menu.`);
	return arr;
};

const removeLastLunch = (arr) => {
	if (arr.length == 0) {
		console.log("No lunches to remove.");
	} else {
		let lastItem = arr.pop();
		console.log(`${lastItem} removed from the end of the lunch menu.`);
	}
	return arr;
};

const removeFirstLunch = (arr) => {
	if (arr.length == 0) {
		console.log("No lunches to remove.");
	} else {
		let firstItem = arr.shift();
		console.log(`${firstItem} removed from the start of the lunch menu.`);
	}
	return arr;
};

const getRandomLunch = (arr) => {
	if (arr.length == 0) {
		console.log("No lunches available.");
	} else {
		const randomIndex = Math.round(Math.random() * arr.length);
		let lunchItem = arr[randomIndex];
		console.log(`Randomly selected lunch: ${lunchItem}`);
	}
};

const showLunchMenu = (arr) => {
	if (arr.length == 0) {
		console.log("The menu is empty.");
	} else {
		console.log(`Menu items: ${arr.join(", ")}`);
	}
};

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(lunches, ["Pizza", "Tacos", "Burger"]);
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
