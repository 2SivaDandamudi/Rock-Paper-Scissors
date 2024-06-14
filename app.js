

const player = document.querySelector('.player')
const bot = document.querySelector('.bot')
const resultDiv = document.querySelector('.result')
const choices = ['rock', 'paper', 'scissors']

function playGame (playerChoice) {
   
    const computerChoice = choices[Math.floor(Math.random() * 3)]
   let result = ''

   if (playerChoice === computerChoice){
    result = "Its a TIE"
   }
   else{
    switch(playerChoice){
        case 'rock':
           result = (computerChoice === 'scissors') ? 'You Win' : 'You Lose'
            break
        case 'paper' :
            result = (computerChoice === 'rock') ? "You Win" : 'You Lose'
            break
        case 'scissors' : 
            result = (computerChoice === 'paper') ? "You Win" : 'You Lose'
    }
   }
    player.textContent = `Player : ${playerChoice}`
    bot.textContent = `Bot : ${computerChoice}`
    resultDiv.textContent = result

    resultDiv.classList.remove('greenText', 'redText')

    switch (result){
        case 'You Win' :
            resultDiv.classList.add('greenText')
            break
        case 'You Lose' :
            resultDiv.classList.add('redText')
            break
    }
}