import Integer from "./Integer.js";
import Message from "./Message.js";
import InlineQuery from "./InlineQuery.js";
import ChosenInlineResult from "./ChosenInlineResult.js";
import CallbackQuery from "./CallbackQuery.js";
import ShippingQuery from "./ShippingQuery.js";
import PreCheckoutQuery from "./PreCheckoutQuery.js";
import Poll from "./Poll.js";
import Bot from "./Bot.js";

export default class Update extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            update_id,
            message,
            edited_message,
            channel_post,
            edited_channel_post,
            inline_query,
            chosen_inline_result,
            callback_query,
            shipping_query,
            pre_checkout_query,
            poll,
        } = _value;
        this.update_id = Integer(update_id);
        if (message != null) {
            this.message = new Message(message, _token);
        }
        if (edited_message != null) {
            this.edited_message = new Message(edited_message, _token);
        }
        if (channel_post != null) {
            this.channel_post = new Message(channel_post, _token);
        }
        if (edited_channel_post != null) {
            this.edited_channel_post = new Message(edited_channel_post, _token);
        }
        if (inline_query != null) {
            this.inline_query = new InlineQuery(inline_query, _token);
        }
        if (chosen_inline_result != null) {
            this.chosen_inline_result = new ChosenInlineResult(chosen_inline_result, _token);
        }
        if (callback_query != null) {
            this.callback_query = new CallbackQuery(callback_query, _token);
        }
        if (shipping_query != null) {
            this.shipping_query = new ShippingQuery(shipping_query, _token);
        }
        if (pre_checkout_query != null) {
            this.pre_checkout_query = new PreCheckoutQuery(pre_checkout_query, _token);
        }
        if (poll != null) {
            this.poll = new Poll(poll, _token);
        }
    }
    getUpdates(options) {
        "use strict";
        return super.getUpdates(Object.assign({
            offset: this.update_id + 1,
        }, options));
    }
}
