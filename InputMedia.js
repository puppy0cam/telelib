"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/**
 * This object represents the content of a media message to be sent. It should be one of
 * * [InputMediaAnimation](https://core.telegram.org/bots/api#inputmediaanimation)
 * * [InputMediaDocument](https://core.telegram.org/bots/api#inputmediadocument)
 * * [InputMediaAudio](https://core.telegram.org/bots/api#inputmediaaudio)
 * * [InputMediaPhoto](https://core.telegram.org/bots/api#inputmediaphoto)
 * * [InputMediaVideo](https://core.telegram.org/bots/api#inputmediavideo)
 */
class InputMedia extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (new.target === InputMedia) {
            switch (data.type) {
                case "photo":
                    return new _internals_js_1.InputMediaPhoto(data, token);
                case "video":
                    return new _internals_js_1.InputMediaVideo(data, token);
                case "animation":
                    return new _internals_js_1.InputMediaAnimation(data, token);
                case "audio":
                    return new _internals_js_1.InputMediaAudio(data, token);
                case "document":
                    return new _internals_js_1.InputMediaDocument(data, token);
            }
        }
    }
}
exports.InputMedia = InputMedia;
