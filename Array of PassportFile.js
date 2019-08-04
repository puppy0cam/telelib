import PassportFile from "./PassportFile.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForPassportFile from "./createValidatorForPassportFile.js";

export default ArrayOf(createValidatorForPassportFile)
