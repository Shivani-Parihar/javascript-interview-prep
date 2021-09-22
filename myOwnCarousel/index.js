const track =  document.querySelector(".carousel-track");
const slides = Array.from(track.children)
const nextButton = document.querySelector(".carousel__button--right")
const prevButton = document.querySelector(".carousel__button--left")
const dotsNav = document.querySelector(".carousel__nav")
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width

const getSlidePosition = (slide, idx) => {
	slide.style.left = slideWidth * idx + 'px'
}

slides.forEach(getSlidePosition)

function moveToSlide(track, currentSlide, targetSlide) {
	track.style.transform = 'translateX(-' + targetSlide.style.left +')'
	currentSlide.classList.remove("current-slide")
	targetSlide.classList.add("current-slide");
}

function updateDots(currentDot, targetDot) {
	currentDot.classList.remove("current-slide")
	targetDot.classList.add("current-slide")
}

function hideShowArrows(targetIndex) {
	if(targetIndex === 0) {
		prevButton.classList.add("is-hidden")
		nextButton.classList.remove("is-hidden")
	} else if(targetIndex === slides.length - 1) {
		nextButton.classList.add("is-hidden")
		prevButton.classList.remove("is-hidden")
	} else {
		prevButton.classList.remove("is-hidden")
		nextButton.classList.remove("is-hidden")
	}
}

prevButton.addEventListener("click", e => {
	const currentSlide = track.querySelector(".current-slide")
	const prevSlide = currentSlide.previousElementSibling
	const currentDot = dotsNav.querySelector(".current-slide")
	const prevDot = currentDot.previousElementSibling
	const prevIndex = slides.findIndex(slide => slide === prevSlide)

	moveToSlide(track, currentSlide, prevSlide)
	updateDots(currentDot, prevDot)
	hideShowArrows(prevIndex)
})

nextButton.addEventListener("click", e => {
	const currentSlide = track.querySelector(".current-slide")
	const nextSlide = currentSlide.nextElementSibling
	const currentDot = dotsNav.querySelector(".current-slide")
	const nextDot = currentDot.nextElementSibling
	const nextIndex = slides.findIndex(slide => slide === nextSlide)

	moveToSlide(track, currentSlide, nextSlide)
	updateDots(currentDot, nextDot)
	hideShowArrows(nextIndex)
})

dotsNav.addEventListener("click", e => {
	const targetDot = e.target.closest('button')

	if(!targetDot) return

	const currentSlide = track.querySelector(".current-slide");
	const currentDot = dotsNav.querySelector(".current-slide")
	const targetIndex = dots.findIndex(dot => dot === targetDot)

	const targetSlide = slides[targetIndex]
	moveToSlide(track, currentSlide, targetSlide)
	updateDots(currentDot, targetDot)
	hideShowArrows(targetIndex)
})