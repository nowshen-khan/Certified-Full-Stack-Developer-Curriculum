const books = [
	{ title: "To Kill a Mockingbird", author: "Harper Lee", releaseYear: 1960 },
	{
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		releaseYear: 1951,
	},
	{
		title: "nowshen",
		authorName: "nowshen",
		releaseYear: 1955,
	},
	{
		title: "nowshen",
		authorName: "nowshen",
		releaseYear: 1940,
	},
];

function sortByYear(bookA, bookB) {
	if (bookA.releaseYear > bookB.releaseYear) {
		return 1;
	}
	if (bookA.releaseYear < bookB.releaseYear) {
		return -1;
	}
	if (bookA.releaseYear == bookB.releaseYear) {
		return 0;
	}
}

const filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
