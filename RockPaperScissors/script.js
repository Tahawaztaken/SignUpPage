function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      playerScore++
      console.log("Player wins. (Rock vs Scissors)")
    }
    else if (computerSelection == "Rock") {
      console.log("Tie. (Rock vs Rock)")
    }
    else if (computerSelection == "Paper") {
      console.log("Computer wins. (Rock vs Paper)")
      computerScore++
    }
  }
  if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") {
      console.log("Computer wins. (Paper vs Scissors)")
      computerScore++
    }
    else if (computerSelection == "Rock") {
      console.log("Player Wins. (Paper vs Rock)")
      playerScore++
    }
    else if (computerSelection == "Paper") {
      console.log("Tie. (Paper vs Paper)")
      
    }
  }
  if (playerSelection == "Scissors") {
    if (computerSelection == "Scissors") {
      console.log("Tie. (Scissors vs Scissors)")
    }
    else if (computerSelection == "Rock") {
      console.log("Computer Wins. (Scissors vs Rock)")
      computerScore++
    }
    else if (computerSelection == "Paper") {
      console.log("Player Wins. (Scissors vs Paper)")
      playerScore++
    }
  }
}

//Computer Choice helper function
function getRandomInt(max) { 
  return Math.floor(Math.random() * max);
}
//Computer Choice
function getComputerChoice() {
  randomizer = getRandomInt(3);
  let choices = ["Rock", "Paper", "Scissors"]
  return choices[randomizer];
}


function getChoices() {
  //Initalizing choices
  const readlineSync = require('readline-sync');
  const playerSelection = readlineSync.question('Please select one: Rock/Paper/Scissors ');
  const computerSelection = getComputerChoice();
  choices = [playerSelection, computerSelection]
  return choices
}

var playerScore = 0;
var computerScore = 0;

while (playerScore < 2 && computerScore < 2) {
  selections = getChoices()
  playRound(selections[0], selections[1]);
  console.log(`Player: ${playerScore} Computer: ${computerScore}`)
}
winner = playerScore > computerScore ? "Player wins" : "Computer wins" 
console.log(winner) 

