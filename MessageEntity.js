"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
class MessageEntity extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.user) {
            this.user = new _internals_js_1.User(this.user, this);
        }
    }
}
exports.MessageEntity = MessageEntity;
