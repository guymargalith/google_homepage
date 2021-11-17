function init() {
	let searchTerm = "pingu";
	// fetch("http://localhost:3000/search/store")
	// .then(response => response.text())
	// .then(data => data)
	if (searchTerm.trim().toLowerCase() === "pingu") {
		searchTerm = "pingu";
	} else if (searchTerm) {
		searchTerm = "javascript";
	}

	fetch(`http://localhost:3000/search/${searchTerm}`)
		.then(response => response.json())
		.then(data => addAllResults(data.sites));

	// then delete entry from server?
}

function addAllResults(array) {
	array.forEach(result => addResult(result));
}

function addResult(result) {
	const url = result.url;
	const title = result.title;
	const description = result.description;
	createResultSection(url, title, description);
}

function makeShortUrl(url) {
	const spliturl = url.slice(8).split("/");
	const shorturl = "http://" + spliturl[0];
	return shorturl;
}

function createResultSection(url, title, desc) {
	let urlPara = document.createElement("p");
	urlPara.className = "url";
	urlPara.textContent = makeShortUrl(url);

	let heading = document.createElement("h3");
	heading.textContent = title;

	let descPara = document.createElement("p");
	descPara.className = "description";
	descPara.textContent = desc;

	let link = document.createElement("a");
	link.setAttribute("href", url);
	link.appendChild(heading);

	let section = document.createElement("section");
	section.className = "result";
	section.appendChild(urlPara);
	section.appendChild(link);
	section.appendChild(descPara);

	let main = document.querySelector("main");
	main.appendChild(section);
}

init();
