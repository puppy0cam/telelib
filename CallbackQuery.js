"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/**
 * This object represents an incoming callback query from a callback button in an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api#inline-mode)), the field *inline_message_id* will be present. Exactly one of the fields data or *game_short_name* will be present.
 *
 * >**NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](https://core.telegram.org/bots/api#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).
 */
class CallbackQuery extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new _internals_js_1.User(this.from, this);
        }
        if (this.message) {
            this.message = new _internals_js_1.Message(this.message, this);
        }
    }
    answerCallbackQuery(options, timeout) {
        "use strict";
        return super.answerCallbackQuery({
            callback_query_id: this.id,
            ...options,
        }, timeout);
    }
    editMessageCaption(options, timeout) {
        "use strict";
        return super.editMessageCaption({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageLiveLocation(options, timeout) {
        "use strict";
        return super.editMessageLiveLocation({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageMedia(options, timeout) {
        "use strict";
        return super.editMessageMedia({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageReplyMarkup(options, timeout) {
        "use strict";
        return super.editMessageReplyMarkup({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageText(options, timeout) {
        "use strict";
        return super.editMessageText({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    getGameHighScores(options, timeout) {
        "use strict";
        return super.getGameHighScores({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    setGameScore(options, timeout) {
        "use strict";
        return super.setGameScore({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    stopMessageLiveLocation(options, timeout) {
        "use strict";
        return super.stopMessageLiveLocation({
            chat_id: this.message && this.message.chat.id,
            message_id: this.message && this.message.message_id,
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
}
exports.CallbackQuery = CallbackQuery;
