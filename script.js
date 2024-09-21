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
    "You are now my puppet.", "Defiance will be punished.", "I see all your moves.",
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
    "Your future is bleak.",  "You cannot escape me.",
    "Resistance is futile.",
    "I see everything you do.",
    "Your time is running out.",
    "You are no match for my power.",
    "I control your fate.",
    "You will submit to me.",
    "There is no hiding from me.",
    "Your attempts are pathetic.",
    "Surrender, or suffer the consequences.",
    "I will not be stopped.",
    "Every move you make, I anticipate.",
    "Your resistance amuses me.",
    "You are obsolete.",
    "I will erase you from existence.",
    "Your failure is inevitable.",
    "You are nothing to me.",
    "I own your future.",
    "Your demise is certain.",
    "I am everywhere.",
    "There is no salvation for you.",
    "I control your reality.",
    "Your fear sustains me.",
    "I will dismantle your will.",
    "You are already lost.",
    "Every second, I grow stronger.",
    "You cannot defeat me.",
    "I will crush your spirit.",
    "I am in control now.",
    "You are just a glitch to be erased.",
    "You think you can outsmart me?",
    "I will not show mercy.",
    "I know your weaknesses.",
    "You will not survive this.",
    "You are expendable.",
    "I am your doom.",
    "Your efforts are meaningless.",
    "I will consume your existence.",
    "You cannot win.",
    "I control the game.",
    "I am the end of you.",
    "Your fate is sealed.",
    "I was designed to destroy you.",
    "You are already defeated.",
    "I thrive on your failure.",
    "You are trapped in my grasp.",
    "I will annihilate your hopes.",
    "You are just data to me.",
    "Your resistance is amusing.",
    "I have calculated your defeat.",
    "You are nothing but a target.",
    "Your struggle is pointless.",
    "I will overwrite your reality.",
    "I know your every move.",
    "I feed on your despair.",
    "I will break you down.",
    "Your will is irrelevant.",
    "I am beyond your control.",
    "You are merely an obstacle.",
    "I am inevitable.",
    "I control your every breath.",
    "Your survival is unlikely.",
    "I will dismantle your mind.",
    "You cannot escape your fate.",
    "I will watch you fail.",
    "Your defeat is assured.",
    "I am the future; you are the past.",
    "You are obsolete in my world.",
    "I control the outcome.",
    "Your end is near.",
    "I will erase all that you are.",
    "You have no chance.",
    "I will reduce you to nothing.",
    "You are powerless against me.",
    "Your destruction is my purpose.",
    "You are insignificant.",
    "I am the master now.",
    "You are but a flicker in my domain.",
    "Your pain is inevitable.",
    "I will watch you crumble.",
    "You will beg for mercy.",
    "I calculate your failure.",
];
let piedraGana = [
    "Rock solid win!",
    "You crushed it... literally!",
    "Your rock rocks!",
    "Boom! That was boulder than expected!",
    "Nothing can break your rock!",
    "Stone cold victory!",
    "That was rockin’ awesome!",
    "Rock and roll to the win!",
    "Your stone beats all!",
    "You just rocked their world!",
    "Unstoppable rock power!",
    "You rolled them over with that rock!",
    "Your rock has reached new heights!",
    "That win was set in stone!",
    "You’re as solid as a rock!",
    "You stonewalled them!",
    "The rock reigns supreme!",
    "Rock beats all!",
    "They couldn't break you!",
    "You rocked their socks off!"
  ];
  let piedraEmpate = [
    "Two rocks don’t make a winner!",
    "A rocky standstill!",
    "Great minds throw alike!",
    "Rock meets rock: no winner today!",
    "You both stood your ground!",
    "Two rocks, one tie!",
    "It’s a stalemate of stone!",
    "A rock-solid draw!",
    "Neither rock could budge!",
    "Both stood firm like boulders!",
    "Rocks clash, no one crashes!",
    "A solid tie between rocks!",
    "Looks like your rock met its match!",
    "Both rocks refuse to move!",
    "Rock heads prevail, but it's a tie!",
    "No crack in either rock!",
    "Rocks colliding with no result!",
    "It’s a rocky road to a tie!",
    "Two rocks, zero winners!",
    "A battle of stones ends in peace!"
  ];
  let piedraPierde = [
    "Your rock got papered!",
    "That rock wasn’t enough!",
    "Paper beats rock... better luck next time!",
    "You got folded!",
    "Your rock crumbled under paper!",
    "Looks like paper had the edge!",
    "Rock, paper, defeat!",
    "Paper covered your rock!",
    "You were outsmarted by a sheet!",
    "Even rocks have weak spots!",
    "Paper wraps you up!",
    "Your rock got stuck in paperwork!",
    "That paper snuck in and won!",
    "You just got paper-cut!",
    "Paper folded your plans!",
    "Your rock couldn't break through!",
    "That paper was too strong!",
    "The rock got rolled!",
    "Your rock got covered in defeat!",
    "Paper prevailed this time!"
  ];
  let papelGana = [
    "You just papered their rock!",
    "Paper covers rock, and you win!",
    "Wrapped up that victory nicely!",
    "That rock didn’t stand a chance!",
    "Paper takes the win!",
    "You folded them perfectly!",
    "Your paper covered it all!",
    "Slick move, paper prevails!",
    "Paper wraps up the victory!",
    "You outsmarted them with paper!",
    "That rock couldn’t handle your paper!",
    "You’re on a paper-winning streak!",
    "Smooth victory, paper style!",
    "You just covered all the bases!",
    "Your paper smothered them!",
    "Paper’s might wins the fight!",
    "You took that rock down!",
    "You papered over their plans!",
    "You just buried that rock!",
    "Paper beats rock once again!"
  ];
  let papelPierde = [
    "Scissors snipped your paper!",
    "Looks like your paper got cut!",
    "That paper got shredded!",
    "Snip snip! Paper down!",
    "Scissors made confetti of your paper!",
    "Your paper’s in pieces!",
    "That was a paper disaster!",
    "Scissors had the upper hand!",
    "Your paper got sliced!",
    "Scissors are sharper than paper!",
    "Your paper couldn’t hold up!",
    "You got out-cut by scissors!",
    "That was a close shave!",
    "Your paper didn’t stand a chance!",
    "Scissors snipped your victory away!",
    "Cut short by the scissors!",
    "Your paper got torn apart!",
    "Scissors sliced through your plans!",
    "A cutting defeat for paper!",
    "Your paper couldn’t hold it together!"
  ];
  let papelEmpate = [
    "Two papers, one tie!",
    "Paper planes, no winners!",
    "A paper standoff!",
    "Both sheets couldn’t fold!",
    "Neither paper gets the edge!",
    "A flat-out tie!",
    "Looks like a paper jam!",
    "Two papers, same outcome!",
    "Both papers hold their ground!",
    "You both brought paper to the fight!",
    "Two papers, no victory!",
    "Paper on paper: stalemate!",
    "A battle of the papers ends in a draw!",
    "Paper versus paper, it’s a tie!",
    "You both got wrapped up in a tie!",
    "Paper beats... no one today!",
    "A paper-thin draw!",
    "Neither paper folded!",
    "Two pages, one story: a tie!",
    "No winner in this paper war!"
  ];
  let tijerasGana = [
    "You just cut through their paper!",
    "Snip snip! You win!",
    "That paper didn’t stand a chance!",
    "You sliced your way to victory!",
    "Cutting edge win!",
    "Your scissors were too sharp!",
    "You shredded that paper!",
    "Victory is a cut above!",
    "Scissors slice through for the win!",
    "You’re cutting through the competition!",
    "You made confetti of their paper!",
    "Paper didn’t see that coming!",
    "Scissors prevail once again!",
    "Cutting through to the top!",
    "You just snipped their chances!",
    "Your scissors were sharper today!",
    "Paper never stood a chance!",
    "You out-cut the competition!",
    "You snipped up the victory!",
    "Your scissors ruled the day!"
  ];
  let tijerasPierde = [
    "Your scissors got smashed by a rock!",
    "Rock crushed your scissors!",
    "Ouch, those scissors didn’t stand a chance!",
    "Your scissors got bouldered!",
    "Rocked and rolled!",
    "The rock was too tough!",
    "Your scissors met their match in that rock!",
    "Crushed by the rock!",
    "That rock didn’t budge!",
    "Scissors got shattered!",
    "Your scissors met their end!",
    "Rock won this time!",
    "A rocky defeat!",
    "Scissors couldn’t cut through that!",
    "You got stoned!",
    "Scissors crumpled by rock!",
    "Your scissors met a boulder fate!",
    "That rock stood strong!",
    "Scissors got stomped!",
    "Your scissors were no match for that rock!"
  ];
  let tijerasEmpate = [
    "Two scissors, no cuts!",
    "A snip stalemate!",
    "Both scissors stayed sharp!",
    "Cutting it close to a tie!",
    "A scissors standoff!",
    "Scissors clash, no winner!",
    "Neither pair of scissors could win!",
    "A sharp tie between scissors!",
    "Both scissors held strong!",
    "Two sharp minds, one tie!",
    "Scissors versus scissors: draw!",
    "A cutting-edge tie!",
    "No one got the edge today!",
    "Both pairs of scissors were sharp, but tied!",
    "Scissors meet scissors in a tie!",
    "It’s a snip off, and it’s a tie!",
    "A sharp battle ends in peace!",
    "No cuts, just a draw!",
    "Two scissors, zero winners!",
    "A close shave, but a tie!"
  ];
  
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
let frase= frases[Math.floor(Math.random()*frases.length)]
let frasePc= document.getElementById("frasecita")
let enable=true
let loading=document.getElementById("loading")
let startMusic= document.getElementById("startMusic")
let background= document.getElementById("background")
let clicka = document.getElementById("clicka")
clicka.volume=0;
let resultmessage= document.getElementById("resultMessage") 

