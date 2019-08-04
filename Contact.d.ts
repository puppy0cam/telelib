import Boolean from "./Boolean";
import InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply from "./InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply";
import Integer from "./Integer";
import Integer_or_String from "./Integer or String";
import Message from "./Message";
import String from "./String";

/** This object represents a phone contact. */
export default class Contact implements IContact {
    constructor(data: IContact | Contact, token?: string);
    public phone_number: String;
    public first_name: String;
    public last_name?: String;
    public user_id?: Integer;
    public vcard?: String;
    /** Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendContact(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
}

export interface IContact {
    /** Contact's phone number */
    phone_number: String;
    /** Contact's first name */
    first_name: String;
    /** Contact's last name */
    last_name?: String;
    /** Contact's user identifier in Telegram */
    user_id?: Integer;
    /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard) */
    vcard?: String;
}
