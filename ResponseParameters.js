import Integer from "./Integer.js";
import Bot from "./Bot.js";

export default class ResponseParameters extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            migrate_to_chat_id,
            retry_after,
        } = _value;
        if (migrate_to_chat_id != null) {
            this.migrate_to_chat_id = Integer(migrate_to_chat_id);
        }
        if (retry_after != null) {
            this.retry_after = Integer(retry_after);
        }
    }
}
