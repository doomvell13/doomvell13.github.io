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
const winningScoreInput2 = document.querySelector(".scores");

const diceRollSound = new Howl({
  src: ["rolldice.mp3", "rolldice.wav"],
});

const winningSound = new Howl({
  src: ["win.wav"],
});

const changePlayerSound = new Howl({
  src: ["sad.mp3", "sad.wav"],
});

let init = () => {
  winningScore = winningScoreInput2;
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
diceContainer.classList.add("hidden");

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
    diceRollSound.play();
    diceContainer.classList.remove("hidden");
    randomDice.classList.remove("reveal");
    randomDice.classList.add("hidden");
    holdScore.classList.remove("reveal");
    holdScore.classList.add("hidden");
    currentScoreP1.classList.remove("reveal");
    currentScoreP1.classList.add("hidden");
    currentScoreP2.classList.remove("reveal");
    currentScoreP2.classList.add("hidden");
    setTimeout(function () {
      randomDice.classList.add("reveal");
      holdScore.classList.add("reveal");
      currentScoreP1.classList.add("reveal");
      currentScoreP2.classList.add("reveal");
    }, 1500);

    const diceRoll1 = Number(dice[0].dataset.roll);
    const diceRoll2 = Number(dice[1].dataset.roll);

    if (diceRoll1 !== 1 && diceRoll2 !== 1) {
      currentScore += diceRoll1 + diceRoll2;

      document.getElementById(
        `currentScore-${currentPlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
      changePlayerSound.play();
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
      diceContainer.classList.add("hidden");
      randomDice.classList.remove("reveal");
      holdScore.classList.remove("reveal");
      winningSound.play();
    } else {
      switchPlayer();
      changePlayerSound.play();
    }
  }
});

const handleSubmit = (event) => {
  event.preventDefault();
  init();
};

newGame.addEventListener("click", init);

winningScoreInput2.addEventListener("change", (e) => {
  winningScore = e.target.value;
  handleSubmit;
});
