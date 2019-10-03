import { Bot, User } from "./_internals.js";
/** This object contains information about one member of a chat. */
export class ChatMember extends Bot {
    constructor(data, token) {
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
    #beginningStatus;
    /**
     * Based on the `status` field, will run actions to try and get the user to that state.
     * If any fields in this object also apply to the method, they are included. Ones that are irrelevant are ignored.
     */
    async _applyNewUserState(chat_id, timeout) {
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
                }
                else {
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
