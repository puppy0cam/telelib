import { File } from "./_internals.js";
/** This object represents a voice note. */
export class Voice extends File {
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
