import Integer from "./Integer.js";
import User from "./User.js";
import Date from "./Date.js";
import Chat from "./Chat.js";
import String from "./String.js";
import Array_of_MessageEntity from "./Array of MessageEntity.js";
import Audio from "./Audio.js";
import Document from "./Document.js";
import Animation from "./Animation.js";
import Game from "./Game.js";
import PhotoSize from "./PhotoSize.js";
import Sticker from "./Sticker.js";
import Video from "./Video.js";
import Voice from "./Voice.js";
import VideoNote from "./VideoNote.js";
import Contact from "./Contact.js";
import Location from "./Location.js";
import Venue from "./Venue.js";
import Poll from "./Poll.js";
import Array_of_User from "./Array of User.js";
import True from "./True.js";
import Invoice from "./Invoice.js";
import SuccessfulPayment from "./SuccessfulPayment.js";
import PassportData from "./PassportData.js";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup.js";
import Bot from "./Bot.js";
function getReplyToMessageRequestOptions(options) {
    "use strict";
    return Object.assign({
        chat_id: this.chat.id,
        reply_to_message_id: this.message_id,
    }, options);
}
function getEditMessageRequestOptions(options) {
    "use strict";
    return Object.assign({
        chat_id: this.chat.id,
        message_id: this.message_id,
    }, options);
}
export default class Message extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            message_id,
            from,
            date,
            chat,
            forward_from,
            forward_from_chat,
            forward_from_message_id,
            forward_signature,
            forward_date,
            reply_to_message,
            edit_date,
            media_group_id,
            author_signature,
            text,
            entities,
            caption_entities,
            audio,
            document,
            animation,
            game,
            photo,
            sticker,
            video,
            voice,
            video_note,
            caption,
            contact,
            location,
            venue,
            poll,
            new_chat_members,
            left_chat_member,
            new_chat_title,
            new_chat_photo,
            delete_chat_photo,
            group_chat_created,
            supergroup_chat_created,
            channel_chat_created,
            migrate_to_chat_id,
            migrate_from_chat_id,
            pinned_message,
            invoice,
            successful_payment,
            connected_website,
            passport_data,
            reply_markup,
        } = _value;
        this.message_id = Integer(message_id);
        if (from != null) {
            this.from = new User(from, _token);
        }
        this.date = Date(date);
        this.chat = new Chat(chat, _token);
        if (forward_from != null) {
            this.forward_from = new User(forward_from, _token);
        }
        if (forward_from_chat != null) {
            this.forward_from_chat = new Chat(forward_from_chat, _token);
        }
        if (forward_from_message_id != null) {
            this.forward_from_message_id = Integer(forward_from_message_id);
        }
        if (forward_signature != null) {
            this.forward_signature = String(forward_signature);
        }
        if (forward_date != null) {
            this.forward_date = Date(forward_date);
        }
        if (reply_to_message != null) {
            this.reply_to_message = new Message(reply_to_message, _token);
        }
        if (edit_date != null) {
            this.edit_date = Date(edit_date);
        }
        if (media_group_id != null) {
            this.media_group_id = String(media_group_id);
        }
        if (author_signature != null) {
            this.author_signature = String(author_signature);
        }
        if (text != null) {
            this.text = String(text);
        }
        if (entities != null) {
            this.entities = Array_of_MessageEntity(entities, _token);
        }
        if (caption_entities != null) {
            this.caption_entities = Array_of_MessageEntity(caption_entities, _token);
        }
        if (audio != null) {
            this.audio = new Audio(audio, _token);
        }
        if (document != null) {
            this.document = new Document(document, _token);
        }
        if (animation != null) {
            this.animation = new Animation(animation, _token);
        }
        if (game != null) {
            this.game = new Game(game, _token);
        }
        if (photo != null) {
            this.photo = new PhotoSize(photo, _token);
        }
        if (sticker != null) {
            this.sticker = new Sticker(sticker, _token);
        }
        if (video != null) {
            this.video = new Video(video, _token);
        }
        if (voice != null) {
            this.voice = new Voice(voice, _token);
        }
        if (video_note != null) {
            this.video_note = new VideoNote(video_note, _token);
        }
        if (caption != null) {
            this.caption = String(caption);
        }
        if (contact != null) {
            this.contact = new Contact(contact, _token);
        }
        if (location != null) {
            this.location = new Location(location, _token);
        }
        if (venue != null) {
            this.venue = new Venue(venue, _token);
        }
        if (poll != null) {
            this.poll = new Poll(poll, _token);
        }
        if (new_chat_members != null) {
            this.new_chat_members = Array_of_User(new_chat_members, _token);
        }
        if (left_chat_member != null) {
            this.left_chat_member = new User(left_chat_member, _token);
        }
        if (new_chat_title != null) {
            this.new_chat_title = String(new_chat_title);
        }
        if (new_chat_photo != null) {
            this.new_chat_photo = new PhotoSize(new_chat_photo, _token);
        }
        if (delete_chat_photo != null) {
            this.delete_chat_photo = True(delete_chat_photo);
        }
        if (group_chat_created != null) {
            this.group_chat_created = True(group_chat_created);
        }
        if (supergroup_chat_created != null) {
            this.supergroup_chat_created = True(supergroup_chat_created);
        }
        if (channel_chat_created != null) {
            this.channel_chat_created = True(channel_chat_created);
        }
        if (migrate_to_chat_id != null) {
            this.migrate_to_chat_id = Integer(migrate_to_chat_id);
        }
        if (migrate_from_chat_id != null) {
            this.migrate_from_chat_id = Integer(migrate_from_chat_id);
        }
        if (pinned_message != null) {
            this.pinned_message = new Message(pinned_message, _token);
        }
        if (invoice != null) {
            this.invoice = new Invoice(invoice, _token);
        }
        if (successful_payment != null) {
            this.successful_payment = new SuccessfulPayment(successful_payment, _token);
        }
        if (connected_website != null) {
            this.connected_website = String(connected_website);
        }
        if (passport_data != null) {
            this.passport_data = new PassportData(passport_data, _token);
        }
        if (reply_markup != null) {
            this.reply_markup = new InlineKeyboardMarkup(reply_markup, _token);
        }
    }
    #getReplyToMessageRequestOptions = getReplyToMessageRequestOptions;
    #getEditMessageRequestOptions = getEditMessageRequestOptions;
    deleteMessage(options) {
        "use strict";
        return super.deleteMessage(this.#getEditMessageRequestOptions(options));
    }
    editMessageCaption(options) {
        "use strict";
        return super.editMessageCaption(this.#getEditMessageRequestOptions(options));
    }
    editMessageLiveLocation(options) {
        "use strict";
        return super.editMessageLiveLocation(this.#getEditMessageRequestOptions(options));
    }
    editMessageMedia(options) {
        "use strict";
        return super.editMessageMedia(this.#getEditMessageRequestOptions(options));
    }
    editMessageReplyMarkup(options) {
        "use strict";
        return super.editMessageReplyMarkup(this.#getEditMessageRequestOptions(options));
    }
    editMessageText(options) {
        "use strict";
        return super.editMessageText(this.#getEditMessageRequestOptions(options));
    }
    forwardMessage(options) {
        "use strict";
        return super.forwardMessage(Object.assign({
            chat_id: this.chat.id,
            from_chat_id: this.chat.id,
            message_id: this.message_id,
        }, options));
    }
    getGameHighScores(options) {
        "use strict";
        return super.getGameHighScores(this.#getEditMessageRequestOptions(options));
    }
    pinChatMessage(options) {
        "use strict";
        return super.pinChatMessage(this.#getEditMessageRequestOptions(options));
    }
    sendAnimation(options) {
        "use strict";
        return super.sendAnimation(this.#getReplyToMessageRequestOptions(options));
    }
    sendAudio(options) {
        "use strict";
        return super.sendAudio(this.#getReplyToMessageRequestOptions(options));
    }
    sendContact(options) {
        "use strict";
        return super.sendContact(this.#getReplyToMessageRequestOptions(options));
    }
    sendDocument(options) {
        "use strict";
        return super.sendDocument(this.#getReplyToMessageRequestOptions(options));
    }
    sendGame(options) {
        "use strict";
        return super.sendGame(this.#getReplyToMessageRequestOptions(options));
    }
    sendInvoice(options) {
        "use strict";
        return super.sendInvoice(this.#getReplyToMessageRequestOptions(options));
    }
    sendLocation(options) {
        "use strict";
        return super.sendLocation(this.#getReplyToMessageRequestOptions(options));
    }
    sendMediaGroup(options) {
        "use strict";
        return super.sendMediaGroup(this.#getReplyToMessageRequestOptions(options));
    }
    sendMessage(options) {
        "use strict";
        return super.sendMessage(this.#getReplyToMessageRequestOptions(options));
    }
    sendPhoto(options) {
        "use strict";
        return super.sendPhoto(this.#getReplyToMessageRequestOptions(options));
    }
    sendPoll(options) {
        "use strict";
        return super.sendPoll(this.#getReplyToMessageRequestOptions(options));
    }
    sendSticker(options) {
        "use strict";
        return super.sendSticker(this.#getReplyToMessageRequestOptions(options));
    }
    sendVenue(options) {
        "use strict";
        return super.sendVenue(this.#getReplyToMessageRequestOptions(options));
    }
    sendVideo(options) {
        "use strict";
        return super.sendVideo(this.#getReplyToMessageRequestOptions(options));
    }
    sendVideoNote(options) {
        "use strict";
        return super.sendVideoNote(this.#getReplyToMessageRequestOptions(options));
    }
    sendVoice(options) {
        "use strict";
        return super.sendVoice(this.#getReplyToMessageRequestOptions(options));
    }
    setGameScore(options) {
        "use strict";
        return super.setGameScore(this.#getEditMessageRequestOptions(options));
    }
    stopMessageLiveLocation(options) {
        "use strict";
        return super.stopMessageLiveLocation(this.#getEditMessageRequestOptions(options));
    }
    stopPoll(options) {
        "use strict";
        return super.stopPoll(this.#getEditMessageRequestOptions(options));
    }
}
