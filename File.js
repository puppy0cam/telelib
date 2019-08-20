import Bot from "./Bot.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class File extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            file_size,
            file_path,
        } = _value;
        this.file_id = String(file_id);
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
        if (file_path != null) {
            this.file_path = String(file_path);
        }
    }
    getFile(options) {
        "use strict";
        return super.getFile(Object.assign({
            file_id: this.file_id,
        }, options));
    }
}
