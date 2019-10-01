import { Bot, User, IUser, Message, IMessage, IInlineKeyboardMarkup, IInputMedia, GameHighScore } from "./_internals.js";
/**
 * This object represents an incoming callback query from a callback button in an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api#inline-mode)), the field *inline_message_id* will be present. Exactly one of the fields data or *game_short_name* will be present.
 *
 * >**NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
 */
export declare class CallbackQuery extends Bot implements ICallbackQuery {
    constructor(data: ICallbackQuery, token?: string | Bot);
    id: string;
    from: User;
    message?: Message;
    inline_message_id?: string;
    chat_instance: string;
    data?: string;
    game_short_name?: string;
    answerCallbackQuery(options?: {
        /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
        text?: string;
        /** If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*. */
        show_alert?: boolean;
        /**
         * URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game – note that this will only work if the query comes from a [*callback_game*](https://core.telegram.org/bots/api#inlinekeyboardbutton) button.
         *
         * Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
         */
        url?: string;
        /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
        cache_time?: number;
    }, timeout?: number): Promise<true>;
    editMessageCaption(options?: {
        /** New caption of the message */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message | true>;
    editMessageLiveLocation(options: {
        /** Latitude of new location */
        latitude: number;
        /** Longitude of new location */
        longitude: number;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message | true>;
    editMessageMedia(options: {
        /** A JSON-serialized object for a new media content of the message */
        media: IInputMedia;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message | true>;
    editMessageReplyMarkup(options?: {
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message | true>;
    editMessageText(options: {
        /** New text of the message */
        text: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: string;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message | true>;
    getGameHighScores(options: {
        /** Target user id */
        user_id: number;
    }, timeout?: number): Promise<GameHighScore[]>;
    setGameScore(options: {
        /** User identifier */
        user_id: number;
        /** New score, must be non-negative */
        score: number;
        /** Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: boolean;
        /** Pass True, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: boolean;
    }, timeout?: number): Promise<Message | true>;
    stopMessageLiveLocation(options?: {
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message | true>;
}
/**
 * This object represents an incoming callback query from a callback button in an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api#inline-mode)), the field *inline_message_id* will be present. Exactly one of the fields data or *game_short_name* will be present.
 *
 * >**NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
 */
export interface ICallbackQuery {
    /** Unique identifier for this query */
    id: string;
    /** Sender */
    from: IUser;
    /** Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
    message?: IMessage;
    /** Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id?: string;
    /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.telegram.org/bots/api#games). */
    chat_instance: string;
    /** Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field. */
    data?: string;
    /** Short name of a [Game](https://core.telegram.org/bots/api#games) to be returned, serves as the unique identifier for the game */
    game_short_name?: string;
}
