import InputMediaAnimation from "./InputMediaAnimation.js";
import InputMediaAudio from "./InputMediaAudio.js";
import InputMediaDocument from "./InputMediaDocument.js";
import InputMediaPhoto from "./InputMediaPhoto.js";
import InputMediaVideo from "./InputMediaVideo.js";

export default function InputMedia(value, _token) {
    "use strict";
    switch (value.type) {
        case "animation":
            return new InputMediaAnimation(value, _token);
        case "document":
            return new InputMediaDocument(value, _token);
        case "audio":
            return new InputMediaAudio(value, _token);
        case "photo":
            return new InputMediaPhoto(value, _token);
        case "video":
            return new InputMediaVideo(value, _token);
        default:
            throw new TypeError("Unrecognised InputMedia type");
    }
}
