import InputMediaPhoto_or_InputMediaVideo from "./InputMediaPhoto or InputMediaVideo.js";
import ArrayOf from "./ArrayOf.js";
import createValidatorForInputMediaPhotoAndInputMediaVideo from "./createValidatorForInputMediaPhoto and InputMediaVideo.js";

export default ArrayOf(createValidatorForInputMediaPhotoAndInputMediaVideo);
