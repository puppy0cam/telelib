"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
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
class PassportElementError extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (new.target === PassportElementError) {
            switch (data.source) {
                case "data":
                    return new _internals_js_1.PassportElementErrorDataField(data, token);
                case "front_side":
                    return new _internals_js_1.PassportElementErrorFrontSide(data, token);
                case "reverse_side":
                    return new _internals_js_1.PassportElementErrorReverseSide(data, token);
                case "selfie":
                    return new _internals_js_1.PassportElementErrorSelfie(data, token);
                case "file":
                    return new _internals_js_1.PassportElementErrorFile(data, token);
                case "files":
                    return new _internals_js_1.PassportElementErrorFiles(data, token);
                case "translation_file":
                    return new _internals_js_1.PassportElementErrorTranslationFile(data, token);
                case "translation_files":
                    return new _internals_js_1.PassportElementErrorTranslationFiles(data, token);
                case "unspecified":
                    return new _internals_js_1.PassportElementErrorUnspecified(data, token);
            }
        }
    }
}
exports.PassportElementError = PassportElementError;
