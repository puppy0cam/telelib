import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";

/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export class PassportElementErrorUnspecified extends PassportElementError implements IPassportElementErrorUnspecified {
    public constructor(data: IPassportElementErrorUnspecified, token?: string | Bot) {
        "use strict";
        super(data, token);
    }
    public source!: "unspecified";
    public type!: string;
    public element_hash!: string;
    public message!: string;
}

/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export interface IPassportElementErrorUnspecified extends IPassportElementError {
    /** Error source, must be *unspecified* */
    source: "unspecified";
    /** Type of element of the user's Telegram Passport which has the issue */
    type: string;
    /** Base64-encoded element hash */
    element_hash: string;
    /** Error message */
    message: string;
}
