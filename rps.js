/**
 *  Randomly gets a choice of rock/paper/scissors for the computer side
 * 
 * @javadoc style comments if i wasn't lazy
*/ 
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const num = Math.floor(Math.random() * 3);
    return choices[num];
}

console.log(getComputerChoice());