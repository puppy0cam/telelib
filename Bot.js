import { Array_of_ChatMember, Array_of_GameHighScore, Array_of_Message, Array_of_Update, Chat, ChatMember, File, Message, Message_or_True, Poll, sendRequest, StickerSet, tokenedClassWrapping, tokenedResultWrapping, tokenlessResultWrapping, True, User, UserProfilePhotos, WebhookInfo } from "./_internals.js";
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
        return (content, token) => {
            "use strict";
            const ref = cache.get(token);
            if (ref) {
                const cached = ref.deref();
                if (cached !== undefined) {
                    return cached;
                }
            }
            cache.set(token, new WeakRef(content));
            cleanup.register(content, token);
            return content;
        };
    }
    return (content) => {
        "use strict";
        return content;
    };
})();
export class Bot {
    constructor(data, token) {
        "use strict";
        switch (typeof data) {
            case "string":
                this.#token = data;
                break;
            case "object":
                Object.assign(this, data);
                if (data instanceof Bot) {
                    this.#token = data.#token;
                }
                break;
        }
        if (typeof token === "string") {
            this.#token = token;
        }
        else if (token instanceof Bot) {
            this.#token = token.#token;
            this.#botId = token.#botId || token._getBotId();
        }
        if (new.target === Bot) {
            if (typeof this.#token !== "string") {
                throw new Error("Cannot construct a Bot instance without a token unless called as a super");
            }
            return cacheHandler(this, this.#token);
        }
    }
    static get tokenRetrieverCallbackForFileDownload() {
        "use strict";
        if (hasTokenRetrievalCallbackOccured >= 2) {
            throw new ReferenceError("The callback has already been retrieved");
        }
        else {
            hasTokenRetrievalCallbackOccured++;
            return function getTokenForBot(bot) {
                "use strict";
                if (bot.#token) {
                    return bot.#token;
                }
                else {
                    throw new Error("No token found");
                }
            };
        }
    }
    static getFileDownloadUrl(file, file_path) {
        "use strict";
        return `https://api.telegram.org/file/bot${file.#token}/${file_path}`;
    }
    #token;
    #botId;
    _sendRequest(method, data, timeout) {
        "use strict";
        return sendRequest(this.#token, method, data, timeout);
    }
    /**
     * A helper method to allow the user id of the bot to be obtained if the token was defined.
     * This will be helpful for optimisations when [WeakRef](https://github.com/tc39/proposal-weakrefs) becomes available.
     */
    _getBotId() {
        "use strict";
        const _botId = this.#botId;
        if (_botId) {
            return _botId;
        }
        else {
            const token = this.#token;
            if (typeof token === "string") {
                const [botIdString] = token.split(":");
                if (botIdString) {
                    const botId = globalThis.Number(botIdString);
                    if (isFinite(botId)) {
                        this.#botId = botId;
                        return botId;
                    }
                }
            }
        }
    }
    addStickerToSet(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("addStickerToSet", options, timeout));
    }
    answerCallbackQuery(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("answerCallbackQuery", options, timeout));
    }
    answerInlineQuery(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("answerInlineQuery", options, timeout));
    }
    answerPreCheckoutQuery(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("answerPreCheckoutQuery", options, timeout));
    }
    answerShippingQuery(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("answerShippingQuery", options, timeout));
    }
    createNewStickerSet(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("createNewStickerSet", options, timeout));
    }
    deleteChatPhoto(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("deleteChatPhoto", options, timeout));
    }
    deleteChatStickerSet(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("deleteChatStickerSet", options, timeout));
    }
    deleteMessage(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("deleteMessage", options, timeout));
    }
    deleteStickerFromSet(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("deleteStickerFromSet", options, timeout));
    }
    deleteWebhook(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("deleteWebhook", options, timeout));
    }
    editMessageCaption(options, timeout) {
        return tokenedResultWrapping(Message_or_True, this._sendRequest("editMessageCaption", options, timeout), this.#token);
    }
    editMessageLiveLocation(options, timeout) {
        return tokenedResultWrapping(Message_or_True, this._sendRequest("editMessageLiveLocation", options, timeout), this.#token);
    }
    editMessageMedia(options, timeout) {
        return tokenedResultWrapping(Message_or_True, this._sendRequest("editMessageMedia", options, timeout), this.#token);
    }
    editMessageReplyMarkup(options, timeout) {
        return tokenedResultWrapping(Message_or_True, this._sendRequest("editMessageReplyMarkup", options, timeout), this.#token);
    }
    editMessageText(options, timeout) {
        return tokenedResultWrapping(Message_or_True, this._sendRequest("editMessageText", options, timeout), this.#token);
    }
    exportChatInviteLink(options, timeout) {
        return tokenlessResultWrapping(String, this._sendRequest("exportChatInviteLink", options, timeout));
    }
    forwardMessage(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("forwardMessage", options, timeout), this.#token);
    }
    getChat(options, timeout) {
        return tokenedClassWrapping(Chat, this._sendRequest("getChat", options, timeout), this.#token);
    }
    getChatAdministrators(options, timeout) {
        return tokenedResultWrapping(Array_of_ChatMember, this._sendRequest("getChatAdministrators", options, timeout), this.#token);
    }
    getChatMember(options, timeout) {
        return tokenedClassWrapping(ChatMember, this._sendRequest("getChatMember", options, timeout), this.#token);
    }
    getChatMembersCount(options, timeout) {
        return tokenlessResultWrapping(Number, this._sendRequest("getChatMembersCount", options, timeout));
    }
    getFile(options, timeout) {
        return tokenedClassWrapping(File, this._sendRequest("getFile", options, timeout), this.#token);
    }
    getGameHighScores(options, timeout) {
        return tokenedResultWrapping(Array_of_GameHighScore, this._sendRequest("getGameHighScores", options, timeout), this.#token);
    }
    getMe(options, timeout) {
        return tokenedClassWrapping(User, this._sendRequest("getMe", options, timeout), this.#token);
    }
    getStickerSet(options, timeout) {
        return tokenedClassWrapping(StickerSet, this._sendRequest("getStickerSet", options, timeout), this.#token);
    }
    getUpdates(options, timeout) {
        return tokenedResultWrapping(Array_of_Update, this._sendRequest("getUpdates", options, timeout), this.#token);
    }
    getUserProfilePhotos(options, timeout) {
        return tokenedClassWrapping(UserProfilePhotos, this._sendRequest("getUserProfilePhotos", options, timeout), this.#token);
    }
    getWebhookInfo(options, timeout) {
        return tokenedClassWrapping(WebhookInfo, this._sendRequest("getWebhookInfo", options, timeout), this.#token);
    }
    kickChatMember(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("kickChatMember", options, timeout));
    }
    leaveChat(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("leaveChat", options, timeout));
    }
    pinChatMessage(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("pinChatMessage", options, timeout));
    }
    promoteChatMember(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("promoteChatMember", options, timeout));
    }
    restrictChatMember(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("restrictChatMember", options, timeout));
    }
    sendAnimation(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendAnimation", options, timeout), this.#token);
    }
    sendAudio(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendAudio", options, timeout), this.#token);
    }
    sendChatAction(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("sendChatAction", options, timeout));
    }
    sendContact(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendContact", options, timeout), this.#token);
    }
    sendDocument(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendDocument", options, timeout), this.#token);
    }
    sendGame(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendGame", options, timeout), this.#token);
    }
    sendInvoice(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendInvoice", options, timeout), this.#token);
    }
    sendLocation(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendLocation", options, timeout), this.#token);
    }
    sendMediaGroup(options, timeout) {
        return tokenedResultWrapping(Array_of_Message, this._sendRequest("sendMediaGroup", options, timeout), this.#token);
    }
    sendMessage(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendMessage", options, timeout), this.#token);
    }
    sendPhoto(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendPhoto", options, timeout), this.#token);
    }
    sendPoll(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendPoll", options, timeout), this.#token);
    }
    sendSticker(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendSticker", options, timeout), this.#token);
    }
    sendVenue(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendVenue", options, timeout), this.#token);
    }
    sendVideo(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendVideo", options, timeout), this.#token);
    }
    sendVideoNote(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendVideoNote", options, timeout), this.#token);
    }
    sendVoice(options, timeout) {
        return tokenedClassWrapping(Message, this._sendRequest("sendVoice", options, timeout), this.#token);
    }
    setChatDescription(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setChatDescription", options, timeout));
    }
    setChatPermissions(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setChatPermissions", options, timeout));
    }
    setChatPhoto(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setChatPhoto", options, timeout));
    }
    setChatStickerSet(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setChatStickerSet", options, timeout));
    }
    setChatTitle(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setChatTitle", options, timeout));
    }
    setGameScore(options, timeout) {
        return tokenedResultWrapping(Message_or_True, this._sendRequest("setGameScore", options, timeout), this.#token);
    }
    setPassportDataErrors(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setPassportDataErrors", options, timeout));
    }
    setStickerPositionInSet(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setStickerPositionInSet", options, timeout));
    }
    setWebhook(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("setWebhook", options, timeout));
    }
    stopMessageLiveLocation(options, timeout) {
        return tokenedResultWrapping(Message_or_True, this._sendRequest("stopMessageLiveLocation", options, timeout), this.#token);
    }
    stopPoll(options, timeout) {
        return tokenedClassWrapping(Poll, this._sendRequest("stopPoll", options, timeout), this.#token);
    }
    unbanChatMember(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("unbanChatMember", options, timeout));
    }
    unpinChatMessage(options, timeout) {
        return tokenlessResultWrapping(True, this._sendRequest("unpinChatMessage", options, timeout));
    }
    uploadStickerFile(options, timeout) {
        return tokenedClassWrapping(File, this._sendRequest("uploadStickerFile", options, timeout), this.#token);
    }
}
let hasTokenRetrievalCallbackOccured = 0;
