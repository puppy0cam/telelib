import PassportElementErrorDataField from "./PassportElementErrorDataField.js";
import PassportElementErrorFile from "./PassportElementErrorFile.js";
import PassportElementErrorFiles from "./PassportElementErrorFiles.js";
import PassportElementErrorFrontSide from "./PassportElementErrorFrontSide.js";
import PassportElementErrorReverseSide from "./PassportElementErrorReverseSide.js";
import PassportElementErrorSelfie from "./PassportElementErrorSelfie.js";
import PassportElementErrorTranslationFile from "./PassportElementErrorTranslationFile.js";
import PassportElementErrorTranslationFiles from "./PassportElementErrorTranslationFiles.js";
import PassportElementErrorUnspecified from "./PassportElementErrorUnspecified.js";

export default function PassportElementError(value, _token) {
    "use strict";
    switch (value.source) {
        case "data":
            return new PassportElementErrorDataField(value, _token);
        case "front_side":
            return new PassportElementErrorFrontSide(value, _token);
        case "reverse_side":
            return new PassportElementErrorReverseSide(value, _token);
        case "selfie":
            return new PassportElementErrorSelfie(value, _token);
        case "file":
            return new PassportElementErrorFile(value, _token);
        case "files":
            return new PassportElementErrorFiles(value, _token);
        case "translation_file":
            return new PassportElementErrorTranslationFile(value, _token);
        case "translation_files":
            return new PassportElementErrorTranslationFiles(value, _token);
        case "unspecified":
            return new PassportElementErrorUnspecified(value, _token);
        default:
            throw new TypeError("Unknown PassportElementError source");
    }
}
