import Bot from "./Bot.js";
import Integer from "./Integer.js";
import PhotoSize from "./PhotoSize.js";
import String from "./String.js";

export default class Animation extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            width,
            height,
            duration,
            thumb,
            file_name,
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
        if (file_name != null) {
            this.file_name = String(file_name);
        }
        if (mime_type != null) {
            this.mime_type = String(mime_type);
        }
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
    }
    getFile() {
        "use strict";
        return super.getFile({
            file_id: this.file_id,
        });
    }
    sendAnimation(options) {
        "use strict";
        return super.sendAnimation(Object.assign({
            animation: this.file_id,
        }, options));
    }
}
