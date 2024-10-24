// Generate a random number between 1 and 6 for each player
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Get the <img> elements by their IDs
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');

// Set the src attribute of the <img> elements based on the random numbers
player1Dice.src = `./images/dice${randomNumber1}.png`;
player2Dice.src = `./images/dice${randomNumber2}.png`;

const resultText = document.querySelector('h1');

// Compare the dice values and update the text content accordingly
if (randomNumber1 > randomNumber2) {
  resultText.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  resultText.textContent = "Player 2 Wins!";
} else {
  resultText.textContent = "It's a Draw!";
}