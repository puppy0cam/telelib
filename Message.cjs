"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/** This object represents a message. */
class Message extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        const { from, date, chat, forward_from, forward_from_chat, forward_date, reply_to_message, edit_date, entities, caption_entities, audio, document, animation, game, photo, sticker, video, voice, video_note, contact, location, venue, poll, new_chat_members, left_chat_member, new_chat_photo, pinned_message, invoice, successful_payment, passport_data, reply_markup, } = this;
        if (from)
            this.from = new _internals_js_1.User(from, this);
        if (date)
            this.date = new Date(date.valueOf() < 9999999999 ? date.valueOf() * 1000 : date);
        if (chat)
            this.chat = new _internals_js_1.Chat(chat, this);
        if (forward_from)
            this.forward_from = new _internals_js_1.User(forward_from, this);
        if (forward_from_chat)
            this.forward_from_chat = new _internals_js_1.Chat(forward_from_chat, this);
        if (forward_date)
            this.forward_date = new Date(forward_date.valueOf() < 9999999999 ? date.valueOf() * 1000 : date);
        if (reply_to_message)
            this.reply_to_message = new Message(reply_to_message, this);
        if (edit_date)
            this.edit_date = new Date(edit_date.valueOf() < 9999999999 ? date.valueOf() * 1000 : date);
        if (entities)
            this.entities = _internals_js_1.Array_of_MessageEntity(entities, this);
        if (caption_entities)
            this.caption_entities = _internals_js_1.Array_of_MessageEntity(caption_entities, this);
        if (audio)
            this.audio = new _internals_js_1.Audio(audio, this);
        if (document)
            this.document = new _internals_js_1.Document(document, this);
        if (animation)
            this.animation = new _internals_js_1.Animation(animation, this);
        if (game)
            this.game = new _internals_js_1.Game(game, this);
        if (photo)
            this.photo = _internals_js_1.Array_of_PhotoSize(photo, this);
        if (sticker)
            this.sticker = new _internals_js_1.Sticker(sticker, this);
        if (video)
            this.video = new _internals_js_1.Video(video, this);
        if (voice)
            this.voice = new _internals_js_1.Voice(voice, this);
        if (video_note)
            this.video_note = new _internals_js_1.VideoNote(video_note, this);
        if (contact)
            this.contact = new _internals_js_1.Contact(contact, this);
        if (location)
            this.location = new _internals_js_1.Location(location, this);
        if (venue)
            this.venue = new _internals_js_1.Venue(venue, this);
        if (poll)
            this.poll = new _internals_js_1.Poll(poll, this);
        if (new_chat_members)
            this.new_chat_members = _internals_js_1.Array_of_User(new_chat_members, this);
        if (left_chat_member)
            this.left_chat_member = new _internals_js_1.User(left_chat_member, this);
        if (new_chat_photo)
            this.new_chat_photo = _internals_js_1.Array_of_PhotoSize(new_chat_photo, this);
        if (pinned_message)
            this.pinned_message = new Message(pinned_message, this);
        if (invoice)
            this.invoice = new _internals_js_1.Invoice(invoice, this);
        if (successful_payment)
            this.successful_payment = new _internals_js_1.SuccessfulPayment(successful_payment, this);
        if (passport_data)
            this.passport_data = new _internals_js_1.PassportData(passport_data, this);
        if (reply_markup)
            this.reply_markup = new _internals_js_1.InlineKeyboardMarkup(reply_markup, this);
    }
    deleteMessage(options, timeout) {
        "use strict";
        return super.deleteMessage({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    editMessageCaption(options, timeout) {
        "use strict";
        return super.editMessageCaption({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    editMessageLiveLocation(options, timeout) {
        "use strict";
        return super.editMessageLiveLocation({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    editMessageMedia(options, timeout) {
        "use strict";
        return super.editMessageMedia({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    editMessageReplyMarkup(options, timeout) {
        "use strict";
        return super.editMessageReplyMarkup({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    editMessageText(options, timeout) {
        "use strict";
        return super.editMessageText({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    forwardMessage(options, timeout) {
        "use strict";
        return super.forwardMessage({
            message_id: this.message_id,
            from_chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    getGameHighScores(options, timeout) {
        "use strict";
        return super.getGameHighScores({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    pinChatMessage(options, timeout) {
        "use strict";
        return super.pinChatMessage({
            message_id: this.message_id,
            chat_id: this.chat.id,
            ...options,
        }, timeout);
    }
    sendAnimation(options, timeout) {
        "use strict";
        return super.sendAnimation({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendAudio(options, timeout) {
        "use strict";
        return super.sendAudio({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendContact(options, timeout) {
        "use strict";
        return super.sendContact({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendDocument(options, timeout) {
        "use strict";
        return super.sendDocument({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendGame(options, timeout) {
        "use strict";
        return super.sendGame({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendInvoice(options, timeout) {
        "use strict";
        return super.sendInvoice({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendLocation(options, timeout) {
        "use strict";
        return super.sendLocation({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendMediaGroup(options, timeout) {
        "use strict";
        return super.sendMediaGroup({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendMessage(options, timeout) {
        "use strict";
        return super.sendMessage({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendPhoto(options, timeout) {
        "use strict";
        return super.sendPhoto({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendPoll(options, timeout) {
        "use strict";
        return super.sendPoll({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendSticker(options, timeout) {
        "use strict";
        return super.sendSticker({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendVenue(options, timeout) {
        "use strict";
        return super.sendVenue({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendVideo(options, timeout) {
        "use strict";
        return super.sendVideo({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendVideoNote(options, timeout) {
        "use strict";
        return super.sendVideoNote({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    sendVoice(options, timeout) {
        "use strict";
        return super.sendVoice({
            chat_id: this.chat.id,
            reply_to_message_id: this.message_id,
            ...options,
        }, timeout);
    }
    setGameScore(options, timeout) {
        "use strict";
        return super.setGameScore({
            chat_id: this.chat.id,
            message_id: this.message_id,
            ...options,
        }, timeout);
    }
    stopMessageLiveLocation(options, timeout) {
        "use strict";
        return super.stopMessageLiveLocation({
            chat_id: this.chat.id,
            message_id: this.message_id,
            ...options,
        }, timeout);
    }
    stopPoll(options, timeout) {
        "use strict";
        return super.stopPoll({
            chat_id: this.chat.id,
            message_id: this.message_id,
            ...options,
        }, timeout);
    }
}
exports.Message = Message;
