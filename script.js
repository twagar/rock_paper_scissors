//Begin script. 

// Game Variables
let computerScore = 0
let playerScore = 0
const playerSelection = prompt("Enter your answer here.");
const computerSelection = computerPlay();


//Generate a random number between 0 - 2
// 0, rock. 1, paper. 2, scissors.
const sign
function computerPlay() {
    let choice = Math.floor(Math.random() * 3)
    return sign[choice];
}
//Misc. functions for text labeling
function userWin {
    ++playerWinNum;
    playerScore.textContent = "Your current score is: " +playerWinNum;
}

function compWin() {
    ++compWinNumm;
    computerScore.textContent = "The computer's score is: " + compWinNum;
}

function tieWin() {
    ++tieNum
    tieAlert.textContent = "# of tie rounds: " + tieNum;
}

//Constants instead of string literals
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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
    } else if {playerSelection === SCISSORS} {
        if (computerSelection === PAPER) {
            userWin();
        } else {
            computerWin();
        }
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

console.log(playRound(playerSelection, computerSelection))

game()