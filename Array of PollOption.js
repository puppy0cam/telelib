import ArrayOf from "./ArrayOf.js";
import createValidatorForPollOption from "./createValidatorForPollOption.js";

export default ArrayOf(createValidatorForPollOption)