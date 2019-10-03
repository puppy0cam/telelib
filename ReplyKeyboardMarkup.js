"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a [custom keyboard](https://core.telegram.org/bots#keyboards) with reply options (see [Introduction to bots](https://core.telegram.org/bots#keyboards) for details and examples). */
class ReplyKeyboardMarkup extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.keyboard) {
            this.keyboard = _internals_js_1.Array_of_Array_of_KeyboardButton(this.keyboard, this);
        }
    }
}
exports.ReplyKeyboardMarkup = ReplyKeyboardMarkup;
