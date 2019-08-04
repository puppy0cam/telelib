import String from "./String.js";
import Integer from "./Integer.js";
import Bot from "./Bot.js";

export default class PhotoSize extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            width,
            height,
            file_size,
        } = _value;
        this.file_id = String(file_id);
        this.width = Integer(width);
        this.height = Integer(height);
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
    }
    sendPhoto(options) {
        "use strict";
        return super.sendPhoto(Object.assign({
            photo: this.file_id,
        }, options));
    }
    getFile(options) {
        "use strict";
        return super.getFile(Object.assign({
            file_id: this.file_id,
        }, options));
    }
}
