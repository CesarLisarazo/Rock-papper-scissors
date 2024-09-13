let computerChoiceDisplay = document.getElementById('computerChoice');
let userChoiceDisplay = document.getElementById('userChoice');
let resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.button');
let reload = document.getElementById("reload")
reload.addEventListener("click", reloadPage)
let userChoice;
let computerChoice;
let result;
let face = document.getElementById('face')
let bottomWin = document.getElementById("win")
let bottomLoose = document.getElementById("loose")
let bottomDraw = document.getElementById("draw")


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()

}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        computerChoice = "Rock"
    }
    if (randomNumber == 2) {
        computerChoice = "Paper"
    }

    if (randomNumber == 3) {
        computerChoice = "Scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice == userChoice) {
        result = "Draw!"
    }

    else if (computerChoice == "Rock" && userChoice == "Paper" || computerChoice == "Paper" && userChoice == "Scissors" || computerChoice == "Scissors" && userChoice == "Rock") {
        result = "You win!"


    }



    else {
        result = "You loose!"
    }

    resultDisplay.innerHTML = result

    if (result == "Draw!") {

        face.setAttribute("src", "images/draw.png")

        resultDisplay.style.color = "#facd94"
        bottomDraw.innerHTML = Number(bottomDraw.innerHTML) + 1

    }

    else if (result == "You win!") {
        face.setAttribute("src", "images/win.png")
        resultDisplay.style.color = "#8dc0d0"
        bottomWin.innerHTML = Number(bottomWin.innerHTML) + 1
    }
    else if (result == "You loose!") {
        face.setAttribute("src", "images/loose.png")
        bottomLoose.innerHTML = Number(bottomLoose.innerHTML) + 1
        resultDisplay.style.color = "#f484c1"
        result.classList.add("perdiste")
    }




}


function reloadPage() {
    location.reload()
}


