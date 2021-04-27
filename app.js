// Selectors
let scores, currentScore, currentPlayer, winningScore, playing;
const player1 = document.querySelector(".player0");
const player2 = document.querySelector(".player1");
const score1 = document.querySelector("#globalScore-0");
const score2 = document.querySelector("#globalScore-1");
const currentScoreP1 = document.getElementById("currentScore-0");
const currentScoreP2 = document.getElementById("currentScore-1");
const diceContainer = document.querySelector(".diceContainer");
const diceE1 = document.getElementById("dice1");
const diceE2 = document.getElementById("dice2");
const randomDice = document.querySelector(".rollDice");
const holdScore = document.querySelector(".holdScore");
const checkWinningScore = document.getElementById("new-game-form");
const newGame = document.querySelector(".newGame");
const setHighScore = document.querySelector("#get-winning-score");
const winningScoreInput = document.querySelector(".winning-score-input");

// Game init Function
let init = () => {
  winningScore = winningScoreInput.value;
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
  player1.classList.remove("winner");
  player2.classList.remove("winner");
  player1.classList.add("active");
  player2.classList.remove("active");
};
init();

// Roll Dice Function
randomDice.onclick = function () {
  rollDice();
};

function rollDice() {
  const diceRoll1 = Math.floor(Math.random() * 6 + 1);
  const diceRoll2 = Math.floor(Math.random() * 6 + 1);
  console.log(diceRoll1, diceRoll2);
  for (var i = 1; i <= 6; i++) {
    diceE1.classList.remove("show-" + i);
    if (diceRoll1 === i) {
      diceE1.classList.add("show-" + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    diceE2.classList.remove("show-" + k);
    if (diceRoll2 === k) {
      diceE2.classList.add("show-" + k);
    }
  }
  if (diceRoll1 !== 1 && diceRoll2 !== 1) {
    currentScore += diceRoll1 + diceRoll2;
    // console.log(currentScore);
    document.getElementById(
      `currentScore-${currentPlayer}`
    ).textContent = currentScore;
  } else {
    setTimeout(rollDice(), 1000);
    switchPlayer();
  }
}

// Switch player function
const switchPlayer = function () {
  document.getElementById(`currentScore-${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  document.querySelector(".player0").classList.toggle("active");
  document.querySelector(".player1").classList.toggle("active");
};

// Roll dice function
// randomDice.addEventListener("click", function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const diceRoll1 = Math.floor(Math.random() * 6) + 1;
//     const diceRoll2 = Math.floor(Math.random() * 6) + 1;
//     // 2. Display dice
//     dice1.src = `img/dice-${diceRoll1}.png`;
//     dice2.src = `img/dice-${diceRoll2}.png`;

//     if (diceRoll1 !== 1 && diceRoll2 !== 1) {
//       currentScore += diceRoll1 + diceRoll2;
//       // console.log(currentScore);
//       document.getElementById(
//         `currentScore-${currentPlayer}`
//       ).textContent = currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });
//   diceContainer.classList.remove("hide");
// dice1result.src = `dice-${dice1}.png`;
// dice2result.src = `dice-${dice2}.png`;

// Hold score function

holdScore.addEventListener("click", function () {
  if (playing) {
    scores[currentPlayer] += currentScore;

    document.getElementById(`globalScore-${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= winningScore) {
      playing = false;
      document.querySelector(`.player${currentPlayer}`).classList.add("winner");
      document
        .querySelector(`.player${currentPlayer}`)
        .classList.remove("active");
    } else {
      switchPlayer();
    }
  }
});

const handleSubmit = (event) => {
  event.preventDefault();
  init();
};

newGame.addEventListener("click", init);
checkWinningScore.addEventListener("submit", handleSubmit);
