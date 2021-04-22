// Selectors
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const diceContainer = document.querySelector(".diceContainer");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const randomDice = document.querySelector(".rollDice");
const holdScore = document.querySelector(".holdScore");

score1.textContent = 0;
score2.textContent = 0;
// diceContainer.classList.add("hide");

// Roll Function
// Generate random dice roll
// Display the number
// Check if any dice is roll to 1

randomDice.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const diceRoll1 = Math.trunc(Math.random() * 6) + 1;
  const diceRoll2 = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  // diceEl.classList.remove("hidden");
  dice1.src = `img/dice-${diceRoll1}.png`;
  dice2.src = `img/dice-${diceRoll2}.png`;
});

//   diceContainer.classList.remove("hide");
// dice1result.src = `dice-${dice1}.png`;
// dice2result.src = `dice-${dice2}.png`;
