import Boolean from "./Boolean.js";
import Float_number from "./Float number.js";
import Integer_or_String from "./Integer or String.js";
import Integer from "./Integer.js";
import sendRequest from "./request/sendRequest.js";
import String from "./String.js";

export default class Bot {
    #token;
    constructor(token) {
        "use strict";
        this.#token = token;
    }
    async* [Symbol.asyncIterator](options) {
        "use strict";
        const {
            limit,
            timeout,
            allowed_updates,
        } = options || {};
        let {
            highest_known_update_id = null,
        } = options || {}
        /**
         * @type {Array<import("./Update").default>}
         */
        let current_update_set = [];
        while (true) {
            const new_update_set = this.getUpdates({
                limit,
                timeout,
                allowed_updates,
                offset: highest_known_update_id ? highest_known_update_id + 1 : null,
            });
            for (let i = 0; i < current_update_set.length; i++) {
                yield current_update_set[i];
            }
            current_update_set = await new_update_set;
            for (let i = 0; i < current_update_set.length; i++) {
                const update = current_update_set[i];
                if (update.update_id > highest_known_update_id) {
                    highest_known_update_id = update.update_id;
                }
            }
        }
    }
    async addStickerToSet(_options) {
        "use strict";
        const {
            user_id,
            name,
            png_sticker,
            emojis,
            mask_position,
        } = _options || {};
        const request = {};
        request.user_id = Integer(user_id);
        request.name = String(name);
        request.png_sticker = InputFile_or_String(png_sticker);
        request.emojis = String(emojis);
        if (mask_position != null) {
            request.mask_position = new MaskPosition(mask_position);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "addStickerToSet", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async answerCallbackQuery(_options) {
        "use strict";
        const {
            callback_query_id,
            text,
            show_alert,
            url,
            cache_time,
        } = _options || {};
        const request = {};
        request.callback_query_id = String(callback_query_id);
        if (text != null) {
            request.text = String(text);
        }
        if (show_alert != null) {
            request.show_alert = Boolean(show_alert);
        }
        if (url != null) {
            request.url = String(url);
        }
        if (cache_time != null) {
            request.cache_time = Integer(cache_time);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "answerCallbackQuery", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async answerInlineQuery(_options) {
        "use strict";
        const {
            inline_query_id,
            results,
            cache_time,
            is_personal,
            next_offset,
            switch_pm_text,
            switch_pm_parameter,
        } = _options || {};
        const request = {};
        request.inline_query_id = String(inline_query_id);
        request.results = Array_of_InlineQueryResult(results);
        if (cache_time != null) {
            request.cache_time = Integer(cache_time);
        }
        if (is_personal != null) {
            request.is_personal = Boolean(is_personal);
        }
        if (next_offset != null) {
            request.next_offset = String(next_offset);
        }
        if (switch_pm_text != null) {
            request.switch_pm_text = String(switch_pm_text);
        }
        if (switch_pm_parameter != null) {
            request.switch_pm_parameter = String(switch_pm_parameter);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "answerInlineQuery", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async answerPreCheckoutQuery(_options) {
        "use strict";
        const {
            pre_checkout_query,
            ok,
            error_message,
        } = _options || {};
        const request = {};
        request.pre_checkout_query = String(pre_checkout_query);
        request.ok = Boolean(ok);
        if (error_message != null) {
            request.error_message = String(error_message);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "answerPreCheckoutQuery", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async answerShippingQuery(_options) {
        "use strict";
        const {
            shipping_query_id,
            ok,
            shipping_options,
            error_message,
        } = _options || {};
        const request = {};
        request.shipping_query_id = String(shipping_query_id);
        request.ok = Boolean(ok);
        if (shipping_options != null) {
            request.shipping_options = Array_of_ShippingOption(shipping_options);
        }
        if (error_message != null) {
            request.error_message = String(error_message);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "answerShippingQuery", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async createNewStickerSet(_options) {
        "use strict";
        const {
            user_id,
            name,
            title,
            png_sticker,
            emojis,
            contains_masks,
            mask_position,
        } = _options || {};
        const request = {};
        request.user_id = Integer(user_id);
        request.name = String(name);
        request.title = String(title);
        request.png_sticker = InputFile_or_String(png_sticker);
        request.emojis = String(emojis);
        if (contains_masks != null) {
            request.contains_masks = Boolean(contains_masks);
        }
        if (mask_position != null) {
            request.mask_position = new MaskPosition(mask_position);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "createNewStickerSet", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async deleteChatPhoto(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "deleteChatPhoto", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async deleteChatStickerSet(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "deleteChatStickerSet", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async deleteMessage(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.message_id = Integer(message_id);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "deleteMessage", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async deleteStickerFromSet(_options) {
        "use strict";
        const {
            sticker,
        } = _options || {};
        const request = {};
        request.sticker = String(sticker);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "deleteStickerFromSet", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async deleteWebhook(_options) {
        "use strict";
        const {
        } = _options || {};
        const request = {};
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "deleteWebhook", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async editMessageCaption(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            inline_message_id,
            caption,
            parse_mode,
            reply_markup,
        } = _options || {};
        const request = {};
        if (chat_id != null) {
            request.chat_id = Integer_or_String(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        if (caption != null) {
            request.caption = String(caption);
        }
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message_or_True}] = await Promise.all([sendRequest(this.#token, "editMessageCaption", request, 60000), import("./Message or True.js")]);
        return Message_or_True(result, this.#token);
    }
    async editMessageLiveLocation(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            inline_message_id,
            latitude,
            longitude,
            reply_markup,
        } = _options || {};
        const request = {};
        if (chat_id != null) {
            request.chat_id = Integer_or_String(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        request.latitude = Float_number(latitude);
        request.longitude = Float_number(longitude);
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message_or_True}] = await Promise.all([sendRequest(this.#token, "editMessageLiveLocation", request, 60000), import("./Message or True.js")]);
        return Message_or_True(result, this.#token);
    }
    async editMessageMedia(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            inline_message_id,
            media,
            reply_markup,
        } = _options || {};
        const request = {};
        if (chat_id != null) {
            request.chat_id = Integer_or_String(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        request.media = InputMedia(media);
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message_or_True}] = await Promise.all([sendRequest(this.#token, "editMessageMedia", request, 60000), import("./Message or True.js")]);
        return Message_or_True(result, this.#token);
    }
    async editMessageReplyMarkup(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            inline_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        if (chat_id != null) {
            request.chat_id = Integer_or_String(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message_or_True}] = await Promise.all([sendRequest(this.#token, "editMessageReplyMarkup", request, 60000), import("./Message or True.js")]);
        return Message_or_True(result, this.#token);
    }
    async editMessageText(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            inline_message_id,
            text,
            parse_mode,
            disable_web_page_preview,
            reply_markup,
        } = _options || {};
        const request = {};
        if (chat_id != null) {
            request.chat_id = Integer_or_String(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        request.text = String(text);
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (disable_web_page_preview != null) {
            request.disable_web_page_preview = Boolean(disable_web_page_preview);
        }
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message_or_True}] = await Promise.all([sendRequest(this.#token, "editMessageText", request, 60000), import("./Message or True.js")]);
        return Message_or_True(result, this.#token);
    }
    async exportChatInviteLink(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: String}] = await Promise.all([sendRequest(this.#token, "exportChatInviteLink", request, 60000), import("./String.js")]);
        return String(result, this.#token);
    }
    async forwardMessage(_options) {
        "use strict";
        const {
            chat_id,
            from_chat_id,
            disable_notification,
            message_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.from_chat_id = Integer_or_String(from_chat_id);
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        request.message_id = Integer(message_id);
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "forwardMessage", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async getChat(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: Chat}] = await Promise.all([sendRequest(this.#token, "getChat", request, 60000), import("./Chat.js")]);
        return new Chat(result, this.#token);
    }
    async getChatAdministrators(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: Array_of_ChatMember}] = await Promise.all([sendRequest(this.#token, "getChatAdministrators", request, 60000), import("./Array of ChatMember.js")]);
        return Array_of_ChatMember(result, this.#token);
    }
    async getChatMember(_options) {
        "use strict";
        const {
            chat_id,
            user_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.user_id = Integer(user_id);
        const [result, {default: ChatMember}] = await Promise.all([sendRequest(this.#token, "getChatMember", request, 60000), import("./ChatMember.js")]);
        return new ChatMember(result, this.#token);
    }
    async getChatMembersCount(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: Integer}] = await Promise.all([sendRequest(this.#token, "getChatMembersCount", request, 60000), import("./Integer.js")]);
        return Integer(result, this.#token);
    }
    async getFile(_options) {
        "use strict";
        const {
            file_id,
        } = _options || {};
        const request = {};
        request.file_id = String(file_id);
        const [result, {default: File}] = await Promise.all([sendRequest(this.#token, "getFile", request, 60000), import("./File.js")]);
        return new File(result, this.#token);
    }
    async getGameHighScores(_options) {
        "use strict";
        const {
            user_id,
            chat_id,
            message_id,
            inline_message_id,
        } = _options || {};
        const request = {};
        request.user_id = Integer(user_id);
        if (chat_id != null) {
            request.chat_id = Integer(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        const [result, {default: Array_of_GameHighScore}] = await Promise.all([sendRequest(this.#token, "getGameHighScores", request, 60000), import("./Array of GameHighScore.js")]);
        return Array_of_GameHighScore(result, this.#token);
    }
    async getMe(_options) {
        "use strict";
        const {
        } = _options || {};
        const request = {};
        const [result, {default: User}] = await Promise.all([sendRequest(this.#token, "getMe", request, 60000), import("./User.js")]);
        return new User(result, this.#token);
    }
    async getStickerSet(_options) {
        "use strict";
        const {
            name,
        } = _options || {};
        const request = {};
        request.name = String(name);
        const [result, {default: StickerSet}] = await Promise.all([sendRequest(this.#token, "getStickerSet", request, 60000), import("./StickerSet.js")]);
        return new StickerSet(result, this.#token);
    }
    async getUpdates(_options) {
        "use strict";
        const {
            offset,
            limit,
            timeout,
            allowed_updates,
        } = _options || {};
        const request = {};
        if (offset != null) {
            request.offset = Integer(offset);
        }
        if (limit != null) {
            request.limit = Integer(limit);
        }
        if (timeout != null) {
            request.timeout = Integer(timeout);
        }
        if (allowed_updates != null) {
            request.allowed_updates = Array_of_String(allowed_updates);
        }
        const [result, {default: Array_of_Update}] = await Promise.all([sendRequest(this.#token, "getUpdates", request, 60000), import("./Array of Update.js")]);
        return Array_of_Update(result, this.#token);
    }
    async getUserProfilePhotos(_options) {
        "use strict";
        const {
            user_id,
            offset,
            limit,
        } = _options || {};
        const request = {};
        request.user_id = Integer(user_id);
        if (offset != null) {
            request.offset = Integer(offset);
        }
        if (limit != null) {
            request.limit = Integer(limit);
        }
        const [result, {default: UserProfilePhotos}] = await Promise.all([sendRequest(this.#token, "getUserProfilePhotos", request, 60000), import("./UserProfilePhotos.js")]);
        return new UserProfilePhotos(result, this.#token);
    }
    async getWebhookInfo(_options) {
        "use strict";
        const {
        } = _options || {};
        const request = {};
        const [result, {default: WebhookInfo}] = await Promise.all([sendRequest(this.#token, "getWebhookInfo", request, 60000), import("./WebhookInfo.js")]);
        return new WebhookInfo(result, this.#token);
    }
    async kickChatMember(_options) {
        "use strict";
        const {
            chat_id,
            user_id,
            until_date,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.user_id = Integer(user_id);
        if (until_date != null) {
            request.until_date = Date(until_date);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "kickChatMember", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async leaveChat(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "leaveChat", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async pinChatMessage(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            disable_notification,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.message_id = Integer(message_id);
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "pinChatMessage", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async promoteChatMember(_options) {
        "use strict";
        const {
            chat_id,
            user_id,
            can_change_info,
            can_post_messages,
            can_edit_messages,
            can_delete_messages,
            can_invite_users,
            can_restrict_members,
            can_pin_messages,
            can_promote_members,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.user_id = Integer(user_id);
        if (can_change_info != null) {
            request.can_change_info = Boolean(can_change_info);
        }
        if (can_post_messages != null) {
            request.can_post_messages = Boolean(can_post_messages);
        }
        if (can_edit_messages != null) {
            request.can_edit_messages = Boolean(can_edit_messages);
        }
        if (can_delete_messages != null) {
            request.can_delete_messages = Boolean(can_delete_messages);
        }
        if (can_invite_users != null) {
            request.can_invite_users = Boolean(can_invite_users);
        }
        if (can_restrict_members != null) {
            request.can_restrict_members = Boolean(can_restrict_members);
        }
        if (can_pin_messages != null) {
            request.can_pin_messages = Boolean(can_pin_messages);
        }
        if (can_promote_members != null) {
            request.can_promote_members = Boolean(can_promote_members);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "promoteChatMember", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async restrictChatMember(_options) {
        "use strict";
        const {
            chat_id,
            user_id,
            permissions,
            until_date,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.user_id = Integer(user_id);
        request.permissions = new ChatPermissions(permissions);
        if (until_date != null) {
            request.until_date = Date(until_date);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "restrictChatMember", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async sendAnimation(_options) {
        "use strict";
        const {
            chat_id,
            animation,
            duration,
            width,
            height,
            thumb,
            caption,
            parse_mode,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.animation = InputFile_or_String(animation);
        if (duration != null) {
            request.duration = Integer(duration);
        }
        if (width != null) {
            request.width = Integer(width);
        }
        if (height != null) {
            request.height = Integer(height);
        }
        if (thumb != null) {
            request.thumb = InputFile_or_String(thumb);
        }
        if (caption != null) {
            request.caption = String(caption);
        }
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendAnimation", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendAudio(_options) {
        "use strict";
        const {
            chat_id,
            audio,
            caption,
            parse_mode,
            duration,
            performer,
            title,
            thumb,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.audio = InputFile_or_String(audio);
        if (caption != null) {
            request.caption = String(caption);
        }
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (duration != null) {
            request.duration = Integer(duration);
        }
        if (performer != null) {
            request.performer = String(performer);
        }
        if (title != null) {
            request.title = String(title);
        }
        if (thumb != null) {
            request.thumb = InputFile_or_String(thumb);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendAudio", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendChatAction(_options) {
        "use strict";
        const {
            chat_id,
            action,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.action = String(action);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "sendChatAction", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async sendContact(_options) {
        "use strict";
        const {
            chat_id,
            phone_number,
            first_name,
            last_name,
            vcard,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.phone_number = String(phone_number);
        request.first_name = String(first_name);
        if (last_name != null) {
            request.last_name = String(last_name);
        }
        if (vcard != null) {
            request.vcard = String(vcard);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendContact", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendDocument(_options) {
        "use strict";
        const {
            chat_id,
            document,
            thumb,
            caption,
            parse_mode,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.document = InputFile_or_String(document);
        if (thumb != null) {
            request.thumb = InputFile_or_String(thumb);
        }
        if (caption != null) {
            request.caption = String(caption);
        }
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendDocument", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendGame(_options) {
        "use strict";
        const {
            chat_id,
            game_short_name,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer(chat_id);
        request.game_short_name = String(game_short_name);
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendGame", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendInvoice(_options) {
        "use strict";
        const {
            chat_id,
            title,
            description,
            payload,
            provider_token,
            start_parameter,
            currency,
            prices,
            provider_data,
            photo_url,
            photo_size,
            photo_width,
            photo_height,
            need_name,
            need_phone_number,
            need_email,
            need_shipping_address,
            send_phone_number_to_provider,
            send_email_to_provider,
            is_flexible,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer(chat_id);
        request.title = String(title);
        request.description = String(description);
        request.payload = String(payload);
        request.provider_token = String(provider_token);
        request.start_parameter = String(start_parameter);
        request.currency = String(currency);
        request.prices = Array_of_LabeledPrice(prices);
        if (provider_data != null) {
            request.provider_data = String(provider_data);
        }
        if (photo_url != null) {
            request.photo_url = String(photo_url);
        }
        if (photo_size != null) {
            request.photo_size = Integer(photo_size);
        }
        if (photo_width != null) {
            request.photo_width = Integer(photo_width);
        }
        if (photo_height != null) {
            request.photo_height = Integer(photo_height);
        }
        if (need_name != null) {
            request.need_name = Boolean(need_name);
        }
        if (need_phone_number != null) {
            request.need_phone_number = Boolean(need_phone_number);
        }
        if (need_email != null) {
            request.need_email = Boolean(need_email);
        }
        if (need_shipping_address != null) {
            request.need_shipping_address = Boolean(need_shipping_address);
        }
        if (send_phone_number_to_provider != null) {
            request.send_phone_number_to_provider = Boolean(send_phone_number_to_provider);
        }
        if (send_email_to_provider != null) {
            request.send_email_to_provider = Boolean(send_email_to_provider);
        }
        if (is_flexible != null) {
            request.is_flexible = Boolean(is_flexible);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendInvoice", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendLocation(_options) {
        "use strict";
        const {
            chat_id,
            latitude,
            longitude,
            live_period,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.latitude = Float_number(latitude);
        request.longitude = Float_number(longitude);
        if (live_period != null) {
            request.live_period = Integer(live_period);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendLocation", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendMediaGroup(_options) {
        "use strict";
        const {
            chat_id,
            media,
            disable_notification,
            reply_to_message_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.media = Array_of_InputMediaPhoto_and_InputMediaVideo(media);
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        const [result, {default: Array_of_Message}] = await Promise.all([sendRequest(this.#token, "sendMediaGroup", request, 60000), import("./Array of Message.js")]);
        return Array_of_Message(result, this.#token);
    }
    async sendMessage(_options) {
        "use strict";
        const {
            chat_id,
            text,
            parse_mode,
            disable_web_page_preview,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.text = String(text);
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (disable_web_page_preview != null) {
            request.disable_web_page_preview = Boolean(disable_web_page_preview);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendMessage", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendPhoto(_options) {
        "use strict";
        const {
            chat_id,
            photo,
            caption,
            parse_mode,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.photo = InputFile_or_String(photo);
        if (caption != null) {
            request.caption = String(caption);
        }
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendPhoto", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendPoll(_options) {
        "use strict";
        const {
            chat_id,
            question,
            options,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = new Message(chat_id);
        request.question = String(question);
        request.options = Array_of_String(options);
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendPoll", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendSticker(_options) {
        "use strict";
        const {
            chat_id,
            sticker,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.sticker = InputFile_or_String(sticker);
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendSticker", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendVenue(_options) {
        "use strict";
        const {
            chat_id,
            latitude,
            longitude,
            title,
            address,
            foursquare_id,
            foursquare_type,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.latitude = Float_number(latitude);
        request.longitude = Float_number(longitude);
        request.title = String(title);
        request.address = String(address);
        if (foursquare_id != null) {
            request.foursquare_id = String(foursquare_id);
        }
        if (foursquare_type != null) {
            request.foursquare_type = String(foursquare_type);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendVenue", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendVideo(_options) {
        "use strict";
        const {
            chat_id,
            video,
            duration,
            width,
            height,
            thumb,
            caption,
            parse_mode,
            supports_streaming,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.video = InputFile_or_String(video);
        if (duration != null) {
            request.duration = Integer(duration);
        }
        if (width != null) {
            request.width = Integer(width);
        }
        if (height != null) {
            request.height = Integer(height);
        }
        if (thumb != null) {
            request.thumb = InputFile_or_String(thumb);
        }
        if (caption != null) {
            request.caption = String(caption);
        }
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (supports_streaming != null) {
            request.supports_streaming = Boolean(supports_streaming);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendVideo", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendVideoNote(_options) {
        "use strict";
        const {
            chat_id,
            video_note,
            duration,
            length,
            thumb,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.video_note = InputFile_or_String(video_note);
        if (duration != null) {
            request.duration = Integer(duration);
        }
        if (length != null) {
            request.length = Integer(length);
        }
        if (thumb != null) {
            request.thumb = InputFile_or_String(thumb);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendVideoNote", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async sendVoice(_options) {
        "use strict";
        const {
            chat_id,
            voice,
            caption,
            parse_mode,
            duration,
            disable_notification,
            reply_to_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.voice = InputFile_or_String(voice);
        if (caption != null) {
            request.caption = String(caption);
        }
        if (parse_mode != null) {
            request.parse_mode = String(parse_mode);
        }
        if (duration != null) {
            request.duration = Integer(duration);
        }
        if (disable_notification != null) {
            request.disable_notification = Boolean(disable_notification);
        }
        if (reply_to_message_id != null) {
            request.reply_to_message_id = Integer(reply_to_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply(reply_markup);
        }
        const [result, {default: Message}] = await Promise.all([sendRequest(this.#token, "sendVoice", request, 60000), import("./Message.js")]);
        return new Message(result, this.#token);
    }
    async setChatDescription(_options) {
        "use strict";
        const {
            chat_id,
            description,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        if (description != null) {
            request.description = String(description);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setChatDescription", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async setChatPermissions(_options) {
        "use strict";
        const {
            chat_id,
            permissions,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.permissions = new ChatPermissions(permissions);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setChatPermissions", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async setChatPhoto(_options) {
        "use strict";
        const {
            chat_id,
            photo,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.photo = InputFile(photo);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setChatPhoto", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async setChatStickerSet(_options) {
        "use strict";
        const {
            chat_id,
            sticker_set_name,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.sticker_set_name = String(sticker_set_name);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setChatStickerSet", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async setChatTitle(_options) {
        "use strict";
        const {
            chat_id,
            title,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.title = String(title);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setChatDescription", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async setGameScore(_options) {
        "use strict";
        const {
            user_id,
            score,
            force,
            disable_edit_message,
            chat_id,
            message_id,
            inline_message_id,
        } = _options || {};
        const request = {};
        request.user_id = Integer(user_id);
        request.score = Integer(score);
        if (force != null) {
            request.force = Boolean(force);
        }
        if (disable_edit_message != null) {
            request.disable_edit_message = Boolean(disable_edit_message);
        }
        if (chat_id != null) {
            request.chat_id = Integer(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        const [result, {default: Message_or_True}] = await Promise.all([sendRequest(this.#token, "setGameScore", request, 60000), import("./Message or True.js")]);
        return Message_or_True(result, this.#token);
    }
    async setPassportDataErrors(_options) {
        "use strict";
        const {
            user_id,
            errors,
        } = _options || {};
        const request = {};
        request.user_id = Integer(user_id);
        request.errors = Array_of_PassportElementError(errors);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setPassportDataErrors", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async setStickerPositionInSet(_options) {
        "use strict";
        const {
            sticker,
            position,
        } = _options || {};
        const request = {};
        request.sticker = String(sticker);
        request.position = Integer(position);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setStickerPositionInSet", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async setWebhook(_options) {
        "use strict";
        const {
            url,
            certificate,
            max_connections,
            allowed_updates,
        } = _options || {};
        const request = {};
        request.url = String(url);
        if (certificate != null) {
            request.certificate = InputFile(certificate);
        }
        if (max_connections != null) {
            request.max_connections = Integer(max_connections);
        }
        if (allowed_updates != null) {
            request.allowed_updates = Array_of_String(allowed_updates);
        }
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "setWebhook", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async stopMessageLiveLocation(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            inline_message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        if (chat_id != null) {
            request.chat_id = Integer_or_String(chat_id);
        }
        if (message_id != null) {
            request.message_id = Integer(message_id);
        }
        if (inline_message_id != null) {
            request.inline_message_id = String(inline_message_id);
        }
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Message_or_True}] = await Promise.all([sendRequest(this.#token, "stopMessageLiveLocation", request, 60000), import("./Message or True.js")]);
        return Message_or_True(result, this.#token);
    }
    async stopPoll(_options) {
        "use strict";
        const {
            chat_id,
            message_id,
            reply_markup,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.message_id = Integer(message_id);
        if (reply_markup != null) {
            request.reply_markup = new InlineKeyboardMarkup(reply_markup);
        }
        const [result, {default: Poll}] = await Promise.all([sendRequest(this.#token, "stopPoll", request, 60000), import("./Poll.js")]);
        return new Poll(result, this.#token);
    }
    async unbanChatMember(_options) {
        "use strict";
        const {
            chat_id,
            user_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        request.user_id = Integer(user_id);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "unbanChatMember", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async unpinChatMessage(_options) {
        "use strict";
        const {
            chat_id,
        } = _options || {};
        const request = {};
        request.chat_id = Integer_or_String(chat_id);
        const [result, {default: True}] = await Promise.all([sendRequest(this.#token, "unpinChatMessage", request, 60000), import("./True.js")]);
        return True(result, this.#token);
    }
    async uploadStickerFile(_options) {
        "use strict";
        const {
            user_id,
            png_sticker,
        } = _options || {};
        const request = {};
        request.user_id = Integer(user_id);
        request.png_sticker = InputFile(png_sticker);
        const [result, {default: File}] = await Promise.all([sendRequest(this.#token, "uploadStickerFile", request, 60000), import("./File.js")]);
        return new File(result, this.#token);
    }
}
