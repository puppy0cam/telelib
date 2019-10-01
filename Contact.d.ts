import { Bot, IForceReply, IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, Message } from "./_internals.js";
/** This object represents a phone contact. */
export declare class Contact extends Bot implements IContact {
    constructor(data: IContact, token?: string | Bot);
    phone_number: string;
    first_name: string;
    last_name?: string;
    user_id?: number;
    vcard?: string;
    sendContact(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
}
/** This object represents a phone contact. */
export interface IContact {
    /** Contact's phone number */
    phone_number: string;
    /** Contact's first name */
    first_name: string;
    /** Contact's last name */
    last_name?: string;
    /** Contact's user identifier in Telegram */
    user_id?: number;
    /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard) */
    vcard?: string;
}
