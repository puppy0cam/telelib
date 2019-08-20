import Array_of_PassportFile from "./Array of PassportFile.js";
import Bot from "./Bot.js";
import PassportFile from "./PassportFile.js";
import String from "./String.js";

export default class EncryptedPassportElement extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            type,
            data,
            phone_number,
            email,
            files,
            front_side,
            reverse_side,
            selfie,
            translation,
            hash,
        } = _value;
        this.type = String(type);
        if (data != null) {
            this.data = String(data);
        }
        if (phone_number != null) {
            this.phone_number = String(phone_number);
        }
        if (email != null) {
            this.email = String(email);
        }
        if (files != null) {
            this.files = Array_of_PassportFile(files, _token);
        }
        if (front_side != null) {
            this.front_side = new PassportFile(front_side, _token);
        }
        if (reverse_side != null) {
            this.reverse_side = new PassportFile(reverse_side, _token);
        }
        if (selfie != null) {
            this.selfie = new PassportFile(selfie, _token);
        }
        if (translation != null) {
            this.translation = Array_of_PassportFile(translation, _token);
        }
        this.hash = String(hash);
    }
}
