import Message from "./Message";
import True from "./True";

declare type Message_or_True = Message | True;
declare function Message_or_True(data: Message_or_True, token?: string): Message_or_True;
export default Message_or_True;
