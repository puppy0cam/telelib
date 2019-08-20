import ArrayOf from "./ArrayOf.js";
import createValidatorForMessageEntity from "./createValidatorForMessageEntity.js";

export default ArrayOf(createValidatorForMessageEntity);
