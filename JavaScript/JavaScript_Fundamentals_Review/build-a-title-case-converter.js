function titleCase(str) {
	let strArray = str.split(" ");
	let titleCase = strArray.map((word) => {
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	});
	let newStr = titleCase.join(" ");
	return newStr;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
