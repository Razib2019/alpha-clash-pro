// function play() {
//   //Step-01:Hide the home screen. To hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   //   Step 02:Show the play ground
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

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
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
