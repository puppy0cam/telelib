import InputMediaAnimation from "./InputMediaAnimation";
import InputMediaDocument from "./InputMediaDocument";
import InputMediaAudio from "./InputMediaAudio";
import InputMediaPhoto from "./InputMediaPhoto";
import InputMediaVideo from "./InputMediaVideo";

declare type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;
declare function InputMedia(data: InputMedia, token?: string): InputMedia;
export default InputMedia;
