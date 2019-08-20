import ArrayOf from "./ArrayOf.js";
import createValidatorForChatMember from "./createValidatorForChatMember.js";

export default ArrayOf(createValidatorForChatMember);
