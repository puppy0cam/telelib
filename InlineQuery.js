import { Bot, User, Location } from "./_internals.js";
/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
export class InlineQuery extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new User(this.from, this);
        }
        if (this.location) {
            this.location = new Location(this.location, this);
        }
    }
}
