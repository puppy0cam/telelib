import ChatMember, { IChatMember } from "./ChatMember";

declare function Array_of_ChatMember(data: Array<ChatMember | IChatMember>, token?: string): Array<ChatMember>;
declare type Array_of_ChatMember = Array<ChatMember>;
export default Array_of_ChatMember;
