import Array_of_String from "./Array of String.js";
import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
import Date from "./Date.js";
import Integer from "./Integer.js";
import String from "./String.js";

export default class WebhookInfo extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            url,
            has_custom_certificate,
            pending_update_count,
            last_error_date,
            last_error_message,
            max_connection,
            allowed_updates,
        } = _value;
        this.url = String(url);
        this.has_custom_certificate = Boolean(has_custom_certificate);
        this.pending_update_count = Integer(pending_update_count);
        if (last_error_date != null) {
            this.last_error_date = Date(last_error_date);
        }
        if (last_error_message != null) {
            this.last_error_message = String(last_error_message);
        }
        if (max_connection != null) {
            this.max_connection = Integer(max_connection);
        }
        if (allowed_updates != null) {
            this.allowed_updates = Array_of_String(allowed_updates, _token);
        }
    }
}
