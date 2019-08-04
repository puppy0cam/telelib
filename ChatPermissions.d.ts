import Boolean from "./Boolean";

/** Describes actions that a non-administrator user is allowed to take in a chat. */
export default class ChatPermissions implements IChatPermissions {
    constructor(data: IChatPermissions | ChatPermissions, token?: string);
    public can_send_messages?: Boolean;
    public can_send_media_messages?: Boolean;
    public can_send_polls?: Boolean;
    public can_send_other_messages?: Boolean;
    public can_add_web_page_previews?: Boolean;
    public can_change_info?: Boolean;
    public can_invite_users?: Boolean;
    public can_pin_messages?: Boolean;
}

export interface IChatPermissions {
    /** True, if the user is allowed to send text messages, contacts, locations and venues */
    can_send_messages?: Boolean;
    /** True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages */
    can_send_media_messages?: Boolean;
    /** True, if the user is allowed to send polls, implies can_send_messages */
    can_send_polls?: Boolean;
    /** True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages */
    can_send_other_messages?: Boolean;
    /** True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages */
    can_add_web_page_previews?: Boolean;
    /** True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups */
    can_change_info?: Boolean;
    /** True, if the user is allowed to invite new users to the chat */
    can_invite_users?: Boolean;
    /** True, if the user is allowed to pin messages. Ignored in public supergroups */
    can_pin_messages?: Boolean;
}
