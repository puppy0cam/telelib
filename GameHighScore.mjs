import { Bot, User } from "./_internals.mjs";
/** This object represents one row of the high scores table for a game. */
export class GameHighScore extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        this.user = new User(data.user, this);
    }
}
