import String from "./String";
import Boolean from "./Boolean";

export default class KeyboardButtonObject implements IKeyboardButtonObject {
    constructor(data: IKeyboardButtonObject | KeyboardButtonObject, token?: string);
    public text: String;
    public request_contact?: Boolean;
    public request_location?: Boolean;
}

export interface IKeyboardButtonObject {
    /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
    text: String;
    /** If *True*, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only */
    request_contact?: Boolean;
    /** If *True*, the user's current location will be sent when the button is pressed. Available in private chats only */
    request_location?: Boolean;
}
