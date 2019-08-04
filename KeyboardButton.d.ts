import KeyboardButtonObject from "./KeyboardButtonObject";
import String from "./String";

declare type KeyboardButton = KeyboardButtonObject | String;
declare function KeyboardButton(data: KeyboardButton, token?: string): KeyboardButton;
export default KeyboardButton;
