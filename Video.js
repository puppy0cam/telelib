import Bot from "./Bot.js";
import Integer from "./Integer.js";
import PhotoSize from "./PhotoSize.js";
import String from "./String.js";

export default class Video extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            width,
            height,
            duration,
            thumb,
            mime_type,
            file_size,
        } = _value;
        this.file_id = String(file_id);
        this.width = Integer(width);
        this.height = Integer(height);
        this.duration = Integer(duration);
        if (thumb != null) {
            this.thumb = new PhotoSize(thumb, _token);
        }
        if (mime_type != null) {
            this.mime_type = String(mime_type);
        }
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
    }
    sendVideo(options) {
        "use strict";
        return super.sendVideo(Object.assign({
            video: this.file_id,
        }, options));
    }
    getFile(options) {
        "use strict";
        return super.getFile(Object.assign({
            file_id: this.file_id,
        }, options));
    }
}
