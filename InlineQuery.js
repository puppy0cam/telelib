import Bot from "./Bot.js";
import Location from "./Location.js";
import String from "./String.js";
import User from "./User.js";

export default class InlineQuery extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            id,
            from,
            location,
            query,
            offset,
        } = _value;
        this.id = String(id);
        this.from = new User(from, _token);
        if (location != null) {
            this.location = new Location(location, _token);
        }
        this.query = String(query);
        this.offset = String(offset);
    }
    answerInlineQuery(options) {
        "use strict";
        return super.answerInlineQuery(Object.assign({
            inline_query_id: this.id,
        }, options));
    }
}
