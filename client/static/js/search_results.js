function init() {
	fetch("http://localhost:3000/store")
		.then(response => response.json())
		.then(displayResults);
}

function displayResults(data) {
	let search;
	if (data.searchTerm.trim().toLowerCase() === "pingu") {
		search = "pingu";
	} else if (data.searchTerm) {
		search = "javascript";
	}

	fetch(`http://localhost:3000/search/${search}`)
		.then(response => response.json())
		.then(data => {
			addAllResults(data.sites);
		});
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
	heading.style.fontSize = "20px";
	heading.style.paddingTop = "5px";
	heading.style.marginBottom = "3px";
	heading.style.fontWeight = "normal";

	let descPara = document.createElement("p");
	descPara.className = "description";
	descPara.textContent = desc;

	let link = document.createElement("a");
	link.setAttribute("href", url);
	link.appendChild(heading);
	link.style.textDecoration = "none";
	link.style.color = "#1a0dab";

	let section = document.createElement("section");
	section.className = "result";
	section.appendChild(urlPara);
	section.appendChild(link);
	section.appendChild(descPara);
	section.style.fontFamily = "arial, sans-serif";

	let main = document.querySelector("main");
	main.appendChild(section);
}

init();
