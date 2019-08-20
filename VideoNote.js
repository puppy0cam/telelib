import Bot from "./Bot.js";
import Integer from "./Integer.js";
import PhotoSize from "./PhotoSize.js";
import String from "./String.js";

export default class VideoNote extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            length,
            duration,
            thumb,
            file_size,
        } = _value;
        this.file_id = String(file_id);
        this.length = Integer(length);
        this.duration = Integer(duration);
        if (thumb != null) {
            this.thumb = new PhotoSize(thumb, _token);
        }
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
    }
    sendVideoNote(options) {
        "use strict";
        return super.sendVideoNote(Object.assign({
            video_note: this.file_id,
        }, options));
    }
    getFile(options) {
        "use strict";
        return super.getFile(Object.assign({
            file_id: this.file_id,
        }, options));
    }
}
