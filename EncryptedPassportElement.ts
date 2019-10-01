import { Bot, PassportFile, IPassportFile, Array_of_PassportFile } from "./_internals.js";

/** Contains information about documents or other Telegram Passport elements shared with the bot by the user. */
export class EncryptedPassportElement extends Bot implements IEncryptedPassportElement {
    constructor(data: IEncryptedPassportElement, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.files) {
            this.files = Array_of_PassportFile(this.files, this);
        }
        if (this.front_side) {
            this.front_side = new PassportFile(this.front_side, this);
        }
        if (this.reverse_side) {
            this.reverse_side = new PassportFile(this.reverse_side, this);
        }
        if (this.selfie) {
            this.selfie = new PassportFile(this.selfie, this);
        }
        if (this.translation) {
            this.translation = Array_of_PassportFile(this.translation, this);
        }
    }
    public type!: string;
    public data?: string;
    public phone_number?: string;
    public email?: string;
    public files?: PassportFile[];
    public front_side?: PassportFile;
    public reverse_side?: PassportFile;
    public selfie?: PassportFile;
    public translation?: PassportFile[];
    public hash!: string;
}

/** Contains information about documents or other Telegram Passport elements shared with the bot by the user. */
export interface IEncryptedPassportElement {
    /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
    type: string;
    /** Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    data?: string;
    /** User's verified phone number, available only for “phone_number” type */
    phone_number?: string;
    /** User's verified email address, available only for “email” type */
    email?: string;
    /** Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    files?: IPassportFile[];
    /** Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    front_side?: IPassportFile;
    /** Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    reverse_side?: IPassportFile;
    /** Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    selfie?: IPassportFile;
    /** Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    translation?: IPassportFile[];
    /** Base64-encoded element hash for using in [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified) */
    hash: string;
}
