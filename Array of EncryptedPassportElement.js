import EncryptedPassportElement from "./EncryptedPassportElement.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForEncryptedPassportElement from "./createValidatorForEncryptedPassportElement.js";

export default ArrayOf(createValidatorForEncryptedPassportElement);
