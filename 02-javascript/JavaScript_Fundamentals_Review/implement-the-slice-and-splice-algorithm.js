function frankenSplice(arr1, arr2, index) {
	const combinedArray = [...arr1, ...arr2];
	const removeValue = combinedArray.splice(arr1.length, index);
	combinedArray.unshift(removeValue);
	const mixedArray = combinedArray.flat();
	return mixedArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(
	frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);
console.log(frankenSplice([1, 2, 3, 4], [], 0));
