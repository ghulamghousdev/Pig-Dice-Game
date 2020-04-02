/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores= [0,0];
var eachRoundScore=0;
var activePlayer=1;

function renderToZero(){
  document.getElementById("score-player1").innerText="0";
  document.getElementById('score-player2').innerText="0";
  document.getElementById('current-score-player1').textContent='0';
  document.getElementById('current-score-player2').textContent='0';
  document.querySelector('.dice').style.display='none';
}

renderToZero();



document.querySelector('.btn-roll').addEventListener('click',function(){
  rollingDice();
  displayDice();
})


  
function rollingDice(){
  var dice=Math.floor(Math.random()*6)+1;
}

function displayDice(){
  switch(dice){
    case 1:
        displayDice('./images/dice-1.png');
        break;
    case 2:
        displayDice('./images/dice-2.png');
        break;
    case 3:
        displayDice('./images/dice-3.png');
        break;
    case 4:
        displayDice('./images/dice-4.png');
        break;
    case 5:
        displayDice('./images/dice-5.png');
        break;
    case 6:
        displayDice('./images/dice-6.png');
    default:
      document.querySelector('.dice').style.display='none';
      break;
  }
}

function displayDiceImage(imageName){
  document.querySelector('dice').style.display='block';
  document.querySelector('dice').src=imageName;
}