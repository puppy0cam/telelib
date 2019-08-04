import String from "./String.js";
import Bot from "./Bot.js";
import PhotoSize from "./PhotoSize.js";

export default class ChatPhoto extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            small_file_id,
            big_file_id,
        } = _value;
        this.small_file_id = String(small_file_id);
        this.big_file_id = String(big_file_id);
    }
    toPhotoSizes() {
        "use strict";
        return [
            new PhotoSize({
                file_id: this.small_file_id,
                height: 160,
                width: 160,
            }),
            new PhotoSize({
                file_id: this.big_file_id,
                height: 640,
                width: 640,
            }),
        ];
    }
}
