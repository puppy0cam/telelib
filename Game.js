import { Bot, Array_of_PhotoSize, Array_of_MessageEntity, Animation } from "./_internals.js";
/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export class Game extends Bot {
    constructor(data, token) {
        "use strict";
        super(data, token);
        if (this.photo) {
            this.photo = Array_of_PhotoSize(this.photo, this);
        }
        if (this.text_entities) {
            this.text_entities = Array_of_MessageEntity(this.text_entities, this);
        }
        if (this.animation) {
            this.animation = new Animation(this.animation, this);
        }
    }
}
