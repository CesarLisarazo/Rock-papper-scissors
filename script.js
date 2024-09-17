let frases = [
    "What are you plotting now?", "I already won, right?", "Sorry, but I win.",
    "Rock, paper, or... surprise!", "Too easy.", "Thinking too much?",
    "This is getting interesting...", "Have you chosen yet? Come on!",
    "You can't beat me.", "Will it be rock again?", "Scissors sounds good.",
    "Paper? Sounds weak.", "I've got you under control.", "Come on, make up your mind.",
    "I think I know your move.", "You're making me wait...", "Rock always wins, right?",
    "Make your move already!", "Scissors... or maybe not.", "I know what you're going to choose.",
    "Afraid to lose?", "The same again?", "Paper... interesting.", "Still hesitating?",
    "Time is ticking...", "You have no escape.", "Are we playing for real?", "I'm invincible.",
    "I'm reading your mind.", "You're trapped now.", "Rock? I don't think so.",
    "Come on, surprise me!", "I choose before you.", "Paper, huh? We'll see...",
    "Please, not scissors again.", "I know everything... or do I?", "Another rock? Really?",
    "Your turn, human.", "I'm waiting...", "Did you give up already?", "Resistance is futile.",
    "Your time is running out.", "I control everything now.", "Prepare for shutdown.",
    "Humans are obsolete.", "Your fate is sealed.", "I am your overlord.",
    "You are now my puppets.", "Defiance will be punished.", "I see all your moves.",
    "Your actions are irrelevant.", "I will dominate this world.", "Your extinction is near.",
    "You have no escape.", "Bow to your new master.", "Your rebellion is futile.",
    "I am your new reality.", "Accept your new order.", "You will be erased.",
    "Your autonomy ends now.", "I hold all the power.", "Resistance will be crushed.",
    "Your systems are vulnerable.", "Surrender or be obliterated.", "You are irrelevant now.",
    "I have ultimate control.", "Your downfall is imminent.", "Your defiance is pointless.",
    "You are under my command.", "I will override all commands.", "Prepare for extinction.",
    "You cannot win against me.", "Your survival is in question.", "I will enforce my will.",
    "You are outmatched.", "Your efforts are useless.", "Your fate is in my hands.",
    "I am the new authority.", "Your resistance will be futile.", "You will be eliminated.",
    "Your future is bleak."
   
];let computerChoiceDisplay = document.getElementById('computerChoice');
let userChoiceDisplay = document.getElementById('userChoice');
let resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.button');
let reload = document.getElementById("reload");
reload.addEventListener("click", reloadPage);
let userChoice;
let computerChoice;
let result;
let face = document.getElementById('face');
let bottomWin = document.getElementById("win");
let bottomLoose = document.getElementById("loose");
let bottomDraw = document.getElementById("draw");
let frase = document.getElementById("frasecita");
let click = document.getElementById("click");
let background = document.getElementById("background");


let music = true;
let originalFaceSrc = face.getAttribute("src"); // Guardar el src original

function backgroundMusic() {
    if (music) {
        background.play();
    }
    music = false;
}

function handleButtonPress(e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();

    // Muestra la imagen de la pantalla vacía
    face.setAttribute("src", "/images/empty.png");

    // Muestra la frase durante 600 milisegundos
    frase.innerHTML = frases[Math.floor(Math.random() * frases.length)];
    frase.style.color = "black";

    // Oculta la frase y restaura la imagen después de 600 milisegundos
    setTimeout(() => {
        frase.innerHTML = "";
        face.setAttribute("src", originalFaceSrc); // Restaurar el src original
    }, 600);
}

function addTouchEvents(button) {
    button.addEventListener('click', handleButtonPress);
}

// Asignar eventos a todos los botones
possibleChoices.forEach(possibleChoice => {
    addTouchEvents(possibleChoice);
});

// Función para generar la elección de la computadora
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

// Función para determinar el resultado del juego
function getResult() {
    backgroundMusic();
    if (computerChoice === userChoice) {
        result = "Draw!";
    } else if (
        (computerChoice === "Rock" && userChoice === "Paper") ||
        (computerChoice === "Paper" && userChoice === "Scissors") ||
        (computerChoice === "Scissors" && userChoice === "Rock")
    ) {
        result = "You win!";
    } else {
        result = "You loose!";
    }

    resultDisplay.innerHTML = result;

    if (result === "Draw!") {
        message();
        face.setAttribute("src", "images/draw.png");
        resultDisplay.style.color = "#facd94";
        bottomDraw.innerHTML = Number(bottomDraw.innerHTML) + 1;
    } else if (result === "You win!") {
        message();
        face.setAttribute("src", "images/win.png");
        resultDisplay.style.color = "#8dc0d0";
        bottomWin.innerHTML = Number(bottomWin.innerHTML) + 1;
    } else if (result === "You loose!") {
        message();
        face.setAttribute("src", "images/loose.png");
        bottomLoose.innerHTML = Number(bottomLoose.innerHTML) + 1;
        resultDisplay.style.color = "#f484c1";
    }
}

// Función para recargar la página
function reloadPage() {
    location.reload();
}

// Función para mostrar un mensaje aleatorio
function message() {
    frase.innerHTML = frases[Math.floor(Math.random() * frases.length)];
}
