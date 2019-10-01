import { Bot, Array_of_PollOption } from "./_internals.mjs";
/** This object contains information about a poll. */
export class Poll extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.options) {
            this.options = Array_of_PollOption(this.options, this);
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
