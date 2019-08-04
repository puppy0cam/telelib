import String from "./String";
import LoginUrl from "./LoginUrl";
import CallbackGame from "./CallbackGame";
import Boolean from "./Boolean";

/** This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields. */
export default class InlineKeyboardButton implements IInlineKeyboardButton {
    constructor(data: IInlineKeyboardButton | InlineKeyboardButton, token?: string);
    public text: String;
    public url?: String;
    public login_url?: LoginUrl;
    public callback_data?: String;
    public switch_inline_query?: String;
    public switch_inline_query_current_chat?: String;
    public callback_game?: CallbackGame;
    public pay?: Boolean;
}

export interface IInlineKeyboardButton {
    /** Label text on the button */
    text: String;
    /** HTTP or tg:// url to be opened when button is pressed */
    url?: String;
    /** An HTTP URL used to automatically authorize the user. Can be used as a replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login). */
    login_url?: LoginUrl;
    /** Data to be sent in a [callback query](https://core.telegram.org/bots/api#callbackquery) to the bot when button is pressed, 1-64 bytes */
    callback_data?: String;
    /**
     * If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.
     *
     * **Note:** This offers an easy way for users to start using your bot in [inline mode](https://core.telegram.org/bots/inline) when they are currently in a private chat with it. Especially useful when combined with [switch_pm…](https://core.telegram.org/bots/api#answerinlinequery) actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
     */
    switch_inline_query?: String;
    /**
     * If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot’s username will be inserted.
     *
     * This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
     */
    switch_inline_query_current_chat?: String;
    /**
     * Description of the game that will be launched when the user presses the button.
     *
     * **NOTE:** This type of button **must** always be the first button in the first row.
     */
    callback_game?: CallbackGame;
    /**
     * Specify True, to send a Pay button.
     *
     * **NOTE:** This type of button **must** always be the first button in the first row.
     */
    pay?: Boolean;
}
