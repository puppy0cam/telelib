import { Bot, ChatPhoto, Message } from "./_internals.js";
const cacheHandler = (() => {
    if (typeof FinalizationGroup === "function" && typeof WeakRef === "function") {
        const cache = new Map();
        const cleanup = new FinalizationGroup(iterator => {
            "use strict";
            for (const key of iterator) {
                const ref = cache.get(key);
                if (ref && !ref.deref())
                    cache.delete(key);
            }
        });
        return (content, botId) => {
            "use strict";
            if (botId === undefined) {
                return content;
            }
            const key = `${botId}_${content.id}`;
            const ref = cache.get(key);
            if (ref) {
                const cached = ref.deref();
                if (cached !== undefined) {
                    return cached;
                }
            }
            cache.set(key, new WeakRef(content));
            cleanup.register(content, key);
            return content;
        };
    }
    return (content) => {
        "use strict";
        return content;
    };
})();
/** This object represents a chat. */
export class Chat extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        const cachedValue = cacheHandler(this, this._getBotId());
        const { photo, pinned_message, } = data;
        if (photo) {
            cachedValue.photo = new ChatPhoto(photo, this);
        }
        if (pinned_message) {
            cachedValue.pinned_message = new Message(pinned_message, this);
        }
        return cachedValue;
    }
    deleteChatPhoto(options, timeout) {
        "use strict";
        return super.deleteChatPhoto({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    deleteChatStickerSet(options, timeout) {
        "use strict";
        return super.deleteChatStickerSet({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    deleteMessage(options, timeout) {
        "use strict";
        return super.deleteMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    editMessageCaption(options, timeout) {
        "use strict";
        return super.editMessageCaption({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    editMessageLiveLocation(options, timeout) {
        "use strict";
        return super.editMessageLiveLocation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    editMessageMedia(options, timeout) {
        "use strict";
        return super.editMessageMedia({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    editMessageReplyMarkup(options, timeout) {
        "use strict";
        return super.editMessageReplyMarkup({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    editMessageText(options, timeout) {
        "use strict";
        return super.editMessageText({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    exportChatInviteLink(options, timeout) {
        "use strict";
        return super.exportChatInviteLink({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    forwardMessage(options, timeout) {
        "use strict";
        return super.forwardMessage({
            chat_id: this.id,
            from_chat_id: this.id,
            ...options,
        }, timeout);
    }
    getChat(options, timeout) {
        "use strict";
        return super.getChat({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    getChatAdministrators(options, timeout) {
        "use strict";
        return super.getChatAdministrators({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    getChatMember(options, timeout) {
        "use strict";
        return super.getChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    getChatMembersCount(options, timeout) {
        "use strict";
        return super.getChatMembersCount({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    getGameHighScores(options, timeout) {
        "use strict";
        return super.getGameHighScores({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    kickChatMember(options, timeout) {
        "use strict";
        return super.kickeChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    leaveChat(options, timeout) {
        "use strict";
        return super.leaveChat({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    pinChatMessage(options, timeout) {
        "use strict";
        return super.pinChatMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    promoteChatMember(options, timeout) {
        "use strict";
        return super.promoteChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    restrictChatMember(options, timeout) {
        "use strict";
        return super.restrictChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendAnimation(options, timeout) {
        "use strict";
        return super.sendAnimation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendAudio(options, timeout) {
        "use strict";
        return super.sendAudio({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendChatAction(options, timeout) {
        "use strict";
        return super.sendChatAction({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendContact(options, timeout) {
        "use strict";
        return super.sendContact({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendDocument(options, timeout) {
        "use strict";
        return super.sendDocument({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendGame(options, timeout) {
        "use strict";
        return super.sendGame({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendInvoice(options, timeout) {
        "use strict";
        return super.sendInvoice({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendLocation(options, timeout) {
        "use strict";
        return super.sendLocation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendMediaGroup(options, timeout) {
        "use strict";
        return super.sendMediaGroup({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendMessage(options, timeout) {
        "use strict";
        return super.sendMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendPhoto(options, timeout) {
        "use strict";
        return super.sendPhoto({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendPoll(options, timeout) {
        "use strict";
        return super.sendPoll({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendSticker(options, timeout) {
        "use strict";
        return super.sendSticker({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendVenue(options, timeout) {
        "use strict";
        return super.sendVenue({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendVideo(options, timeout) {
        "use strict";
        return super.sendVideo({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendVideoNote(options, timeout) {
        "use strict";
        return super.sendvideoNote({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    sendVoice(options, timeout) {
        "use strict";
        return super.sendVoice({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    setChatDescription(options, timeout) {
        "use strict";
        return super.setChatDescription({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    setChatPermissions(options, timeout) {
        "use strict";
        return super.setChatPermissions({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    setChatPhoto(options, timeout) {
        "use strict";
        return super.setChatPhoto({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    setChatStickerSet(options, timeout) {
        "use strict";
        return super.setChatStickerSet({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    setChatTitle(options, timeout) {
        "use strict";
        return super.setChatTitle({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    setGameScore(options, timeout) {
        "use strict";
        return super.setGameScore({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    stopMessageLiveLocation(options, timeout) {
        "use strict";
        return super.stopMessageLiveLocation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    stopPoll(options, timeout) {
        "use strict";
        return super.stopPoll({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    unbanChatMember(options, timeout) {
        "use strict";
        return super.unbanChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    unpinChatMessage(options, timeout) {
        "use strict";
        return super.unpinChatMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
}
