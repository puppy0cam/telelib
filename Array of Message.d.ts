import Message, { IMessage } from "./Message";

declare function Array_of_Message(data: Array<Message | IMessage>, token?: string): Array<Message>;
declare type Array_of_Message = Array<Message>;
export default Array_of_Message;
