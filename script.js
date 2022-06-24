//Begin script. 

// Game Variables
let computerScore = 0
let playerScore = 0
const playerSelection = prompt("Enter your answer here.");
const computerSelection = computerPlay();


//Generate a random number between 0 - 2
// 0, rock. 1, paper. 2, scissors.

function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//LOGiC: COMPARISON. SCORE TRACKING, RETURN RESULTS
function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "rock") {
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

console.log(playRound(playerSelection, computerSelection))