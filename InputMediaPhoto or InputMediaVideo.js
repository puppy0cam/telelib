import InputMediaPhoto from "./InputMediaPhoto.js";
import InputMediaVideo from "./InputMediaVideo.js";

export default function InputMediaPhotoOrInputMediaVideo(value) {
    "use strict";
    switch (value.type) {
        case "photo":
            return new InputMediaPhoto(value);
        case "video":
            return new InputMediaVideo(value);
        default:
            throw new TypeError("Invalid InputMedia type");
    }
}
