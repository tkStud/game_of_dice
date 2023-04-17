let btnDice = document.getElementById('roll-dice')
let dice = document.getElementById('dice');
let newGame = document.getElementById('new-game')
let pointer1 = document.getElementById('pointer-1')
let pointer2 = document.getElementById('pointer-2')
let current1 = document.getElementById('current-1')
let current2 = document.getElementById('current-2')
let score1 = document.getElementById('score-1')
let score2 = document.getElementById('score-2')
let hold = document.getElementById('hold')

//dice drawing
let ctx = dice.getContext('2d');
ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 3;
ctx.shadowBlur = 10;
ctx.shadowColor = 'black';
ctx.fillStyle='white'
ctx.fillRect(80,0,150,150);
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.shadowBlur = 0;

//drawing of the face of the dice before the start of the game
ctx.fillStyle = "#eb4d4d";
ctx.beginPath();
ctx.arc(120, 45, 10, 0, Math.PI * 2)
ctx.fill();
ctx.closePath();
ctx.arc(180, 105, 10, 0, Math.PI * 2)
ctx.fill();
ctx.closePath();
ctx.arc(180, 45, 10, 0, Math.PI * 2)
ctx.fill();
ctx.closePath();
ctx.arc(120, 105, 10, 0, Math.PI * 2)
ctx.fill();
ctx.closePath();
ctx.arc(150, 75, 10, 0, Math.PI * 2)
ctx.fill();
ctx.closePath();
//drawing of all the faces of the dice
const radius = 10;
const padding = 30;
const centerX = 150;
const centerY = 75;
const circlesOfDice = [
	[[centerX, centerY]], //face has 1 circle
	[[centerX - padding, centerY - padding], [centerX + padding, centerY + padding]], // face has 2 circle
  [[centerX - padding, centerY - padding], [centerX + padding, centerY + padding], [centerX, centerY]], // face has 3 circle
  [[centerX - padding, centerY - padding], [centerX + padding, centerY + padding], [centerX + padding, centerY - padding], [centerX - padding, centerY + padding]], // face has 4 circle
  [[centerX - padding, centerY - padding], [centerX + padding, centerY + padding], [centerX + padding, centerY - padding], [centerX - padding, centerY + padding], [centerX, centerY]], // face has 5 circle
	[[centerX - padding, centerY - padding], [centerX + padding, centerY + padding], [centerX - padding, centerY + padding], [centerX + padding, centerY - padding], [centerX - padding, centerY], [centerX + padding, centerY]] // face has 6 circle
];

// function to get a random result when rolling dice
function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  const circle = circlesOfDice[result - 1];
 
  // Draw the white background
  ctx.fillStyle='white';
  ctx.fillRect(80,0,150,150);

  // Draw the circles for the corresponding face
  ctx.fillStyle = "#eb4d4d";
  for (let i = 0; i < circle.length; i++) {
    const x = circle[i][0];
    const y = circle[i][1];
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
	}
  return result
}

let score = 0;
let player = true;
let currentScore1 = 0;
let currentScore2 = 0;
let buttonClicked = false;

//function for change player and display score and pointer
function rulesOfTheGame(diceOne){

  if(player  && diceOne == 1){
    
    pointer1.style.display = "none";
    pointer2.style.display = "initial";
    player = false;
    score1.textContent = 0;
    score = 0;
    
  } else if (!player && diceOne == 1){
    pointer1.style.display = "initial";
    pointer2.style.display = "none";
    player = true;
    score2.textContent = 0;
    score = 0;
  }
  
  if (player){
    score1.textContent = score;
 } else if(!player){
    score2.textContent =score;
   
  }
}
//function for save the current score and check player win..
function holdScore(){
  if(player){
    currentScore1 += score;
    current1.textContent = currentScore1;
    score = 0;
    score1.textContent = score;
    pointer1.style.display = "none";
    pointer2.style.display = "initial";
    player = false;
    if (currentScore1 >= 100) {
      alert("Joueur 1 a gagné!");
      btnDice.disabled = true;
    }
  } else {
    currentScore2 += score;
    current2.textContent = currentScore2;
    score = 0;
    score2.textContent = score;
    pointer1.style.display = "initial";
    pointer2.style.display = "none";
    player = true;
    if (currentScore2 >= 100) {
      alert("Joueur 2 a gagné!");
      btnDice.disabled = true;
  }
}
}



// function for start of game
function startGame(){
  
  newGame.addEventListener("click" , () => {
    pointer1.style.display = "initial";
    pointer2.style.display = "none"
    score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    currentScore1 = 0;
    currentScore2 = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    player = true;
    btnDice.disabled = false;
  })
  btnDice.addEventListener("click", () =>{
    
    const result = rollDice();
    score += result;
    console.log(score);
    rulesOfTheGame(result);
  })
  hold.addEventListener("click", () =>{
    holdScore();
  })
}


startGame();


