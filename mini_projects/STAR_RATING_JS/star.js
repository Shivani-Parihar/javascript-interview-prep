const stars = document.querySelectorAll(".starRating__star");
const rating = document.querySelector(".starRating__rating");

document.querySelector(".starRating__container").addEventListener('click', setStarRating)

function setStarRating(e) {
	stars.forEach((star) => {
		star.classList.remove("star__checked");
	});
	const idx = [...stars].indexOf(e.target);
	
	if(idx > -1) {
		stars[idx].classList.add("star__checked")
		rating.textContent = `${stars.length - idx}/5`
	} else {
		rating.textContent = `${0}/5`
	}
}