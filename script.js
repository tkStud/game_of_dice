let btnDice = document.getElementById('roll-dice')
let dice = document.getElementById('dice');

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
}

btnDice.addEventListener("click", () => {
	rollDice()
})