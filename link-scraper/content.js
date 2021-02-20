let linkArray = [];

let links = document.links;

for (let i = 0; i < links.length; i++) {
	let url = links[i].href;
	// Get Reddit links
	if (url.includes('comments')) {
		linkArray.push(links[i].href);
	}
}

// Remove duplicates
let uniqueUrls = [...new Set(linkArray)];

console.log(uniqueUrls);
