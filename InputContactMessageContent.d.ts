import String from "./String";

/** Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a contact message to be sent as the result of an inline query. */
export default class InputContactMessageContent implements IInputContactMessageContent {
    constructor(data: IInputContactMessageContent | InputContactMessageContent, token?: string);
    public phone_number: String;
    public first_name: String;
    public last_name?: String;
    public vcard?: String;
}

export interface IInputContactMessageContent {
    /** Contact's phone number */
    phone_number: String;
    /** Contact's first name */
    first_name: String;
    /** Contact's last name */
    last_name?: String;
    /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes */
    vcard?: String;
}
