const inventory = [];

function findProductIndex(productName) {
	for (const i of inventory) {
		if (productName.toLowerCase() == i.name.toLowerCase()) {
			const index = inventory.indexOf(i);
			return index;
		}
	}
	return -1;
}
//console.log(findProductIndex("FloUr"));

function addProduct(productObject) {
	let index = findProductIndex(productObject.name);
	let lowerName = productObject.name.toLowerCase();
	if (index !== -1) {
		inventory[index].quantity += productObject.quantity;
		console.log(`${lowerName} quantity updated`);
	} else {
		inventory.push({
			name: lowerName,
			quantity: productObject.quantity,
		});
		console.log(`${lowerName} added to inventory`);
	}
}

//addProduct({name:"FLOUR", quantity:5});

function removeProduct(productName, productQuantity) {
	let index = findProductIndex(productName);
	const lowerName = productName.toLowerCase();

	if (index === -1) {
		console.log(`${lowerName} not found`);
		return;
	}

	const product = inventory[index];

	if (product.quantity < productQuantity) {
		console.log(
			`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`
		);
		return;
	}

	product.quantity -= productQuantity;
	console.log(`Remaining ${lowerName} pieces: ${product.quantity}`);

	if (product.quantity === 0) {
		inventory.splice(index, 1);
	}
}
