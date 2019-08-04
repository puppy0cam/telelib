import EncryptedPassportElement from "./EncryptedPassportElement.js";
import EncryptedCredentials from "./EncryptedCredentials.js";
import Bot from "./Bot.js";

export default class PassportData extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            data,
            credentials,
        } = _value;
        this.data = new EncryptedPassportElement(data, _token);
        this.credentials = new EncryptedCredentials(credentials, _token);
    }
}
