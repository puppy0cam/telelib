import String from "./String";
import InputFile_or_String from "./InputFile or String";
import Integer from "./Integer";
import Boolean from "./Boolean";

/** Represents a video to be sent. */
export default class InputMediaVideo implements IInputMediaVideo {
    constructor(data: IInputMediaVideo | InputMediaVideo, token?: string);
    public type: String;
    public media: String;
    public thumb?: InputFile_or_String;
    public caption?: String;
    public parse_mode?: String;
    public width?: Integer;
    public height?: Integer;
    public duration?: Integer;
    public supports_streaming?: Boolean;
}

export interface IInputMediaVideo {
    /** Type of the result, must be video */
    type: String;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
    media: String;
    /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
    thumb?: InputFile_or_String;
    /** Caption of the video to be sent, 0-1024 characters */
    caption?: String;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: String;
    /** Video width */
    width?: Integer;
    /** Video height */
    height?: Integer;
    /** Video duration */
    duration?: Integer;
    /** Pass *True*, if the uploaded video is suitable for streaming */
    supports_streaming?: Boolean;
}
