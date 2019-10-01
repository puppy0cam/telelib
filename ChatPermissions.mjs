import { Bot } from "./_internals.mjs";
/** Describes actions that a non-administrator user is allowed to take in a chat. */
export class ChatPermissions extends Bot {
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
