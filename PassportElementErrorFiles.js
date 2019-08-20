import Array_of_String from "./Array of String.js";
import Bot from "./Bot.js";
import String from "./String.js";

export default class PassportElementErrorFiles extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            source,
            type,
            file_hashes,
            message,
        } = _value;
        this.source = String(source);
        this.type = String(type);
        this.file_hashes = Array_of_String(file_hashes, _token);
        this.message = String(message);
    }
}
