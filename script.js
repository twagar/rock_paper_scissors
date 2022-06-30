//Begin script. 
const rockB = document.getElementById("rockBtn");
const paperB = document.getElementById("paperBtn");
const scissorsB = document.getElementById("scissorsBtn");
const playerScore = document.getElementById("pScore");
const computerScore = document.getElementById("cScore");
const tieAlert = document.getElementById("rTie");
const finishTxt = document.getElementById("finishText");

// Game Variables
const PAPER = "paper";
const SCISSORS = "scissors";
const ROCK = "rock";
const sign = [ROCK, PAPER, SCISSORS];
let compWinNum = 0;
let playerWinNum = 0;
let tieNum = 0; 

rockBtn.addEventListener("click", function(){
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
});
paperBtn.addEventListener("click", function() {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
})

scissorsBtn.addEventListener("click", function () {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
})

//Event listener, read the sign from the ID of clicked button.
//function clickListen(event) {
//    if (event.target.tagName !== "BUTTON") {
//        return;
//   }
//    const playerSelection = event.target.id;
//    console.log(event.target.id)
//    const computerSelection = computerPlay();
//    playRound(playerSelection,computerSelection);
//}
//document.getElementById("btnContainer").addEventListener("click", clickListen);
//Constants instead of string literals, if errors are to occur it is easier to troubleshoot.

//Generate a random number between 0 - 2
// 0, rock. 1, paper. 2, scissors.
function computerPlay() {
    let choice = Math.floor(Math.random() * 3)
    return sign[choice];
}
//Misc. functions for text labeling
function userWin() {
    playerWinNum++;
    playerScore.textContent = "Your current score is: " + playerWinNum;
    finishTxt.textContent = "Play!";
}

function compWin() {
    compWinNum++;
    computerScore.textContent = "computer's score is: " + compWinNum;
    finishTxt.textContent = "Play!";
}

function tieWin() {
    tieNum++;
    tieAlert.textContent = "# of tie rounds: " + tieNum;
    finishTxt.textContent = "Play!";
}

//Logic: simple comparison with functions to keep track of score.
function playRound(playerSelection, computerSelection) {
    if(playerSelection ===  computerSelection) {
        tieWin();
    } else if (playerSelection === ROCK) {
        if (computerSelection === SCISSORS){
            userWin();
        } else { 
            compWin();
        }
    } else if (playerSelection === PAPER) {
        if (computerSelection === ROCK) {
            userWin();
        } else {
            compWin();
        }
    } else if (playerSelection === SCISSORS) {
        if (computerSelection === PAPER) {
            userWin();
        } else {
            compWin();
        }
    } if (compWinNum === 5) {
        finishTxt.textContent = "Loser! Try again.";
        reset();
    } else if (playerWinNum === 5) {
        finishTxt.textContent = "You are the winner!";
        reset();
    }
}

//function game() {
   
//   for (let i = 0; i <= 5; ++i) {
// const computerSelection = computerPlay();
//    const playerSelection = prompt("Choose Rock, Paper, or Scissors");
//    let result = playRound(playerSelection, computerSelection);
//    console.log(`You chose ${playerSelection}`);
//    console.log(`The computer chose ${computerSelection}`);
//    console.log(result);
//    console.log(`Your score is ${playerScore}, Computer's score is ${computerScore}`);
//   } 
//    if (playerScore > computerScore) {
//        console.log("You win! " + playerScore + " to " + computerScore + ".");
//    }   else if (playerScore < computerScore) {
//        console.log("You lose " + computerScore + " to " + playerScore + ".");
//    }   else {
//        console.log("Tie game! You both won the same number of rounds.");
//    }
//}

//console.log(playRound(playerSelection, computerSelection))

// game()

//Helper Function(s)
function reset() {
    playerScore.textContent = "Your score is: 0";
    computerScore.textContent = "Computer score is: 0";
    tieAlert.textContent = "Tie round(s): 0";
    playerWinNum = 0;
    compWinNum = 0;
    tieNum = 0;
}