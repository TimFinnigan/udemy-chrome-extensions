let linkArray = [];

let links = document.links;

for (let i = 0; i < links.length; i++) {
	linkArray.push(links[i].href);
}

console.log(linkArray);
