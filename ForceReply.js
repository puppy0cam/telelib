import Boolean from "./Boolean.js";
import Bot from "./Bot.js";
import True from "./True.js";

export default class ForceReply extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            force_reply,
            selective,
        } = _value;
        this.force_reply = True(force_reply);
        if (selective != null) {
            this.selective = Boolean(selective);
        }
    }
}
