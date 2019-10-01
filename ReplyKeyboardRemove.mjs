import { Bot } from "./_internals.mjs";
/** Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)). */
export class ReplyKeyboardRemove extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
}
