import Array_of_Array_of_InlineKeyboardButton from "./Array of Array of InlineKeyboardButton.js";
import Bot from "./Bot.js";

export default class InlineKeyboardMarkup extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            inline_keyboard,
        } = _value;
        this.inline_keyboard = Array_of_Array_of_InlineKeyboardButton(inline_keyboard, _token);
    }
}
