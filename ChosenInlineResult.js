import { Bot, User, Location } from "./_internals.js";
/**
 * Represents a [result](https://core.telegram.org/bots/api#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.
 *
 * **Note:** It is necessary to enable [inline feedback](https://core.telegram.org/bots/inline#collecting-feedback) via [@Botfather](https://t.me/botfather) in order to receive these objects in updates.
 */
export class ChosenInlineResult extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new User(this.from, this);
        }
        if (this.location) {
            this.location = new Location(this.location, this);
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
