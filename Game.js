import String from "./String.js";
import Array_of_PhotoSize from "./Array of PhotoSize.js";
import Array_of_MessageEntity from "./Array of MessageEntity.js";
import Animation from "./Animation.js";
import Bot from "./Bot.js";

export default class Game extends Bot {
    constructor(_value, _token) {
        "use strict";
        super(_token);
        const {
            title,
            description,
            photo,
            text,
            text_entities,
            animation,
        } = _value;
        this.title = String(title);
        this.description = String(description);
        this.photo = Array_of_PhotoSize(photo, _token);
        if (text != null) {
            this.text = String(text);
        }
        if (text_entities != null) {
            this.text_entities = Array_of_MessageEntity(text_entities, _token);
        }
        if (animation != null) {
            this.animation = new Animation(animation, _token);
        }
    }
}
