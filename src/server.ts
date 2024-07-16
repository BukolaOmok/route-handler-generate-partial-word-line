const express = require("express");
import { generateHangmanDisplayLetters } from "./generatePartialWordLine";
const cors = require("cors");
const morgan = require("morgan")

const app = express()

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/partialWord/:guessedLetters/:wordToGuess", (req: any, res: any) => {
    const guessedLetters: string[] = req.params.guessedLetters
    const wordToGuess: string = req.params.wordToGuess

    const partialWordLine = generateHangmanDisplayLetters(guessedLetters, wordToGuess)

    res.json({ "Guessed Letters": guessedLetters, "Word To Guess": wordToGuess, "Partial Word": partialWordLine })

})

const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
