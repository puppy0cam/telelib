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
export declare class PassportElementError extends Bot implements IPassportElementError {
    constructor(data: IPassportElementErrorTuple, token?: string | Bot);
    source: string;
    type: string;
    message: string;
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
export declare type PassportElementErrorTuple = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified;
export declare type IPassportElementErrorTuple = IPassportElementErrorDataField | IPassportElementErrorFrontSide | IPassportElementErrorReverseSide | IPassportElementErrorSelfie | IPassportElementErrorFile | IPassportElementErrorFiles | IPassportElementErrorTranslationFile | IPassportElementErrorTranslationFiles | IPassportElementErrorUnspecified;
