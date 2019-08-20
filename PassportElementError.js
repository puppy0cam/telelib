import PassportElementErrorDataField from "./PassportElementErrorDataField.js";
import PassportElementErrorFile from "./PassportElementErrorFile.js";
import PassportElementErrorFiles from "./PassportElementErrorFiles.js";
import PassportElementErrorFrontSide from "./PassportElementErrorFrontSide.js";
import PassportElementErrorReverseSide from "./PassportElementErrorReverseSide.js";
import PassportElementErrorSelfie from "./PassportElementErrorSelfie.js";
import PassportElementErrorTranslationFile from "./PassportElementErrorTranslationFile.js";
import PassportElementErrorTranslationFiles from "./PassportElementErrorTranslationFiles.js";
import PassportElementErrorUnspecified from "./PassportElementErrorUnspecified.js";

export default function PassportElementError(value) {
    "use strict";
    switch (value.source) {
        case "data":
            return new PassportElementErrorDataField(value);
        case "front_side":
            return new PassportElementErrorFrontSide(value);
        case "reverse_side":
            return new PassportElementErrorReverseSide(value);
        case "selfie":
            return new PassportElementErrorSelfie(value);
        case "file":
            return new PassportElementErrorFile(value);
        case "files":
            return new PassportElementErrorFiles(value);
        case "translation_file":
            return new PassportElementErrorTranslationFile(value);
        case "translation_files":
            return new PassportElementErrorTranslationFiles(value);
        case "unspecified":
            return new PassportElementErrorUnspecified(value);
        default:
            throw new TypeError("Unknown PassportElementError source");
    }
}
