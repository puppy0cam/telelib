import Array_of_Array_of_KeyboardButton from "./Array of Array of KeyboardButton.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";

export default class ReplyKeyboardMarkup extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            keyboard,
            resize_keyboard,
            one_time_keyboard,
            selective,
        } = _value;
        this.keyboard = Array_of_Array_of_KeyboardButton(keyboard, _token);
        if (resize_keyboard != null) {
            this.resize_keyboard = Boolean(resize_keyboard);
        }
        if (one_time_keyboard != null) {
            this.one_time_keyboard = Boolean(one_time_keyboard);
        }
        if (selective != null) {
            this.selective = Boolean(selective);
        }
    }
}
