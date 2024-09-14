window.addEventListener('DOMContentLoaded', () => {
const choices = document.querySelectorAll('.choice')
score = document.querySelector('#score')
modal = document.querySelector('.modal')
result = document.querySelector('#result')
restart = document.querySelector('#restart')
scoreBoard = {
    player: 0,
    computer: 0
};

// Play again function
 function play(event) {
  restart.style.display = 'inline-block'
  const playerChoice = event.target.id
  const computerChoice = getCumputerChoice()
  const winner = getWinner(playerChoice ,computerChoice)
  showWinner(winner, computerChoice)
 }

 //Get computer choice function

 function getCumputerChoice() {
    const rand = Math.random()
    if (rand < 0.34) {
        return 'rock'
    }else if (rand < 0.67) {
        return 'paper'
    } else {
        return 'scissors'
   
 }
}

// GitWinner function

function getWinner(p, c) {
if (p === c) {
    return 'draw'
}else if (p === 'rock') {
    if (c === 'paper') {
        return 'computer'
    }else{
        return 'player'
    }
}else if (p === 'paper') {
    if (c === 'scissors') {
        return 'computer'
    }else{
        return 'player'
    }
  }else if (p ==='scissors') {
    if (c === 'rock') {
        return 'computer'
    } else{
        return 'player'
    }
  }
}

//showWinner function
 function showWinner(winner, computerChoice) {
 if (winner === 'player') {
    scoreBoard.Player++
    result.innerHTML = `
    <h1 class="text-win">You win</h1>
    <i class="fas fa-hand-${computerChoice}  fa-10x"></i>
    <p>Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `
 }else if (winner === 'computer') {
    scoreBoard.Computer++
    result.innerHTML = `
    <h1 class="text-lose">You lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i> 
    <p>Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `
 }else {
    result.innerHTML = `
    <h1 class="text-draw">It's a draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `
 }
 score.innerHTML = `
  <p>Player: ${scoreBoard.Player}</p>
  <p>Computer: ${scoreBoard.Computer}</p>
 `
 modal.style.display = 'block';

 }

  //Restart game function
 function restartGame() {
    scoreBoard.player = 0
    scoreBoard.Computer = 0
    score.innerHTML = `
    <p>Player: ${scoreBoard.Player}</p>
    <p>Computer: ${scoreBoard.Computer}</p>
    `

    
 }
// clear modal 
 function clearModal(event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
 }

 //Evena listeners
 choices.forEach(choice => choice.addEventListener('click', play))
 window.addEventListener('click', clearModal)
 restart.addEventListener('click', restartGame)
   
})