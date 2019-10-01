"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.cjs");
/**
 * Represents a [result](https://core.telegram.org/bots/api#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.
 *
 * **Note:** It is necessary to enable [inline feedback](https://core.telegram.org/bots/inline#collecting-feedback) via [@Botfather](https://t.me/botfather) in order to receive these objects in updates.
 */
class ChosenInlineResult extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new _internals_js_1.User(this.from, this);
        }
        if (this.location) {
            this.location = new _internals_js_1.Location(this.location, this);
        }
    }
    editMessageCaption(options, timeout) {
        "use strict";
        return super.editMessageCaption({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageLiveLocation(options, timeout) {
        "use strict";
        return super.editMessageLiveLocation({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageMedia(options, timeout) {
        "use strict";
        return super.editMessageMedia({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageReplyMarkup(options, timeout) {
        "use strict";
        return super.editMessageReplyMarkup({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    editMessageText(options, timeout) {
        "use strict";
        return super.editMessageText({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
}
exports.ChosenInlineResult = ChosenInlineResult;
