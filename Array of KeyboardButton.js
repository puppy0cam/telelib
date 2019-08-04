import KeyboardButton from "./KeyboardButton.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForKeyboardButton from "./createValidatorForKeyboardButton.js";

export default ArrayOf(createValidatorForKeyboardButton);
