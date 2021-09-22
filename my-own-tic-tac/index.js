const X_CLASS = "x"
const CIRCLE_CLASS = "circle"
const board = document.getElementById("board")
const cellElements = document.querySelectorAll('[data-cell]')
const winningMessage = document.getElementById("winning-message")
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const restartBtn = document.getElementById("restart");

const WINNING_COMBINATIONS = [[0,1,2], [3,4,5], [6,7,8],
[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

let circleTurn;

restartBtn.addEventListener("click", startGame)

startGame()

function startGame() {
	circleTurn = false;
	cellElements.forEach(cell => {
		cell.classList.remove(X_CLASS)
		cell.classList.remove(CIRCLE_CLASS)
		cell.removeEventListener("click", handleClick)
		cell.addEventListener("click", handleClick, {once: true})
	})

	winningMessage.classList.remove("show")
}

function handleClick(e) {
	//place mark
	const cell = e.target;
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

	placeMark(cell, currentClass)

	//check win
	if(checkWin(currentClass)) {
		endGame(false)
		//check draw
	} else if(isDraw()) {
		endGame(true)
	}

	//swap turns
	swapTurns()
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

function swapTurns() {
	circleTurn = !circleTurn;
}

function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}

function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
	})
}

function endGame(draw) {
	if(draw) {
		winningMessageTextElement.innerText = "Draw!"
	} else {
		winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} win`
	}

	winningMessage.classList.add("show")
}