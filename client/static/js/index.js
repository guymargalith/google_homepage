const luckyButton = document.querySelector("#lucky-button");
const searchButton = document.querySelector("#search-button");
const mainSearch = document.querySelector("#main-search");

luckyButton.addEventListener("click", feelingLucky);
searchButton.addEventListener("click", search);

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

function search(e) {
	e.preventDefault();
	let searchTerm = mainSearch.value;
	if (searchTerm) {
		storeSearchResult(searchTerm);
		// location.href = "./search-results.html";
	}
}

function storeSearchResult(searchTerm) {
	const data = searchTerm;

	const options = {
		method: "POST",
		body: data,
		headers: {
			"Content-Type": "application/json"
		}
	};

	console.log(options);

	// fetch("http://localhost:3000/***ROUTE****", options);
}
