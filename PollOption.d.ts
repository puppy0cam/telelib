import String from "./String";
import Integer from "./Integer";

/** This object contains information about one answer option in a poll. */
export default class PollOption implements IPollOption {
    constructor(data: IPollOption | PollOption, token?: string);
    public text: String;
    public voter_count: Integer;
}

export interface IPollOption {
    /** Option text, 1-100 characters */
    text: String;
    /** Number of users that voted for this option */
    voter_count: Integer;
}
