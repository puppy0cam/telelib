"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents one row of the high scores table for a game. */
class GameHighScore extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        this.user = new _internals_js_1.User(data.user, this);
    }
}
exports.GameHighScore = GameHighScore;
