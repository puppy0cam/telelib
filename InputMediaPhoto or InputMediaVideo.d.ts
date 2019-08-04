import InputMediaPhoto from "./InputMediaPhoto";
import InputMediaVideo from "./InputMediaVideo";

declare type InputMediaPhoto_or_InputMediaVideo = InputMediaPhoto | InputMediaVideo;
declare function InputMediaPhoto_or_InputMediaVideo(data: InputMediaPhoto_or_InputMediaVideo, token?: string): InputMediaPhoto_or_InputMediaVideo;
export default InputMediaPhoto_or_InputMediaVideo;
