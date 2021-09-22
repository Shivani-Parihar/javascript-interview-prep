const radioButton = document.getElementsByName("stars");
const ratingtextElement = document.querySelector('[data-final-rating]')

function getSelectedRating() {
	for(let i = 0; i < radioButton.length; i++) {
		if(radioButton[i].checked) {
			ratingtextElement.innerText = `${radioButton[i].value} / 5`;
		}
	}
}