import Message from "./Message.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForMessage from "./createValidatorForMessage.js";

export default ArrayOf(createValidatorForMessage);
