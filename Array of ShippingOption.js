import ArrayOf from "./ArrayOf.js";
import createValidatorForShippingOption from "./createValidatorForShippingOption.js";

export default ArrayOf(createValidatorForShippingOption);
