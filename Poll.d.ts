import { Bot, PollOption, IPollOption } from "./_internals.js";
/** This object contains information about a poll. */
export declare class Poll extends Bot implements IPoll {
    constructor(data: IPoll, token?: string | Bot);
    id: string;
    question: string;
    options: PollOption[];
    is_closed: boolean;
    getTotalVoteCount(): number;
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
