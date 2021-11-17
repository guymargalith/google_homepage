const luckyButton = document.querySelector("#lucky-button");
const mainSearch = document.querySelector("#main-search");

luckyButton.addEventListener("click", feelingLucky);

function feelingLucky(e) {
	e.preventDefault();
	let searchTerm = mainSearch.value;
	console.log(searchTerm);
	if (searchTerm.trim().toLowerCase() === "pingu") {
		searchTerm = "pingu";
	} else {
		searchTerm = "javascript";
	}
	fetch(`http://localhost:3000/search/${searchTerm}/random`)
		.then(response => response.json())
		.then(data => {
			window.location = data.url;
		});
}
