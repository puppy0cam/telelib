import String from "./String";
import Boolean from "./Boolean";

/** Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a text message to be sent as the result of an inline query. */
export default class InputTextMessageContent implements IInputTextMessageContent {
    constructor(data: IInputTextMessageContent | InputTextMessageContent, token?: string);
    public message_text: String;
    public parse_mode?: String;
    public disable_web_page_preview?: Boolean;
}

export interface IInputTextMessageContent {
    /** Text of the message to be sent, 1-4096 characters */
    message_text: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
    parse_mode?: String;
    /** Disables link previews for links in the sent message */
    disable_web_page_preview?: Boolean;
}
