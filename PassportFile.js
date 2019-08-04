import String from "./String.js";
import Integer from "./Integer.js";
import Date from "./Date.js";
import Bot from "./Bot.js";

export default class PassportFile extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            file_id,
            file_size,
            file_date,
        } = _value;
        this.file_id = String(file_id);
        if (file_size != null) {
            this.file_size = Integer(file_size);
        }
        if (file_date != null) {
            this.file_date = Date(file_date);
        }
    }
    getFile(options) {
        "use strict";
        return super.getFile(Object.assign({
            file_id: this.file_id,
        }, options));
    }
}
