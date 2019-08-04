import Integer from "./Integer.js";
import User from "./User.js";
import Bot from "./Bot.js";

export default class GameHighScore extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            position,
            user,
            score,
        } = _value;
        this.position = Integer(position);
        this.user = new User(user, _token);
        this.score = Integer(score);
    }
}
