import String from "./String";

/** Represents a photo to be sent. */
export default class InputMediaPhoto implements IInputMediaPhoto {
    constructor(data: IInputMediaPhoto | InputMediaPhoto, token?: string);
    public type: String;
    public media: String;
    public caption?: String;
    public parse_mode?: String;
}

export interface IInputMediaPhoto {
    /** Type of the result, must be *photo* */
    type: String;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
    media: String;
    /** Caption of the photo to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
}
