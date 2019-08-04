import User from "./User.js";
import String from "./String.js";
import Date from "./Date.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";

export default class ChatMember extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            user,
            status,
            until_date,
            can_be_edited,
            can_change_info,
            can_post_messages,
            can_edit_messages,
            can_delete_messages,
            can_invite_users,
            can_restrict_members,
            can_pin_messages,
            can_promote_members,
            is_member,
            can_send_messages,
            can_send_media_messages,
            can_send_other_messages,
            can_add_web_page_previews,
        } = _value;
        this.user = new User(user, _token);
        this.status = String(status);
        if (until_date != null) {
            this.until_date = Date(until_date);
        }
        if (can_be_edited != null) {
            this.can_be_edited = Boolean(can_be_edited);
        }
        if (can_change_info != null) {
            this.can_change_info = Boolean(can_change_info);
        }
        if (can_post_messages != null) {
            this.can_post_messages = Boolean(can_post_messages);
        }
        if (can_edit_messages != null) {
            this.can_edit_messages = Boolean(can_edit_messages);
        }
        if (can_delete_messages != null) {
            this.can_delete_messages = Boolean(can_delete_messages);
        }
        if (can_invite_users != null) {
            this.can_invite_users = Boolean(can_invite_users);
        }
        if (can_restrict_members != null) {
            this.can_restrict_members = Boolean(can_restrict_members);
        }
        if (can_pin_messages != null) {
            this.can_pin_messages = Boolean(can_pin_messages);
        }
        if (can_promote_members != null) {
            this.can_promote_members = Boolean(can_promote_members);
        }
        if (is_member != null) {
            this.is_member = Boolean(is_member);
        }
        if (can_send_messages != null) {
            this.can_send_messages = Boolean(can_send_messages);
        }
        if (can_send_media_messages != null) {
            this.can_send_media_messages = Boolean(can_send_media_messages);
        }
        if (can_send_other_messages != null) {
            this.can_send_other_messages = Boolean(can_send_other_messages);
        }
        if (can_add_web_page_previews != null) {
            this.can_add_web_page_previews = Boolean(can_add_web_page_previews);
        }
    }
}