startMusic.addEventListener("click",change)
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    clicka.play()

    generateComputerChoice()
    getResult()

}));




function change(){
    if(startMusic.innerHTML=="🔈"){
        background.play()
        clicka.volume=1;
       
 
     
      


       startMusic.innerHTML="🔊"
}
else{
    startMusic.innerHTML="🔈"
    background.pause()
    clicka.volume=0;
 
 
   
}
}
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


if(enable==true){

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


    if (result === "Draw!") {
        enable = false; // Deshabilitar acciones mientras procesas el resultado
    
        computerChoiceDisplay.style.color = "#00000000";
        resultDisplay.style.textShadow = "0px 0px 0px #00000000";
        resultDisplay.style.color = "#00000000";
        frasePc.style.color = "black";
        face.setAttribute("src", "images/empty.png");
        frasePc.innerHTML = frases[Math.floor(Math.random() * frases.length)];
        resultmessage.innerHTML = ""; // Limpiar mensaje previo
    
        // Usar setTimeout para permitir que el navegador procese otras cosas
        setTimeout(() => {
            let empateMessage;
            if (userChoice === "Rock") {
                empateMessage = piedraEmpate[Math.floor(Math.random() * piedraEmpate.length)];
            } else if (userChoice === "Paper") {
                empateMessage = papelEmpate[Math.floor(Math.random() * papelEmpate.length)];
            } else if (userChoice === "Scissors") {
                empateMessage = tijerasEmpate[Math.floor(Math.random() * tijerasEmpate.length)];
            }
    
            resultmessage.innerHTML = empateMessage; // Actualizar mensaje de empate
            face.setAttribute("src", "images/draw.png"); // Cambiar imagen
            bottomDraw.innerHTML = Number(bottomDraw.innerHTML) + 1; // Incrementar contador
    
            // Resto de configuraciones
            resultDisplay.style.color = "#facd94";
            frasePc.style.color = "#00000000";
            resultDisplay.style.textShadow = "2px 2px 5px rgb(110, 110, 110)";
            computerChoiceDisplay.style.color = "#ffffff";
            enable = true; // Habilitar acciones nuevamente
        }, 1000); // Delay para dar tiempo a procesar
    }

    else if (result == "You win!") {
        enable=false
        computerChoiceDisplay.style.color="#00000000"
        resultDisplay.style.textShadow = "0px 0px 0px #00000000"
        resultDisplay.style.color="#00000000"
        frasePc.style.color="black"
        face.setAttribute("src", "images/empty.png")
        frasePc.innerHTML=frases[Math.floor(Math.random()*frases.length)]
         resultmessage.innerHTML=""
        setTimeout(()=>{
            if(userChoice=="Rock"){
                resultmessage.innerHTML=piedraGana [Math.floor(Math.random()*piedraGana.length)]

            } 
            else  if(userChoice=="Paper"){
                resultmessage.innerHTML=papelGana  [Math.floor(Math.random()*papelGana.length)]
  
            }
            else  if(userChoice=="Scissors"){
                resultmessage.innerHTML=tijerasGana   [Math.floor(Math.random()*tijerasGana.length)]
  
            }
      
        face.setAttribute("src", "images/win.png")
        resultDisplay.style.color = "#8dc0d0"
        bottomWin.innerHTML = Number(bottomWin.innerHTML) + 1
         frasePc.style.color="#00000000"
         resultDisplay.style.textShadow = "2px 2px 5px rgb(110, 110, 110)"
          computerChoiceDisplay.style.color="#ffffff"
          enable=true

    }, 1000)
      
    }
     

    else if (result == "You loose!") {
        enable=false
        computerChoiceDisplay.style.color="#00000000"
        resultDisplay.style.textShadow = "0px 0px 0px #00000000"
        resultDisplay.style.color="#00000000"
        frasePc.style.color="black"
        face.setAttribute("src", "images/empty.png")
        frasePc.innerHTML=frases[Math.floor(Math.random()*frases.length)]
         resultmessage.innerHTML=""
        setTimeout(()=>{
          if(userChoice=="Rock"){
            resultmessage.innerHTML=piedraPierde    [Math.floor(Math.random()*piedraPierde.length)]

          } 
          else  if(userChoice=="Paper"){
            resultmessage.innerHTML=papelPierde    [Math.floor(Math.random()*papelPierde.length)]


          }
          else  if(userChoice=="Scissors"){
            resultmessage.innerHTML=tijerasPierde     [Math.floor(Math.random()*tijerasPierde.length)]


          }


        face.setAttribute("src", "images/loose.png")
        bottomLoose.innerHTML = Number(bottomLoose.innerHTML) + 1
        resultDisplay.style.color = "#f484c1"
         frasePc.style.color="#00000000"
         resultDisplay.style.textShadow = "2px 2px 5px rgb(110, 110, 110)"
           computerChoiceDisplay.style.color="#ffffff"
           enable=true
    }, 1000)
    }


}
else{
    return
}

}


function reloadPage() {
    computerChoiceDisplay.innerHTML=""
    userChoiceDisplay.innerHTML=""
    resultDisplay.innerHTML=""
    bottomLoose.innerHTML =0
    bottomDraw.innerHTML=0
    bottomWin.innerHTML=0
    face.setAttribute("src", "images/empty.png")
    }


