import { generateHangmanDisplayLetters } from "./generatePartialWordLine";
import {test, expect} from "vitest"

test("generate partial word line with guessed words2", () => {
    expect(generateHangmanDisplayLetters(["m", "a", "d"], "mandarin")).toEqual(["m", "a", "_", "d", "a", "_", "_", "_"])
})

test("generate partial word line with guessed words2", () => {
    expect(generateHangmanDisplayLetters(["u", "e", "a", "m", "d", "y"], "mandarin")).toEqual(["m", "a", "_", "d", "a", "_", "_", "_"])
})

test("generate partial word line with guessed words2", () => {
    expect(generateHangmanDisplayLetters(["u", "e", "a", "m", "d", "y"], "academy")).toEqual(["a", "_", "a", "d", "e", "m", "y"])
})

test("generate partial word line with guessed words2", () => {
    expect(generateHangmanDisplayLetters(["i", "p", "a", "m", "u", "y"], "mohammed")).toEqual(["m", "_", "_", "a", "m", "m", "_", "_"])
})
