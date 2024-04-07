// function play() {
//   //Step-01:Hide the home screen. To hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   //   Step 02:Show the play ground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;

  // Stop the game if pressed 'Esc'
  if (playerPressed === "Escape") {
    gameOver();
  }

  // Get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // Check Matched or Not
  if (playerPressed === expectedAlphabet) {
    console.log("You get a point");

    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // --------------------------------------
    //   // Update Score:
    //   // 1.Get the current score
    //   const currentScoreElement = document.getElementById("current-score");
    //   const currentScoreText = currentScoreElement.innerText;
    //   const currentScore = parseInt(currentScoreText);
    //   console.log(currentScore);

    //   // 2.Increase the score by 1
    // const newScore = currentScore + 1;
    //   // 3.Show the updated score
    //   currentScoreElement.innerText = newScore;

    //   // Start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You missed. you lost a life");

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);
    if (updatedLife === 0) {
      gameOver();
    }
    // ------------------------------------------
    //   // Step-1: Get the current Life Number
    //   const currentLifeElement = document.getElementById("current-life");
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);

    //   // Step-2: Reduce the life count
    //   const newLife = currentLife - 1;

    //   // Step-3: Display the updated life count
    //   currentLifeElement.innerText = newLife;
  }
}

// Capture Keyboard Key Press
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // Step-01: Generate a random alphabet
  const alphabet = getARandomAlphabet();

  //   Set Randomly Generated Alphabet to the screen(show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //   Set Background Color
  setBackgroundColorById(alphabet);
}

function play() {
  // Hide Everything Show Only the playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // Reset Score and Life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // Update Final Score
  // 1. Get the final Score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);
  // Clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
