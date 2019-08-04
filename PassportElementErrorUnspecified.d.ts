import String from "./String";

/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export default class PassportElementErrorUnspecified implements IPassportElementErrorUnspecified {
    constructor(data: IPassportElementErrorUnspecified | PassportElementErrorUnspecified, token?: string);
    public source: String;
    public type: String;
    public element_hash: String;
    public message: String;
}

export interface IPassportElementErrorUnspecified {
    /** Error source, must be *unspecified* */
    source: String;
    /** Type of element of the user's Telegram Passport which has the issue */
    type: String;
    /** Base64-encoded element hash */
    element_hash: String;
    /** Error message */
    message: String;
}
