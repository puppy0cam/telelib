"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a voice note. */
class Voice extends _internals_js_1.File {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    sendVoice(options, timeout) {
        "use strict";
        return super.sendVoice({
            voice: this.file_id,
            ...options,
        }, timeout);
    }
}
exports.Voice = Voice;
