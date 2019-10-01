"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
class InlineQuery extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new _internals_js_1.User(this.from, this);
        }
        if (this.location) {
            this.location = new _internals_js_1.Location(this.location, this);
        }
    }
}
exports.InlineQuery = InlineQuery;
