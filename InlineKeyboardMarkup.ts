import { Array_of_Array_of_InlineKeyboardButton, Bot, IInlineKeyboardButton, InlineKeyboardButton } from "./_internals.js";

/**
 * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will display *unsupported message*.
 */
export class InlineKeyboardMarkup extends Bot implements IInlineKeyboardMarkup {
    constructor(data: IInlineKeyboardMarkup, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.inline_keyboard) {
            this.inline_keyboard = Array_of_Array_of_InlineKeyboardButton(this.inline_keyboard, this);
        }
    }
    public inline_keyboard!: InlineKeyboardButton[][];
}

/**
 * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will display *unsupported message*.
 */
export interface IInlineKeyboardMarkup {
    /** Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.telegram.org/bots/api#inlinekeyboardbutton) objects */
    inline_keyboard: IInlineKeyboardButton[][];
}
