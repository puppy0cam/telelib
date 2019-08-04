import InputTextMessageContent from "./InputTextMessageContent";
import InputLocationMessageContent from "./InputLocationMessageContent";
import InputVenueMessageContent from "./InputVenueMessageContent";
import InputContactMessageContent from "./InputContactMessageContent";

declare type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent;
declare function InputMessageContent(data: InputMessageContent, token?: string): InputMessageContent;
export default InputMessageContent;
