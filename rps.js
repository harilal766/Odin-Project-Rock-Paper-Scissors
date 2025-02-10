

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


let humanScore = 0; let computerScore = 0;
function playRound(humanSelection) {
    /*
    This game is played in one round, and there are three three type of outcomes.,
    1. rock and paper
    2. paper and scissors
    3. scissors and rock
    */
    let status = null;
    console.log(`Human CHoice : ${humanSelection}`);
    let computerSelection = getComputerChoice().toLowerCase();

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
            status = "Human won";
        }
        else{
            computerScore +=1;
            status = "Computer Won";
        }

        // find the choice which achieves 5 first
    }
    if (status){
        console.log(status);
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


