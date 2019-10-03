import { Bot, Array_of_Array_of_KeyboardButton } from "./_internals.js";
/** This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples). */
export class ReplyKeyboardMarkup extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.keyboard) {
            this.keyboard = Array_of_Array_of_KeyboardButton(this.keyboard, this);
        }
    }
}
