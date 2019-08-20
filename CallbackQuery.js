import Bot from "./Bot.js";
import Message from "./Message.js";
import String from "./String.js";
import User from "./User.js";
function getEditMessageOptions(options) {
    "use strict";
    if (this.inline_message_id) {
        return Object.assign({
            inline_message_id: this.inline_message_id,
        }, options);
    } else {
        return Object.assign({
            chat_id: this.message.chat.id,
            message_id: this.message.message_id,
        }, options);
    }
}
export default class CallbackQuery extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            from,
            message,
            inline_message_id,
            chat_instance,
            data,
            game_short_name,
        } = _value;
        this.id = String(id);
        this.from = new User(from, _token);
        if (message != null) {
            this.message = new Message(message, _token);
        }
        if (inline_message_id != null) {
            this.inline_message_id = String(inline_message_id);
        }
        this.chat_instance = String(chat_instance);
        if (data != null) {
            this.data = String(data);
        }
        if (game_short_name != null) {
            this.game_short_name = String(game_short_name);
        }
    }
    #getEditMessageOptions = getEditMessageOptions;
    answerCallbackQuery(options) {
        "use strict";
        return super.answerCallbackQuery(Object.assign({
            callback_query_id: this.id,
        }, options));
    }
    editMessageLiveLocation(options) {
        "use strict";
        return super.editMessageLiveLocation(this.#getEditMessageOptions(options));
    }
    stopMessageLiveLocation(options) {
        "use strict";
        return super.stopMessageLiveLocation(this.#getEditMessageOptions(options));
    }
    editMessageText(options) {
        "use strict";
        return super.editMessageText(this.#getEditMessageOptions(options));
    }
    editMessageCaption(options) {
        "use strict";
        return super.editMessageCaption(this.#getEditMessageOptions(options));
    }
    editMessageMedia(options) {
        "use strict";
        return super.editMessageMedia(this.#getEditMessageOptions(options));
    }
    editMessageReplyMarkup(options) {
        "use strict";
        return super.editMessageReplyMarkup(this.#getEditMessageOptions(options));
    }
    setGameScore(options) {
        "use strict";
        return super.setGameScore(this.#getEditMessageOptions(options));
    }
    getGameHighScores(options) {
        "use strict";
        return super.getGameHighScores(this.#getEditMessageOptions(options));
    }
}
