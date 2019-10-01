import { Bot, IInputMedia, InputMedia, InputFile } from "./_internals.js";
/** Represents a photo to be sent. */
export declare class InputMediaPhoto extends InputMedia implements IInputMediaPhoto {
    constructor(data: IInputMediaPhoto, token?: string | Bot);
    type: "photo";
    media: string | InputFile;
    caption?: string;
    parse_mode?: string;
}
/** Represents a photo to be sent. */
export interface IInputMediaPhoto extends IInputMedia {
    /** Type of the result, must be *photo* */
    type: "photo";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
    media: string | InputFile;
    /** Caption of the photo to be sent, 0-1024 characters */
    caption?: string;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: string;
}
