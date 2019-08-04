import InputMediaAnimation from "./InputMediaAnimation.js";
import InputMediaDocument from "./InputMediaDocument.js";
import InputMediaAudio from "./InputMediaAudio.js";
import InputMediaPhoto from "./InputMediaPhoto.js";
import InputMediaVideo from "./InputMediaVideo.js";

export default function InputMedia(value) {
    "use strict";
    switch (value.type) {
        case "animation":
            return new InputMediaAnimation(value);
        case "document":
            return new InputMediaDocument(value);
        case "audio":
            return new InputMediaAudio(value);
        case "photo":
            return new InputMediaPhoto(value);
        case "video":
            return new InputMediaVideo(value);
        default:
            throw new TypeError("Unrecognised InputMedia type");
    }
}
