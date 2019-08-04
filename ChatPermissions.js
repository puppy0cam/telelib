import Boolean from "./Boolean.js";
import Bot from "./Bot.js";

export default class ChatPermissions extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            can_send_messages,
            can_send_media_messages,
            can_send_polls,
            can_send_other_messages,
            can_add_web_page_previews,
            can_change_info,
            can_invite_users,
            can_pin_messages,
        } = _value;
        if (can_send_messages != null) {
            this.can_send_messages = Boolean(can_send_messages);
        }
        if (can_send_media_messages != null) {
            this.can_send_media_messages = Boolean(can_send_media_messages);
        }
        if (can_send_polls != null) {
            this.can_send_polls = Boolean(can_send_polls);
        }
        if (can_send_other_messages != null) {
            this.can_send_other_messages = Boolean(can_send_other_messages);
        }
        if (can_add_web_page_previews != null) {
            this.can_add_web_page_previews = Boolean(can_add_web_page_previews);
        }
        if (can_change_info != null) {
            this.can_change_info = Boolean(can_change_info);
        }
        if (can_invite_users != null) {
            this.can_invite_users = Boolean(can_invite_users);
        }
        if (can_pin_messages != null) {
            this.can_pin_messages = Boolean(can_pin_messages);
        }
    }
}
