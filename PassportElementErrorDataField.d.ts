import String from "./String";

/** Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes. */
export default class PassportElementErrorDataField implements IPassportElementErrorDataField {
    constructor(data: IPassportElementErrorDataField | PassportElementErrorDataField, token?: string);
    public source: String;
    public type: String;
    public field_name: String;
    public data_hash: String;
    public message: String;
}

export interface IPassportElementErrorDataField {
    /** Error source, must be *data* */
    source: String;
    /** The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” */
    type: String;
    /** Name of the data field which has the error */
    field_name: String;
    /** Base64-encoded data hash */
    data_hash: String;
    /** Error message */
    message: String;
}
