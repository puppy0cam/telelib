import Array_of_GameHighScore from "./Array of GameHighScore";
import Boolean from "./Boolean";
import FloatNumber from "./Float number";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InputMedia from "./InputMedia";
import Integer from "./Integer";
import Message from "./Message";
import Message_or_True from "./Message or True";
import String from "./String";
import True from "./True";
import User from "./User";

/**
 * This object represents an incoming callback query from a callback button in an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api#inline-mode)), the field *inline_message_id* will be present. Exactly one of the fields data or *game_short_name* will be present.
 *
 * >**NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
 */
export default class CallbackQuery implements ICallbackQuery {
    constructor(data: ICallbackQuery | CallbackQuery, token?: string);
    public id: String;
    public from: User;
    public message?: Message;
    public inline_message_id?: String;
    public chat_instance: String;
    public data?: String;
    public game_short_name?: String;
    /**
     * Use this method to send answers to callback queries sent from [inline keyboards](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.
     * >Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
     */
    public answerCallbackQuery(options?: {
        /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
        text?: String;
        /** If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*. */
        show_alert?: Boolean;
        /**
         * URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game – note that this will only work if the query comes from a [*callback_game*](https://core.telegram.org/bots/api#inlinekeyboardbutton) button.
         *
         * Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
         */
        url?: String;
        /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
        cache_time?: Integer;
    }): Promise<True>;
    /** Use this method to edit captions of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageCaption(options?: {
        /** New caption of the message */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit live location messages. A location can be edited until its *live_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation). On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. */
    public editMessageLiveLocation(options: {
        /** Latitude of new location */
        latitude: FloatNumber;
        /** Longitude of new location */
        longitude: FloatNumber;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit animation, audio, document, photo, or video messages. If a message is a part of a message album, then it can be edited only to a photo or a video. Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded. Use previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageMedia(options: {
        /** A JSON-serialized object for a new media content of the message */
        media: InputMedia;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit only the reply markup of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageReplyMarkup(options?: {
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit text and [game](https://core.telegram.org/bots/api#games) messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageText(options: {
        /** New text of the message */
        text: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: String;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: Boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api#gamehighscore) objects.
     * >This method will currently return scores for the target user, plus two of his closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
     */
    public getGameHighScores(options: {
        /** Target user id */
        user_id: Integer;
    }): Promise<Array_of_GameHighScore>;
    /** Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*. */
    public setGameScore(options: {
        /** User identifier */
        user_id: Integer;
        /** New score, must be non-negative */
        score: Integer;
        /** Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: Boolean;
        /** Pass True, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: Boolean;
    }): Promise<Message_or_True>;
    /** Use this method to stop updating a live location message before *live_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public stopMessageLiveLocation(options?: {
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
}

export interface ICallbackQuery {
    /** Unique identifier for this query */
    id: String;
    /** Sender */
    from: User;
    /** Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
    message?: Message;
    /** Identifier of the message sent via the bot in inline mode, that originated the query. */
    inline_message_id?: String;
    /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.telegram.org/bots/api#games). */
    chat_instance: String;
    /** Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field. */
    data?: String;
    /** Short name of a [Game](https://core.telegram.org/bots/api#games) to be returned, serves as the unique identifier for the game */
    game_short_name?: String;
}
