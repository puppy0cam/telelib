import { Bot, IInputMediaAnimation, IInputMediaAudio, IInputMediaDocument, IInputMediaPhoto, IInputMediaVideo, InputFile, InputMediaAnimation, InputMediaAudio, InputMediaDocument, InputMediaPhoto, InputMediaVideo } from "./_internals.js";

/**
 * This object represents the content of a media message to be sent. It should be one of
 * * [InputMediaAnimation](https://core.telegram.org/bots/api#inputmediaanimation)
 * * [InputMediaDocument](https://core.telegram.org/bots/api#inputmediadocument)
 * * [InputMediaAudio](https://core.telegram.org/bots/api#inputmediaaudio)
 * * [InputMediaPhoto](https://core.telegram.org/bots/api#inputmediaphoto)
 * * [InputMediaVideo](https://core.telegram.org/bots/api#inputmediavideo)
 */
export class InputMedia extends Bot implements IInputMedia {
    public constructor(data: IInputMedia, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (new.target === InputMedia) {
            switch (data.type) {
                case "photo":
                    return new InputMediaPhoto(data as IInputMediaPhoto, token);
                case "video":
                    return new InputMediaVideo(data as IInputMediaVideo, token);
                case "animation":
                    return new InputMediaAnimation(data as IInputMediaAnimation, token);
                case "audio":
                    return new InputMediaAudio(data as IInputMediaAudio, token);
                case "document":
                    return new InputMediaDocument(data as IInputMediaDocument, token);
            }
        }
    }
    public type!: string;
    public media!: InputFile | string;
    public caption?: string;
    public parse_mode?: string;
}

/**
 * This object represents the content of a media message to be sent. It should be one of
 * * [InputMediaAnimation](https://core.telegram.org/bots/api#inputmediaanimation)
 * * [InputMediaDocument](https://core.telegram.org/bots/api#inputmediadocument)
 * * [InputMediaAudio](https://core.telegram.org/bots/api#inputmediaaudio)
 * * [InputMediaPhoto](https://core.telegram.org/bots/api#inputmediaphoto)
 * * [InputMediaVideo](https://core.telegram.org/bots/api#inputmediavideo)
 */
export interface IInputMedia {
    /** Type of the result */
    type: string;
    /** File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
    media: string | InputFile
    /** Caption of the media to be sent, 0-1024 characters */
    caption?: string;
    /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
    parse_mode?: string;
}
export type IInputMediaTuple = IInputMediaPhoto | IInputMediaVideo | IInputMediaAnimation | IInputMediaAudio | IInputMediaDocument;
export type InputMediaTuple = InputMediaPhoto | InputMediaVideo | InputMediaAnimation | InputMediaAudio | InputMediaDocument;
