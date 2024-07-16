const generateHangmanDisplayLetters =(guessedLetters: string [], wordToGuess: string) => {
    const displayLetters = [];
    for (const letter of wordToGuess) {
      if (guessedLetters.includes(letter)) {
        displayLetters.push(letter);
      } else {
        displayLetters.push("_");
      }
    }
    return displayLetters;
  }
  

export {generateHangmanDisplayLetters}