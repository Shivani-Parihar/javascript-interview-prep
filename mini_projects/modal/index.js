const modal = document.querySelector(".modal");
const trigger = document.querySelector(".modal-trigger");
const closeBtn = document.querySelector(".close-button");

function windowClickToggle(event) {
	if(event.target === modal) {
		toggleModal()
	} 
}

function toggleModal() {
	modal.classList.toggle("show-modal");
}

trigger.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

modal.addEventListener("click", windowClickToggle)