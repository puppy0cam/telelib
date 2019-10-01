import { Bot, CallbackGame, ICallbackGame, ILoginUrl, LoginUrl } from "./_internals.js";

/** This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields. */
export class InlineKeyboardButton extends Bot implements IInlineKeyboardButton {
    constructor(data: IInlineKeyboardButton, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.login_url) {
            this.login_url = new LoginUrl(this.login_url, this);
        }
        if (this.callback_game) {
            this.callback_game = new CallbackGame(this.callback_game, this);
        }
    }
    public text!: string;
    public url?: string;
    public login_url?: LoginUrl;
    public callback_data?: string;
    public switch_inline_query?: string;
    public switch_inline_query_current_chat?: string;
    public callback_game?: CallbackGame;
    public pay?: boolean;
}

/** This object represents one button of an inline keyboard. You **must** use exactly one of the optional fields. */
export interface IInlineKeyboardButton {
    /** Label text on the button */
    text: string;
    /** HTTP or tg:// url to be opened when button is pressed */
    url?: string;
    /** An HTTP URL used to automatically authorize the user. Can be used as a replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login). */
    login_url?: ILoginUrl;
    /** Data to be sent in a [callback query](https://core.telegram.org/bots/api#callbackquery) to the bot when button is pressed, 1-64 bytes */
    callback_data?: string;
    /**
     * If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.
     *
     * **Note:** This offers an easy way for users to start using your bot in [inline mode](https://core.telegram.org/bots/inline) when they are currently in a private chat with it. Especially useful when combined with [switch_pm…](https://core.telegram.org/bots/api#answerinlinequery) actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
     */
    switch_inline_query?: string;
    /**
     * If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot’s username will be inserted.
     *
     * This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
     */
    switch_inline_query_current_chat?: string;
    /**
     * Description of the game that will be launched when the user presses the button.
     *
     * **NOTE:** This type of button **must** always be the first button in the first row.
     */
    callback_game?: ICallbackGame;
    /**
     * Specify True, to send a Pay button.
     *
     * **NOTE:** This type of button **must** always be the first button in the first row.
     */
    pay?: boolean;
}
