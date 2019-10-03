"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** Contains information about the current status of a webhook. */
class WebhookInfo extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        const last_error_date = data.last_error_date;
        if (last_error_date) {
            if (last_error_date.valueOf() < 9999999999) {
                this.last_error_date = new Date(last_error_date.valueOf() * 1000);
            }
            else {
                this.last_error_date = new Date(last_error_date);
            }
            if (!isFinite(this.last_error_date.valueOf())) {
                this.last_error_date = data.last_error_date;
            }
        }
    }
    ;
}
exports.WebhookInfo = WebhookInfo;
