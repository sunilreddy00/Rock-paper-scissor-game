let userWins = 0;
let userLosses = 0;
let userTies = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, computerChoice);

    document.getElementById('result').innerHTML = `You chose ${playerChoice}.<br>Computer chose ${computerChoice}.<br>${result}`;

    if (result === 'You win!') {
        userWins++;
    } else if (result === 'You lose!') {
        userLosses++;
    }else{
      userTies++;
    }
    updateScore();
}

function getResult(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if ((player === 'rock' && computer === 'scissors') || 
               (player === 'paper' && computer === 'rock') || 
               (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function updateScore() {
  document.getElementById('wins').innerText = userWins;
  document.getElementById('losses').innerText = userLosses;
  document.getElementById('ties').innerText = userTies;
}

function resetScore() {
  userWins = 0;
  userLosses = 0;
  userTies = 0;
  updateScore();
  document.getElementById('result').innerText = '';
}
