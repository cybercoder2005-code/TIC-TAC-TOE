const cells = document.querySelectorAll(".cell")

const turnText = document.getElementById("turnText")

const resultText = document.getElementById("resultText")

let board = ["","","","","","","","",""]

let currentPlayer = ""

let running = false

const winPatterns = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

]

cells.forEach(cell => cell.addEventListener("click",cellClick))

function selectStarter(player){

currentPlayer = player

turnText.textContent = player + " will start"

}

function startGame(){

if(currentPlayer === ""){

alert("Select who starts first")

return

}

running = true

turnText.textContent = currentPlayer + " Turn"

}

function cellClick(){

if(!running) return

const index = this.dataset.index

if(board[index] !== "") return

board[index] = currentPlayer

this.textContent = currentPlayer

this.classList.add(currentPlayer)

checkWinner()

}

function checkWinner(){

let win = false

winPatterns.forEach(pattern=>{

const a = board[pattern[0]]
const b = board[pattern[1]]
const c = board[pattern[2]]

if(a && a === b && b === c){

win = true

}

})

if(win){

resultText.textContent = "🏆 " + currentPlayer + " Wins!"

running = false

return

}

if(!board.includes("")){

resultText.textContent = "It's a Draw!"

running = false

return

}

currentPlayer = currentPlayer === "X" ? "O" : "X"

turnText.textContent = currentPlayer + " Turn"

}

function newGame(){

board = ["","","","","","","","",""]

cells.forEach(cell=>{

cell.textContent = ""

cell.classList.remove("X","O")

})

currentPlayer = ""

running = false

turnText.textContent = "Select who starts"

resultText.textContent = ""

}