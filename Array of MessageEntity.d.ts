import MessageEntity, { IMessageEntity } from "./MessageEntity";

declare function Array_of_MessageEntity(data: Array<MessageEntity | IMessageEntity>, token?: string): Array<MessageEntity>;
declare type Array_of_MessageEntity = Array<MessageEntity>;
export default Array_of_MessageEntity;
