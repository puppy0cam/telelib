import { Bot, IInputMedia, InputMedia, InputFile } from "./_internals.js";
/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent. */
export declare class InputMediaAnimation extends InputMedia implements IInputMediaAnimation {
    constructor(data: IInputMediaAnimation, token?: string | Bot);
    type: "animation";
    media: InputFile | string;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    width?: number;
    height?: number;
    duration?: number;
}
/** Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent. */
export interface IInputMediaAnimation extends IInputMedia {
    /** Type of the result, must be *animation* */
    type: "animation";
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
    media: InputFile | string;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
    thumb?: InputFile | string;
    /** Caption of the animation to be sent, 0-1024 characters */
    caption?: string;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: string;
    /** Animation width */
    width?: number;
    /** Animation height */
    height?: number;
    /** Animation duration */
    duration?: number;
}
