import { Bot, IPassportElementError, PassportElementError } from "./_internals.js";
/** Represents an issue in an unspecified place. The error is considered resolved when new data is added. */
export declare class PassportElementErrorUnspecified extends PassportElementError implements IPassportElementErrorUnspecified {
    constructor(data: IPassportElementErrorUnspecified, token?: string | Bot);
    source: "unspecified";
    type: string;
    element_hash: string;
    message: string;
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
