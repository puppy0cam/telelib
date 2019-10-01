"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** Describes actions that a non-administrator user is allowed to take in a chat. */
class ChatPermissions extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
    }
    setChatPermissions(options, timeout) {
        "use strict";
        return super.setChatPermissions({
            permissions: this,
            ...options,
        }, timeout);
    }
    restrictChatMember(options, timeout) {
        "use strict";
        return super.restrictChatMember({
            permissions: this,
            ...options,
        }, timeout);
    }
}
exports.ChatPermissions = ChatPermissions;
