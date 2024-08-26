let computerChoiceDisplay = document.getElementById('computerChoice');
let userChoiceDisplay = document.getElementById('userChoice');
let resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

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
        computerChoice = "Papper"
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

   else if (computerChoice == "Rock" && userChoice == "Papper" || computerChoice == "Papper" && userChoice == "Scissors" || computerChoice == "Scissors" && userChoice == "Rock") {
        result = "You win!"
     
    }
   


    else {
        result = "You loose!"
    }

    resultDisplay.innerHTML = result
    result=""
}

