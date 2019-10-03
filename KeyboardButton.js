import { Bot } from "./_internals.js";
/**
 * This object represents one button of the reply keyboard. For simple text buttons *String* can be used instead of this object to specify text of the button. Optional fields are mutually exclusive.
 *
 * **Note:** *request_contact* and *request_location* options will only work in Telegram versions released after 9 April, 2016. Older clients will ignore them.
 */
export class KeyboardButton extends Bot {
    constructor(data, token) {
        "use strict";
        if (typeof data === "string") {
            super({
                text: data,
            }, token);
        }
        else {
            super(data, token);
        }
    }
}
