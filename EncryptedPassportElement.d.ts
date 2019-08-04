import String from "./String";
import Array_of_PassportFile from "./Array of PassportFile";
import PassportFile from "./PassportFile";

/** Contains information about documents or other Telegram Passport elements shared with the bot by the user. */
export default class EncryptedPassportElement implements IEncryptedPassportElement {
    constructor(data: IEncryptedPassportElement | EncryptedPassportElement, token?: string);
    public type: String;
    public data?: String;
    public phone_number?: String;
    public email?: String;
    public files?: Array_of_PassportFile;
    public front_side?: PassportFile;
    public reverse_side?: PassportFile;
    public selfie?: PassportFile;
    public translation?: Array_of_PassportFile;
    public hash: String;
}

export interface IEncryptedPassportElement {
    /** Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”. */
    type: String;
    /** Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    data?: String;
    /** User's verified phone number, available only for “phone_number” type */
    phone_number?: String;
    /** User's verified email address, available only for “email” type */
    email?: String;
    /** Array of encrypted files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    files?: Array_of_PassportFile;
    /** Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    front_side?: PassportFile;
    /** Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    reverse_side?: PassportFile;
    /** Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    selfie?: PassportFile;
    /** Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api#encryptedcredentials). */
    translation?: Array_of_PassportFile;
    /** Base64-encoded element hash for using in [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified) */
    hash: String;
}
