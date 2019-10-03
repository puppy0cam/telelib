import { Bot, User } from "./_internals.js";
/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export class MessageEntity extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.user) {
            this.user = new User(this.user, this);
        }
    }
}
