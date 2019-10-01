import { Bot, PollOption, IPollOption, Array_of_PollOption } from "./_internals.js";

/** This object contains information about a poll. */
export class Poll extends Bot implements IPoll {
    constructor(data: IPoll, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.options) {
            this.options = Array_of_PollOption(this.options, this);
        }
    }
    public id!: string;
    public question!: string;
    public options!: PollOption[];
    public is_closed!: boolean;
    public getTotalVoteCount() {
        "use strict";
        let total = 0;
        const options = this.options;
        for (let i = 0; i < options.length; i++) {
            total += options[i].voter_count;
        }
        return total;
    }
}

/** This object contains information about a poll. */
export interface IPoll {
    /** Unique poll identifier */
    id: string;
    /** Poll question, 1-255 characters */
    question: string;
    /** List of poll options */
    options: IPollOption[];
    /** True, if the poll is closed */
    is_closed: boolean;
}
