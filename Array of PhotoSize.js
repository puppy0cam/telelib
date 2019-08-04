import PhotoSize from "./PhotoSize.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForPhotoSize from "./createValidatorForPhotoSize.js";

export default ArrayOf(createValidatorForPhotoSize)
