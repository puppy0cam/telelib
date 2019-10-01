import { Bot, User, IUser } from "./_internals.js";

/** This object contains information about one member of a chat. */
export class ChatMember extends Bot implements IChatMember {
    #beginningStatus: string;
    constructor(data: IChatMember, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.user) {
            this.user = new User(this.user, this);
        }
        if (this.until_date) {
            this.until_date = new Date(this.until_date.valueOf() < 9999999999 ? this.until_date.valueOf() * 1000 : this.until_date);
        }
        this.#beginningStatus = this.status;
    }
    public user!: User;
    public status!: string;
    public until_date?: Date;
    public can_be_edited?: boolean;
    public can_change_info?: boolean;
    public can_post_messages?: boolean;
    public can_edit_messages?: boolean;
    public can_delete_messages?: boolean;
    public can_invite_users?: boolean;
    public can_restrict_members?: boolean;
    public can_pin_messages?: boolean;
    public can_promote_members?: boolean;
    public is_member?: boolean;
    public can_send_messages?: boolean;
    public can_send_media_messages?: boolean;
    public can_send_polls?: boolean;
    public can_send_other_messages?: boolean;
    public can_add_web_page_previews?: boolean;
    /**
     * Based on the `status` field, will run actions to try and get the user to that state.
     * If any fields in this object also apply to the method, they are included. Ones that are irrelevant are ignored.
     */
    public async _applyNewUserState(chat_id: number, timeout?: number) {
        "use strict";
        switch (this.status) {
            case "creator":
            case "administrator":
                return await super.promoteChatMember({
                    chat_id,
                    user_id: this.user.id,
                    can_change_info: this.can_change_info,
                    can_post_messages: this.can_post_messages,
                    can_edit_messages: this.can_edit_messages,
                    can_delete_messages: this.can_delete_messages,
                    can_invite_users: this.can_invite_users,
                    can_restrict_members: this.can_restrict_members,
                    can_pin_messages: this.can_pin_messages,
                    can_promote_members: this.can_promote_members,
                }, timeout);
            case "member":
                if (this.#beginningStatus === "administrator") {
                    return await super.promoteChatMember({
                        chat_id,
                        user_id: this.user.id,
                        can_change_info: false,
                        can_post_messages: false,
                        can_edit_messages: false,
                        can_delete_messages: false,
                        can_invite_users: false,
                        can_restrict_members: false,
                        can_pin_messages: false,
                        can_promote_members: false,
                    }, timeout);
                } else {
                    return await super.restrictChatMember({
                        chat_id,
                        user_id: this.user.id,
                        permissions: {
                            can_send_messages: true,
                            can_send_media_messages: true,
                            can_send_polls: true,
                            can_send_other_messages: true,
                            can_add_web_page_previews: true,
                            can_change_info: true,
                            can_invite_users: true,
                            can_pin_messages: true,
                        },
                    }, timeout);
                }
            case "restricted":
                return await super.restrictChatMember({
                    chat_id,
                    user_id: this.user.id,
                    permissions: {
                        can_send_messages: this.can_send_messages,
                        can_send_media_messages: this.can_send_media_messages,
                        can_send_polls: this.can_send_polls,
                        can_send_other_messages: this.can_send_other_messages,
                        can_add_web_page_previews: this.can_add_web_page_previews,
                        can_change_info: this.can_change_info,
                        can_invite_users: this.can_invite_users,
                        can_pin_messages: this.can_pin_messages,
                    },
                    until_date: this.until_date,
                }, timeout);
            case "kicked":
                return await super.kickChatMember({
                    chat_id,
                    user_id: this.user.id,
                    until_date: this.until_date,
                }, timeout);
            case "left":
                await super.kickChatMember({
                    chat_id,
                    user_id: this.user.id,
                }, timeout);
                return await super.unbanChatMember({
                    chat_id,
                    user_id: this.user.id,
                }, timeout);
            default:
                throw new Error("Unrecognised chat member state");
        }
    }
}

/** This object contains information about one member of a chat. */
export interface IChatMember {
    /** Information about the user */
    user: IUser;
    /** The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked” */
    status: string;
    /** Restricted and kicked only. Date when restrictions will be lifted for this user, unix time */
    until_date?: Date | number;
    /** Administrators only. True, if the bot is allowed to edit administrator privileges of that user */
    can_be_edited?: boolean;
    /** Administrators only. True, if the administrator can change the chat title, photo and other settings */
    can_change_info?: boolean;
    /** Administrators only. True, if the administrator can post in the channel, channels only */
    can_post_messages?: boolean;
    /** Administrators only. True, if the administrator can edit messages of other users and can pin messages, channels only */
    can_edit_messages?: boolean;
    /** Administrators only. True, if the administrator can delete messages of other users */
    can_delete_messages?: boolean;
    /** Administrators only. True, if the administrator can invite new users to the chat */
    can_invite_users?: boolean;
    /** Administrators only. True, if the administrator can restrict, ban or unban chat members */
    can_restrict_members?: boolean;
    /** Administrators only. True, if the administrator can pin messages, groups and supergroups only */
    can_pin_messages?: boolean;
    /** Administrators only. True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
    can_promote_members?: boolean;
    /** Restricted only. True, if the user is a member of the chat at the moment of the request */
    is_member?: boolean;
    /** Restricted only. True, if the user can send text messages, contacts, locations and venues */
    can_send_messages?: boolean;
    /** Restricted only. True, if the user can send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages */
    can_send_media_messages?: boolean;
    /** Restricted only. True, if the user is allowed to send polls */
    can_send_polls?: boolean;
    /** Restricted only. True, if the user can send animations, games, stickers and use inline bots, implies can_send_media_messages */
    can_send_other_messages?: boolean;
    /** Restricted only. True, if user may add web page previews to his messages, implies can_send_media_messages */
    can_add_web_page_previews?: boolean;
}
