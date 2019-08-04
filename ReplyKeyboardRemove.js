import True from "./True.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";

export default class ReplyKeyboardRemove extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            remove_keyboard,
            selective,
        } = _value;
        this.remove_keyboard = True(remove_keyboard);
        if (selective != null) {
            this.selective = Boolean(selective);
        }
    }
}
