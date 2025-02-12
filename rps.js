

function getComputerChoice() {
    let computerChoice = "";
    const choiceOne = "Rock"; 
    const choiceTwo = "Paper";
    const choiceThree = "Scissors";

    let choice = Math.floor(Math.random()* 3);

    if (choice === 0) {
        computerChoice = choiceOne;
    }
    else if (choice === 1) {
        computerChoice = choiceTwo;
    }
    else {
        computerChoice = choiceThree;
    }
    console.log(`Computer Choice : ${computerChoice}`);
    return computerChoice;

}


// initializations out of the loop
let humanScore = 0; let computerScore = 0;

let humanScoreDisplay = document.getElementById("humanScore");
let computerScoreDisplay = document.getElementById("computerScore");

let winner = document.getElementById("winnerTag");

function playRound(humanSelection) {
    /*
    This game is played in one round, and there are three three type of outcomes.,
    1. rock and paper
    2. paper and scissors
    3. scissors and rock
    */
    let status = "";
    console.log(`Human Choice : ${humanSelection}`);
    let computerSelection = getComputerChoice().toLowerCase();

    // The moment someone scores 5, they should be displayed.
    if ((humanScore === 5) || (computerScore === 5)) {
        let winnerName = (humanScore === 5) ? "Human" : "Computer"; 
        winner.textContent = `${winnerName} Won this time!!!`;
        return ;
    }
    else {
        if (humanSelection === computerSelection){
            status = "Tie!!!";
        }
        else{
            if (
                (humanSelection === "rock" && computerSelection === "scissors")||
                (humanSelection === "paper" && computerSelection === "rock") ||
                (humanSelection === "scissors" && computerSelection === "paper")
            ){
                humanScore += 1; 
                humanScoreDisplay.textContent = humanScore;
                status = "Human won";
            }
            else{
                computerScore +=1; 
                computerScoreDisplay.textContent = computerScore;
                status = "Computer Won";
            }
            // find the choice which achieves 5 first
        } 
    }
}



/* The game should start only once the button is clicked*/

// find all the buttons
const buttons = document.querySelectorAll("button");

// add event listener for each button
buttons.forEach(button => {
    button.addEventListener("click",function(){
        playRound(button.id);
    });
});


