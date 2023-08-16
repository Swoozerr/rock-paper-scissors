/**
 *  Randomly gets a choice of rock/paper/scissors for the computer side
 * 
 * @javadoc style comments if i wasn't lazy
*/ 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return choices[num];
}

/**
 *  Plays a round given playerSelection and computerSelection
 * 
 * @javadoc style comments if i wasn't lazy
*/ 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) return "Draw";

    if (playerSelection === "rock") {
        if(computerSelection === "paper") return "Lost, paper > rock";
        else return "Win, rock > scissors";
    }
    else if (playerSelection === "paper"){
        if(computerSelection === "scissors") return "Lost, scisors > paper";
        else return "Win, paper > rock";
    }
    else if (playerSelection === "scissors"){
        if(computerSelection === "rock") return "Lost, rock > scissors";
        else return "Win, scissors > paper";
    }
}

/**
 *  Plays a best of 5 between the human and computer and keeps score
 *      reports the winner and loser at the end
 * 
 * @javadoc style comments if i wasn't lazy
*/ 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    // loop until either player or computer reaches score of 5
    while(playerScore < 5 && computerScore < 5) {
        // prompt player to pick, no functionality to check for IllegalStateException yet
        let playerSelection = prompt("Pick: Rock, Paper, Scissors");
        playerSelection = playerSelection.toLowerCase();
        const outcome = playRound(playerSelection, getComputerChoice());

        // print out outcome of game
        console.log(outcome);

        // if string begins with D, draw and continue, else if 'W' meaning player won, else computer won
        if (outcome.charAt(0) === 'D') continue;
        else if (outcome.charAt(0) === 'W') playerScore++;
        else computerScore++;
        console.log(`Your score is: ${playerScore}, the computers score is: ${computerScore}`);
    }

    // check which player won
    if (computerScore === 5) console.log("The computer wins");
    else console.log("You win!");
}

game();
