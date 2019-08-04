import GameHighScore from "./GameHighScore.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForGameHighScore from "./createValidatorForGameHighScore.js";

export default ArrayOf(createValidatorForGameHighScore);
