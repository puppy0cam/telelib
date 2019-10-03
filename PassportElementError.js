import { Bot, PassportElementErrorDataField, PassportElementErrorFile, PassportElementErrorFiles, PassportElementErrorFrontSide, PassportElementErrorReverseSide, PassportElementErrorSelfie, PassportElementErrorTranslationFile, PassportElementErrorTranslationFiles, PassportElementErrorUnspecified } from "./_internals.js";
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
export class PassportElementError extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (new.target === PassportElementError) {
            switch (data.source) {
                case "data":
                    return new PassportElementErrorDataField(data, token);
                case "front_side":
                    return new PassportElementErrorFrontSide(data, token);
                case "reverse_side":
                    return new PassportElementErrorReverseSide(data, token);
                case "selfie":
                    return new PassportElementErrorSelfie(data, token);
                case "file":
                    return new PassportElementErrorFile(data, token);
                case "files":
                    return new PassportElementErrorFiles(data, token);
                case "translation_file":
                    return new PassportElementErrorTranslationFile(data, token);
                case "translation_files":
                    return new PassportElementErrorTranslationFiles(data, token);
                case "unspecified":
                    return new PassportElementErrorUnspecified(data, token);
            }
        }
    }
}
