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
