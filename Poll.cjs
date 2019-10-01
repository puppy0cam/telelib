"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object contains information about a poll. */
class Poll extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.options) {
            this.options = _internals_js_1.Array_of_PollOption(this.options, this);
        }
    }
    getTotalVoteCount() {
        "use strict";
        let total = 0;
        const options = this.options;
        for (let i = 0; i < options.length; i++) {
            total += options[i].voter_count;
        }
        return total;
    }
}
exports.Poll = Poll;
