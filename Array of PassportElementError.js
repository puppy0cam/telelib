import ArrayOf from "./ArrayOf.js";
import createValidatorForPassportElementError from "./createValidatorForPassportElementError.js";

export default ArrayOf(createValidatorForPassportElementError);
