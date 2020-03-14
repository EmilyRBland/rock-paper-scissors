const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return 'Invalid input.';
  }
};

const getComputerChoice = () => {
  randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      console.log('Invalid answer');
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'bomb') {
    return 'User wins!';
  } else {
    return 'Computer Wins!';
  }
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You played: ' + userChoice);
  console.log('The computer played: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();