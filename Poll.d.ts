import String from "./String";
import Array_of_PollOption from "./Array of PollOption";
import Boolean from "./Boolean";

/** This object contains information about a poll. */
export default class Poll implements IPoll {
    constructor(data: IPoll | Poll, token?: string);
    public id: String;
    public question: String;
    public options: Array_of_PollOption;
    public is_closed: Boolean;
}

export interface IPoll {
    /** Unique poll identifier */
    id: String;
    /** Poll question, 1-255 characters */
    question: String;
    /** List of poll options */
    options: Array_of_PollOption;
    /** True, if the poll is closed */
    is_closed: Boolean;
}
