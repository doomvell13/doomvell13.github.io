// Selectors
let scores, currentScore, currentPlayer, winningScore, playing;
const player1 = document.querySelector(".player0");
const player2 = document.querySelector(".player1");
const score1 = document.querySelector("#globalScore-0");
const score2 = document.querySelector("#globalScore-1");
const currentScoreP1 = document.getElementById("currentScore-0");
const currentScoreP2 = document.getElementById("currentScore-1");
const diceContainer = document.querySelector(".diceContainer");
// const dice1 = document.querySelector(".dice1");
// const dice2 = document.querySelector(".dice2");
const randomDice = document.querySelector(".rollDice");

const holdScore = document.querySelector(".holdScore");
const checkWinningScore = document.getElementById("new-game-form");
const newGame = document.querySelector(".newGame");
const setHighScore = document.querySelector("#get-winning-score");
const winningScoreInput = document.querySelector(".winning-score-input");

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

// Switch player function
const switchPlayer = function () {
  document.getElementById(`currentScore-${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  document.querySelector(".player0").classList.toggle("active");
  document.querySelector(".player1").classList.toggle("active");
};

// Roll dice function
randomDice.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = [...document.querySelectorAll(".die-list")];
    // 2. Display dice
    dice.forEach((die) => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });

    const diceRoll1 = Number(dice[0].dataset.roll);
    const diceRoll2 = Number(dice[1].dataset.roll);
    // setTimeout(function(){ randomDice.removeEventListener("reveal"); }, 1500);

    if (diceRoll1 !== 1 && diceRoll2 !== 1) {
      currentScore += diceRoll1 + diceRoll2;

      document.getElementById(
        `currentScore-${currentPlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
