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

//LOGiC: COMPARISON. SCORE TRACKING, RETURN RESULTS
function playRound(playerSelection, computerSelection) {
    if(playerSelection ===  computerSelection) {
        return "Tie! You both chose Rock!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore +=1;
        return "You've lost, the computer chose Paper.";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore += 1;
        return "Winner! The computer chose Scissors";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie! Both you and the computer chose Paper.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore +=1;
        return "Loser! The computer chose Scissors! Snip snip.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "You win! Paper beats rock. Get smothered.";
    } else if (playerSelection === "scissors" && computerSelection) {
        return "Tie! Both you and the computer chose Scissors."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "Loser! Scissors loses to Rock!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "Winner! Scissors defeats Paper!"
    } else {
        return "Bad Input";
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