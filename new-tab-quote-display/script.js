function getQuotes() {
	let url = 'https://type.fit/api/quotes';
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			let randomIndex = Math.floor(Math.random() * data.length);
			let quote = data[randomIndex];
			document.getElementById('quote').innerHTML = quote.text;
			document.getElementById('source').innerHTML = quote.author;
		});
}

getQuotes();
