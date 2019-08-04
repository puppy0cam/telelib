import String from "./String.js";
import Bot from "./Bot.js";

export default class EncryptedCredentials extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            data,
            hash,
            secret,
        } = _value;
        this.data = String(data);
        this.hash = String(hash);
        this.secret = String(secret);
    }
}
