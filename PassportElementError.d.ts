import PassportElementErrorDataField from "./PassportElementErrorDataField";
import PassportElementErrorFrontSide from "./PassportElementErrorFrontSide";
import PassportElementErrorReverseSide from "./PassportElementErrorReverseSide";
import PassportElementErrorSelfie from "./PassportElementErrorSelfie";
import PassportElementErrorFile from "./PassportElementErrorFile";
import PassportElementErrorFiles from "./PassportElementErrorFiles";
import PassportElementErrorTranslationFile from "./PassportElementErrorTranslationFile";
import PassportElementErrorTranslationFiles from "./PassportElementErrorTranslationFiles";
import PassportElementErrorUnspecified from "./PassportElementErrorUnspecified";

declare type PassportElementError = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified;
declare function PassportElementError(data: PassportElementError, token?: string): PassportElementError;
export default PassportElementError;
