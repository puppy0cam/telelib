import { Bot, IPassportElementErrorDataField, IPassportElementErrorFile, IPassportElementErrorFiles, IPassportElementErrorFrontSide, IPassportElementErrorReverseSide, IPassportElementErrorSelfie, IPassportElementErrorTranslationFile, IPassportElementErrorTranslationFiles, IPassportElementErrorUnspecified, PassportElementErrorDataField, PassportElementErrorFile, PassportElementErrorFiles, PassportElementErrorFrontSide, PassportElementErrorReverseSide, PassportElementErrorSelfie, PassportElementErrorTranslationFile, PassportElementErrorTranslationFiles, PassportElementErrorUnspecified } from "./_internals.js";
/**
 * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 * * [PassportElementErrorDataField](https://core.telegram.org/bots/api#passportelementerrordatafield)
 * * [PassportElementErrorFrontSide](https://core.telegram.org/bots/api#passportelementerrorfrontside)
 * * [PassportElementErrorReverseSide](https://core.telegram.org/bots/api#passportelementerrorreverseside)
 * * [PassportElementErrorSelfie](https://core.telegram.org/bots/api#passportelementerrorselfie)
 * * [PassportElementErrorFile](https://core.telegram.org/bots/api#passportelementerrorfile)
 * * [PassportElementErrorFiles](https://core.telegram.org/bots/api#passportelementerrorfiles)
 * * [PassportElementErrorTranslationFile](https://core.telegram.org/bots/api#passportelementerrortranslationfile)
 * * [PassportElementErrorTranslationFiles](https://core.telegram.org/bots/api#passportelementerrortranslationfiles)
 * * [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified)
 */
export class PassportElementError extends Bot implements IPassportElementError {
    public constructor(data: IPassportElementErrorTuple, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (new.target === PassportElementError) {
            switch (data.source) {
                case "data":
                    return new PassportElementErrorDataField(data as IPassportElementErrorDataField, token);
                case "front_side":
                    return new PassportElementErrorFrontSide(data as IPassportElementErrorFrontSide, token);
                case "reverse_side":
                    return new PassportElementErrorReverseSide(data as IPassportElementErrorReverseSide, token);
                case "selfie":
                    return new PassportElementErrorSelfie(data as IPassportElementErrorSelfie, token);
                case "file":
                    return new PassportElementErrorFile(data as IPassportElementErrorFile, token);
                case "files":
                    return new PassportElementErrorFiles(data as IPassportElementErrorFiles, token);
                case "translation_file":
                    return new PassportElementErrorTranslationFile(data as IPassportElementErrorTranslationFile, token);
                case "translation_files":
                    return new PassportElementErrorTranslationFiles(data as IPassportElementErrorTranslationFiles, token);
                case "unspecified":
                    return new PassportElementErrorUnspecified(data as IPassportElementErrorUnspecified, token);
            }
        }
    }
    public source!: string;
    public type!: string;
    public message!: string;
}

/**
 * This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:
 * * [PassportElementErrorDataField](https://core.telegram.org/bots/api#passportelementerrordatafield)
 * * [PassportElementErrorFrontSide](https://core.telegram.org/bots/api#passportelementerrorfrontside)
 * * [PassportElementErrorReverseSide](https://core.telegram.org/bots/api#passportelementerrorreverseside)
 * * [PassportElementErrorSelfie](https://core.telegram.org/bots/api#passportelementerrorselfie)
 * * [PassportElementErrorFile](https://core.telegram.org/bots/api#passportelementerrorfile)
 * * [PassportElementErrorFiles](https://core.telegram.org/bots/api#passportelementerrorfiles)
 * * [PassportElementErrorTranslationFile](https://core.telegram.org/bots/api#passportelementerrortranslationfile)
 * * [PassportElementErrorTranslationFiles](https://core.telegram.org/bots/api#passportelementerrortranslationfiles)
 * * [PassportElementErrorUnspecified](https://core.telegram.org/bots/api#passportelementerrorunspecified)
 */
export interface IPassportElementError {
    /** Error source */
    source: string;
    /** The section of the user's Telegram Passport which has the error */
    type: string;
    /** Error message */
    message: string;
}
export type PassportElementErrorTuple = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified;
export type IPassportElementErrorTuple = IPassportElementErrorDataField | IPassportElementErrorFrontSide | IPassportElementErrorReverseSide | IPassportElementErrorSelfie | IPassportElementErrorFile | IPassportElementErrorFiles | IPassportElementErrorTranslationFile | IPassportElementErrorTranslationFiles | IPassportElementErrorUnspecified;
