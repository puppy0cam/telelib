import ArrayOf from "./ArrayOf.js";
import createValidatorForUser from "./createValidatorForUser.js";

export default ArrayOf(createValidatorForUser, true);
