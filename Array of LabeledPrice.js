import ArrayOf from "./ArrayOf.js";
import createValidatorForLabeledPrice from "./createValidatorForLabeledPrice.js";

export default ArrayOf(createValidatorForLabeledPrice);
