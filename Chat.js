import Integer from "./Integer.js";
import String from "./String.js";
import ChatPhoto from "./ChatPhoto.js";
import Message from "./Message.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
function getMethodOptions(options) {
    "use strict";
    return Object.assign({
        chat_id: this.id,
    }, options);
}
export default class Chat extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            type,
            title,
            username,
            first_name,
            last_name,
            photo,
            description,
            invite_link,
            pinned_message,
            sticker_set_name,
            can_set_sticker_set,
        } = _value;
        this.id = Integer(id);
        this.type = String(type);
        if (title != null) {
            this.title = String(title);
        }
        if (username != null) {
            this.username = String(username);
        }
        if (first_name != null) {
            this.first_name = String(first_name);
        }
        if (last_name != null) {
            this.last_name = String(last_name);
        }
        if (photo != null) {
            this.photo = new ChatPhoto(photo, _token);
        }
        if (description != null) {
            this.description = String(description);
        }
        if (invite_link != null) {
            this.invite_link = String(invite_link);
        }
        if (pinned_message != null) {
            this.pinned_message = new Message(pinned_message, _token);
        }
        if (sticker_set_name != null) {
            this.sticker_set_name = String(sticker_set_name);
        }
        if (can_set_sticker_set != null) {
            this.can_set_sticker_set = Boolean(can_set_sticker_set);
        }
    }
    #getMethodOptions = getMethodOptions;
    forwardMessage(options) {
        "use strict";
        return super.forwardMessage(Object.assign({
            chat_id: this.id,
            from_chat_id: this.id,
        }, options));
    }
    sendPhoto(options) {
        "use strict";
        return super.sendPhoto(this.#getMethodOptions(options));
    }
    sendAudio(options) {
        "use strict";
        return super.sendAudio(this.#getMethodOptions(options));
    }
    sendDocument(options) {
        "use strict";
        return super.sendDocument(this.#getMethodOptions(options));
    }
    sendVideo(options) {
        "use strict";
        return super.sendVideo(this.#getMethodOptions(options));
    }
    sendAnimation(options) {
        "use strict";
        return super.sendAnimation(this.#getMethodOptions(options));
    }
    sendVoice(options) {
        "use strict";
        return super.sendVoice(this.#getMethodOptions(options));
    }
    sendVideoNote(options) {
        "use strict";
        return super.sendVideoNote(this.#getMethodOptions(options));
    }
    sendMediaGroup(options) {
        "use strict";
        return super.sendMediaGroup(this.#getMethodOptions(options));
    }
    sendLocation(options) {
        "use strict";
        return super.sendLocation(this.#getMethodOptions(options));
    }
    editMessageLiveLocation(options) {
        "use strict";
        return super.editMessageLiveLocation(this.#getMethodOptions(options));
    }
    stopMessageLiveLocation(options) {
        "use strict";
        return super.stopMessageLiveLocation(this.#getMethodOptions(options));
    }
    sendVenue(options) {
        "use strict";
        return super.sendVenue(this.#getMethodOptions(options));
    }
    sendContact(options) {
        "use strict";
        return super.sendContact(this.#getMethodOptions(options));
    }
    sendPoll(options) {
        "use strict";
        return super.sendPoll(this.#getMethodOptions(options));
    }
    sendChatAction(options) {
        "use strict";
        return super.sendChatAction(this.#getMethodOptions(options));
    }
    kickChatMember(options) {
        "use strict";
        return super.kickChatMember(this.#getMethodOptions(options));
    }
    unbanChatMember(options) {
        "use strict";
        return super.unbanChatMember(this.#getMethodOptions(options));
    }
    restrictChatMember(options) {
        "use strict";
        return super.restrictChatMember(this.#getMethodOptions(options));
    }
    promoteChatMember(options) {
        "use strict";
        return super.promoteChatMember(this.#getMethodOptions(options));
    }
    setChatPermissions(options) {
        "use strict";
        return super.setChatPermissions(this.#getMethodOptions(options));
    }
    exportChatInviteLink(options) {
        "use strict";
        return super.exportChatInviteLink(this.#getMethodOptions(options));
    }
    setChatPhoto(options) {
        "use strict";
        return super.setChatPhoto(this.#getMethodOptions(options));
    }
    deleteChatPhoto(options) {
        "use strict";
        return super.deleteChatPhoto(this.#getMethodOptions(options));
    }
    setChatTitle(options) {
        "use strict";
        return super.setChatTitle(this.#getMethodOptions(options));
    }
    setChatDescription(options) {
        "use strict";
        return super.setChatDescription(this.#getMethodOptions(options));
    }
    pinChatMessage(options) {
        "use strict";
        return super.pinChatMessage(this.#getMethodOptions(options));
    }
    unpinChatMessage(options) {
        "use strict";
        return super.unpinChatMessage(this.#getMethodOptions(options));
    }
    leaveChat(options) {
        "use strict";
        return super.leaveChat(this.#getMethodOptions(options));
    }
    getChat(options) {
        "use strict";
        return super.getChat(this.#getMethodOptions(options));
    }
    getChatAdministrators(options) {
        "use strict";
        return super.getChatAdministrators(this.#getMethodOptions(options));
    }
    getChatMembersCount(options) {
        "use strict";
        return super.getChatMembersCount(this.#getMethodOptions(options));
    }
    getChatMember(options) {
        "use strict";
        return super.getChatMember(this.#getMethodOptions(options));
    }
    setChatStickerSet(options) {
        "use strict";
        return super.setChatStickerSet(this.#getMethodOptions(options));
    }
    deleteChatStickerSet(options) {
        "use strict";
        return super.deleteChatStickerSet(this.#getMethodOptions(options));
    }
    editMessageText(options) {
        "use strict";
        return super.editMessageText(this.#getMethodOptions(options));
    }
    editMessageCaption(options) {
        "use strict";
        return super.editMessageCaption(this.#getMethodOptions(options));
    }
    editMessageMedia(options) {
        "use strict";
        return super.editMessageMedia(this.#getMethodOptions(options));
    }
    editMessageReplyMarkup(options) {
        "use strict";
        return super.editMessageReplyMarkup(this.#getMethodOptions(options));
    }
    stopPoll(options) {
        "use strict";
        return super.stopPoll(this.#getMethodOptions(options));
    }
    deleteMessage(options) {
        "use strict";
        return super.deleteMessage(this.#getMethodOptions(options));
    }
    sendSticker(options) {
        "use strict";
        return super.sendSticker(this.#getMethodOptions(options));
    }
    sendInvoice(options) {
        "use strict";
        return super.sendInvoice(this.#getMethodOptions(options));
    }
    sendGame(options) {
        "use strict";
        return super.sendGame(this.#getMethodOptions(options));
    }
    setGameScore(options) {
        "use strict";
        return super.setGameScore(this.#getMethodOptions(options));
    }
    getGameHighScores(options) {
        "use strict";
        return super.getGameHighScores(this.#getMethodOptions(options));
    }
}
