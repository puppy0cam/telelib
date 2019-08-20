import Bot from "./Bot.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class Voice extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            duration,
            mime_type,
            file_size,
        } = _value;
        this.file_id = String(file_id);
        this.duration = Integer(duration);
        if (mime_type != null) {
            this.mime_type = String(mime_type);
        }
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
    }
    sendVoice(options) {
        "use strict";
        return super.sendVoice(Object.assign({
            voice: this.file_id,
        }, options));
    }
    getFile(options) {
        "use strict";
        return super.getFile(Object.assign({
            file_id: this.file_id,
        }, options));
    }
}
