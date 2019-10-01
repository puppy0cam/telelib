import { Animation, Array_of_MessageEntity, Array_of_PhotoSize, Array_of_User, Audio, Bot, Chat, Contact, Document, Game, InlineKeyboardMarkup, Invoice, Location, PassportData, Poll, Sticker, SuccessfulPayment, User, Venue, Video, VideoNote, Voice } from "./_internals.mjs";
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
            const key = `${botId}_${content.chat.id}_${content.message_id}`;
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
/** This object represents a message. */
export class Message extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        const cachedValue = cacheHandler(this, this._getBotId());
        if (cachedValue !== this) {
            return cachedValue;
        }
        const { from, date, chat, forward_from, forward_from_chat, forward_date, reply_to_message, edit_date, entities, caption_entities, audio, document, animation, game, photo, sticker, video, voice, video_note, contact, location, venue, poll, new_chat_members, left_chat_member, new_chat_photo, pinned_message, invoice, successful_payment, passport_data, reply_markup, } = this;
        if (from)
            this.from = new User(from, this);
        if (date)
            this.date = new Date(date.valueOf() < 9999999999 ? date.valueOf() * 1000 : date);
        if (chat)
            this.chat = new Chat(chat, this);
        if (forward_from)
            this.forward_from = new User(forward_from, this);
        if (forward_from_chat)
            this.forward_from_chat = new Chat(forward_from_chat, this);
        if (forward_date)
            this.forward_date = new Date(forward_date.valueOf() < 9999999999 ? date.valueOf() * 1000 : date);
        if (reply_to_message)
            this.reply_to_message = new Message(reply_to_message, this);
        if (edit_date)
            this.edit_date = new Date(edit_date.valueOf() < 9999999999 ? date.valueOf() * 1000 : date);
        if (entities)
            this.entities = Array_of_MessageEntity(entities, this);
        if (caption_entities)
            this.caption_entities = Array_of_MessageEntity(caption_entities, this);
        if (audio)
            this.audio = new Audio(audio, this);
        if (document)
            this.document = new Document(document, this);
        if (animation)
            this.animation = new Animation(animation, this);
        if (game)
            this.game = new Game(game, this);
        if (photo)
            this.photo = Array_of_PhotoSize(photo, this);
        if (sticker)
            this.sticker = new Sticker(sticker, this);
        if (video)
            this.video = new Video(video, this);
        if (voice)
            this.voice = new Voice(voice, this);
        if (video_note)
            this.video_note = new VideoNote(video_note, this);
        if (contact)
            this.contact = new Contact(contact, this);
        if (location)
            this.location = new Location(location, this);
        if (venue)
            this.venue = new Venue(venue, this);
        if (poll)
            this.poll = new Poll(poll, this);
        if (new_chat_members)
            this.new_chat_members = Array_of_User(new_chat_members, this);
        if (left_chat_member)
            this.left_chat_member = new User(left_chat_member, this);
        if (new_chat_photo)
            this.new_chat_photo = Array_of_PhotoSize(new_chat_photo, this);
        if (pinned_message)
            this.pinned_message = new Message(pinned_message, this);
        if (invoice)
            this.invoice = new Invoice(invoice, this);
        if (successful_payment)
            this.successful_payment = new SuccessfulPayment(successful_payment, this);
        if (passport_data)
            this.passport_data = new PassportData(passport_data, this);
        if (reply_markup)
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, this);
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
