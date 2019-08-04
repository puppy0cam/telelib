import String from "./String.js";
import Integer from "./Integer.js";
import PhotoSize from "./PhotoSize.js";
import Bot from "./Bot.js";

export default class Audio extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            duration,
            performer,
            title,
            mime_type,
            file_size,
            thumb,
        } = _value;
        this.file_id = String(file_id);
        this.duration = Integer(duration);
        if (performer != null) {
            this.performer = String(performer);
        }
        if (title != null) {
            this.title = String(title);
        }
        if (mime_type != null) {
            this.mime_type = String(mime_type);
        }
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
        if (thumb != null) {
            this.thumb = new PhotoSize(thumb, _token);
        }
    }
    sendAudio(options) {
        "use strict";
        return super.sendAudio(Object.assign({
            file_id: this.file_id,
        }, options));
    }
    getFile() {
        "use strict";
        return super.getFile({
            file_id: this.file_id,
        });
    }
}
