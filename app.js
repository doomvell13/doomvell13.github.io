// Selectors
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const currentScoreP1 = document.getElementById("currentScore-0");
const currentScoreP2 = document.getElementById("currentScore-1");
const diceContainer = document.querySelector(".diceContainer");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const randomDice = document.querySelector(".rollDice");
const holdScore = document.querySelector(".holdScore");

score1.textContent = 0;
score2.textContent = 0;
currentScoreP1.textContent = 0;
currentScoreP2.textContent = 0;
// diceContainer.classList.add("hide");
const score = (0, 0);
let currentScore = 0;
let currentPlayer = 0; // <- Set current player to 0
// Roll Function
// Generate random dice roll
// Display the number
// Check if any dice is roll to 1

randomDice.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const diceRoll1 = Math.floor(Math.random() * 6) + 1;
  const diceRoll2 = Math.floor(Math.random() * 6) + 1;
  // 2. Display dice
  dice1.src = `img/dice-${diceRoll1}.png`;
  dice2.src = `img/dice-${diceRoll2}.png`;

  if (diceRoll1 !== 1 && diceRoll2 !== 1) {
    currentScore += diceRoll1 + diceRoll2;
    // console.log(currentScore);
    document.getElementById(
      `currentScore-${currentPlayer}`
    ).textContent = currentScore;
    console.log(currentPlayer);
  } else {
    // reset score shown, switch player and reset current score to 0
    document.getElementById(`currentScore-${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    currentScore = 0;

    document.querySelector(".player1").classList.toggle("active");
    document.querySelector(".player2").classList.toggle("active");
  }
});

//   diceContainer.classList.remove("hide");
// dice1result.src = `dice-${dice1}.png`;
// dice2result.src = `dice-${dice2}.png`;
