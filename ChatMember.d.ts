import User from "./User";
import String from "./String";
import Date from "./Date";
import Boolean from "./Boolean";

/** This object contains information about one member of a chat. */
export default class ChatMember implements IChatMember {
    constructor(data: IChatMember | ChatMember, token?: string);
    public user: User;
    public status: String;
    public until_date?: Date;
    public can_be_edited?: Boolean;
    public can_change_info?: Boolean;
    public can_post_messages?: Boolean;
    public can_edit_messages?: Boolean;
    public can_delete_messages?: Boolean;
    public can_invite_users?: Boolean;
    public can_restrict_members?: Boolean;
    public can_pin_messages?: Boolean;
    public can_promote_members?: Boolean;
    public is_member?: Boolean;
    public can_send_messages?: Boolean;
    public can_send_media_messages?: Boolean;
    public can_send_other_messages?: Boolean;
    public can_add_web_page_previews?: Boolean;
}

export interface IChatMember {
    /** Information about the user */
    user: User;
    /** The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked” */
    status: String;
    /** Restricted and kicked only. Date when restrictions will be lifted for this user, unix time */
    until_date?: Date;
    /** Administrators only. True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited?: Boolean;
    /** Administrators only. True, if the administrator can change the chat title, photo and other settings */
    can_change_info?: Boolean;
    /** Administrators only. True, if the administrator can post in the channel, channels only */
    can_post_messages?: Boolean;
    /** Administrators only. True, if the administrator can edit messages of other users and can pin messages, channels only */
    can_edit_messages?: Boolean;
    /** Administrators only. True, if the administrator can delete messages of other users */
    can_delete_messages?: Boolean;
    /** Administrators only. True, if the administrator can invite new users to the chat */
    can_invite_users?: Boolean;
    /** Administrators only. True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members?: Boolean;
    /** Administrators only. True, if the administrator can pin messages, groups and supergroups only */
    can_pin_messages?: Boolean;
    /** Administrators only. True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members?: Boolean;
    /** Restricted only. True, if the user is a member of the chat at the moment of the request */
    is_member?: Boolean;
    /** Restricted only. True, if the user can send text messages, contacts, locations and venues */
    can_send_messages?: Boolean;
    /** Restricted only. True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages */
    can_send_media_messages?: Boolean;
    /** Restricted only. True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages */
    can_send_other_messages?: Boolean;
    /** Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages */
    can_add_web_page_previews?: Boolean;
}
