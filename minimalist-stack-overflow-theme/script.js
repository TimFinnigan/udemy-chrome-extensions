// Hide answers below threshold
let votes = document.getElementsByClassName('js-vote-count');

// Skip first element because it is the question
for (let i = 1; i < votes.length; i++) {
	let element = votes[i];
	let voteCount = parseInt(element.getAttribute('data-value'));
	if (voteCount < 2) {
		element.parentNode.parentNode.parentNode.style.display = 'none';
	}
}
