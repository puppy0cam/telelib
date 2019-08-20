import ArrayOf from "./ArrayOf.js";
import createValidatorForArrayOfPhotoSize from "./createValidatorForArrayOfPhotoSize.js";

export default ArrayOf(createValidatorForArrayOfPhotoSize);
