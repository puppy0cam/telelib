import { Bot } from "./_internals.js";
/** Describes actions that a non-administrator user is allowed to take in a chat. */
export declare class ChatPermissions extends Bot implements IChatPermissions {
    constructor(data: IChatPermissions, token?: string | Bot);
    can_send_messages?: boolean;
    can_send_media_messages?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
    setChatPermissions(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: number | string;
    }, timeout?: number): Promise<true>;
    restrictChatMember(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: number | string;
        /** Unique identifier of the target user */
        user_id: number;
        /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
        until_date?: Date;
    }, timeout?: number): Promise<true>;
}
/** Describes actions that a non-administrator user is allowed to take in a chat. */
export interface IChatPermissions {
    /** True, if the user is allowed to send text messages, contacts, locations and venues */
    can_send_messages?: boolean;
    /** True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages */
    can_send_media_messages?: boolean;
    /** True, if the user is allowed to send polls, implies can_send_messages */
    can_send_polls?: boolean;
    /** True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages */
    can_send_other_messages?: boolean;
    /** True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages */
    can_add_web_page_previews?: boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info?: boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users?: boolean;
    /** True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages?: boolean;
}
