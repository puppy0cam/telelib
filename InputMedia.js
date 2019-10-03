import { Bot, InputMediaAnimation, InputMediaAudio, InputMediaDocument, InputMediaPhoto, InputMediaVideo } from "./_internals.js";
/**
 * This object represents the content of a media message to be sent. It should be one of
 * * [InputMediaAnimation](https://core.telegram.org/bots/api#inputmediaanimation)
 * * [InputMediaDocument](https://core.telegram.org/bots/api#inputmediadocument)
 * * [InputMediaAudio](https://core.telegram.org/bots/api#inputmediaaudio)
 * * [InputMediaPhoto](https://core.telegram.org/bots/api#inputmediaphoto)
 * * [InputMediaVideo](https://core.telegram.org/bots/api#inputmediavideo)
 */
export class InputMedia extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (new.target === InputMedia) {
            switch (data.type) {
                case "photo":
                    return new InputMediaPhoto(data, token);
                case "video":
                    return new InputMediaVideo(data, token);
                case "animation":
                    return new InputMediaAnimation(data, token);
                case "audio":
                    return new InputMediaAudio(data, token);
                case "document":
                    return new InputMediaDocument(data, token);
            }
        }
    }
}
