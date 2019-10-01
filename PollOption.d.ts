import { Bot } from "./_internals.js";
/** This object contains information about one answer option in a poll. */
export declare class PollOption extends Bot implements IPollOption {
    constructor(data: IPollOption, token?: string | Bot);
    text: string;
    voter_count: number;
}
/** This object contains information about one answer option in a poll. */
export interface IPollOption {
    /** Option text, 1-100 characters */
    text: string;
    /** Number of users that voted for this option */
    voter_count: number;
}
