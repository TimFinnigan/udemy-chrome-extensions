var linkArray = [];

var links = document.links;

for (var i = 0; i < links.length; i++) {
	var url = links[i].href;
	linkArray.push(url);
}

// Remove duplicates
var uniqueUrls = [...new Set(linkArray)];

// Create and save JSON file
var dataStr =
	'data:text/json;charset=utf-8,' +
	encodeURIComponent(JSON.stringify(uniqueUrls));

var dlAnchorElem = document.createElement('a');
dlAnchorElem.setAttribute('href', dataStr);
dlAnchorElem.setAttribute('download', 'links.json');
dlAnchorElem.click();
