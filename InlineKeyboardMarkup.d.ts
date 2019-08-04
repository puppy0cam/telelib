import Array_of_Array_of_InlineKeyboardButton from "./Array of Array of InlineKeyboardButton";

/**
 * This object represents an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) that appears right next to the message it belongs to.
 * **Note:** This will only work in Telegram versions released after 9 April, 2016. Older clients will display *unsupported message*.
 */
export default class InlineKeyboardMarkup implements IInlineKeyboardMarkup {
    constructor(data: IInlineKeyboardMarkup | InlineKeyboardMarkup, token?: string);
    public inline_keyboard: Array_of_Array_of_InlineKeyboardButton;
}

export interface IInlineKeyboardMarkup {
    /** Array of button rows, each represented by an Array of [InlineKeyboardButton](https://core.telegram.org/bots/api#inlinekeyboardbutton) objects */
    inline_keyboard: Array_of_Array_of_InlineKeyboardButton;
}
