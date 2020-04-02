/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Declaring Variables
var scores, eachRoundScore, activePlayer, gamePlaying;

//Calling the function which will reset all the variables to zero
newGame(); 

document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying){
  //Rolling the dice
  var dice=rollingDice();
  displayDice(dice);

  //Updating Scores
  if(dice!==1){    
    eachRoundScore+=dice;
    document.querySelector('#current-score-player'+activePlayer).innerText=eachRoundScore;
  }
  else{
    //changing player
    changingPlayer();
  }
  }
})


//Function to generate a random number
function rollingDice(){
  var dice=Math.floor(Math.random()*6)+1;
  return dice;
}

//Function to display dice image
function displayDice(dice){
  switch(dice){
    case 1:
        displayDiceImage('./images/dice-1.png');
        break;

    case 2:
        displayDiceImage('./images/dice-2.png');
        break;

    case 3:
        displayDiceImage('./images/dice-3.png');
        break;

    case 4:
        displayDiceImage('./images/dice-4.png');
        break;

    case 5:
        displayDiceImage('./images/dice-5.png');
        break;

    case 6:
        displayDiceImage('./images/dice-6.png');
        break;

    default:
      document.querySelector('.dice').style.display='none';
      break;
  }
}


function displayDiceImage(imageName){
  document.querySelector('.dice').style.display="block";
  document.querySelector('.dice').src=imageName;
 
}

document.querySelector('.btn-hold').addEventListener('click', function(){
 if(gamePlaying){
  //adding round score to global score
  scores[activePlayer-1]+=eachRoundScore;

  //updating the scores on UI
  document.getElementById('score-player'+activePlayer).innerText=scores[activePlayer-1];
  
  //checking the winner
  if((scores[activePlayer-1]) >= 100){
    //Displaying the winner
    document.getElementById('name' + activePlayer).innerText='Winner';
    document.getElementById('name'+activePlayer).style.fontWeight='bold';
    document.getElementById('name'+activePlayer).style.color='Green';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+(activePlayer-1)+'-panel').classList.add('winner');
    document.querySelector('.player-'+(activePlayer-1)+'-panel').classList.remove('active');
    gamePlaying=false;
  }
  else{
    //Changing the player
    changingPlayer();
  }
 }
})

//Function when player is changed by either the value of dice 1 or by holding
function changingPlayer(){
  eachRoundScore=0;
  activePlayer===1 ? activePlayer = 2 : activePlayer = 1;

  document.getElementById('current-score-player1').innerText='0';
  document.getElementById('current-score-player2').innerText='0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //hiding the dice again
  document.querySelector('.dice').style.display='none';
}

//Event for new game
document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
  //Initializing everything to zero
  scores= [0,0];
  eachRoundScore=0;
  activePlayer=1;
  gamePlaying=true;
  renderToZero();
}

//Function to set every value to zero
function renderToZero(){
  document.getElementById("score-player1").innerText="0";
  document.getElementById('score-player2').innerText="0";
  document.getElementById('current-score-player1').textContent='0';
  document.getElementById('current-score-player2').textContent='0';
  document.querySelector('.dice').style.display='none';
  document.getElementById('name1').innerText='Player 1';
  document.getElementById('name2').innerText='Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}


 