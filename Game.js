"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _internals_js_1 = require("./_internals.js");
/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
class Game extends _internals_js_1.Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.photo) {
            this.photo = _internals_js_1.Array_of_PhotoSize(this.photo, this);
        }
        if (this.text_entities) {
            this.text_entities = _internals_js_1.Array_of_MessageEntity(this.text_entities, this);
        }
        if (this.animation) {
            this.animation = new _internals_js_1.Animation(this.animation, this);
        }
    }
}
exports.Game = Game;
