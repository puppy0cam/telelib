import InlineKeyboardButton from "./InlineKeyboardButton.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForInlineKeyboardButton from "./createValidatorForInlineKeyboardButton.js";

export default ArrayOf(createValidatorForInlineKeyboardButton);
