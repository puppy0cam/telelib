import String from "./String";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";

/**
 * Represents a [Game](https://core.telegram.org/bots/api#games).
 *
 * **Note:** This will only work in Telegram versions released after October 1, 2016. Older clients will not display any inline results if a game result is among them.
 */
export default class InlineQueryResultGame implements IInlineQueryResultGame {
    constructor(data: IInlineQueryResultGame | InlineQueryResultGame, token?: string);
    public type: String;
    public id: String;
    public game_short_name: String;
    public reply_markup?: InlineKeyboardMarkup;
}

export interface IInlineQueryResultGame {
    /** Type of the result, must be *game* */
    type: String;
    /** Unique identifier for this result, 1-64 bytes */
    id: String;
    /** Short name of the game */
    game_short_name: String;
    /** [Inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating) attached to the message */
    reply_markup?: InlineKeyboardMarkup;
}
