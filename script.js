'use strict';
console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random()*30)+1;
let score = 10;
let highscore = 0;
document.querySelector('.score').textContent = score;
const guess = Number(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
   console.log( typeof guess);

   //When there's no input
   if (!guess){
    document.querySelector('.message').textContent = '🚫 No number!';
   }
  //When player wins
   else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct number!';
    //to change the background
    document.querySelector("body").style.backgroundColor = ' rgb(255, 124, 146)';
    document.querySelector(".number").style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(score > highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = score;
    }
   }
   //When player's guess is high
   else if(guess > secretNumber){
    if (score > 1){
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game ☹';
    }
   }
   //When player's guess is low
   else if(guess < secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = '📈 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game ☹';  
    }
   }
});
//Again button
document.querySelector('.again').addEventListener('click', function(){
    score = 10;
    secretNumber = Math.trunc(Math.random()*30)+1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector(".number").style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});