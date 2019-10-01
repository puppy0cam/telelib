import { Bot, Array_of_PhotoSize, Array_of_MessageEntity, Animation, IAnimation, MessageEntity, IMessageEntity, PhotoSize, IPhotoSize } from "./_internals.js";

/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export class Game extends Bot implements IGame {
    constructor(data: IGame, token?: string | Bot) {
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
    public title!: string;
    public description!: string;
    public photo!: PhotoSize[];
    public text?: string;
    public text_entities?: MessageEntity[];
    public animation?: Animation;
}

/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export interface IGame {
    /** Title of the game */
    title: string;
    /** Description of the game */
    description: string;
    /** Photo that will be displayed in the game message in chats. */
    photo: IPhotoSize[];
    /** Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.telegram.org/bots/api#setgamescore), or manually edited using [editMessageText](https://core.telegram.org/bots/api#editmessagetext). 0-4096 characters. */
    text?: string;
    /** Special entities that appear in *text*, such as usernames, URLs, bot commands, etc. */
    text_entities?: IMessageEntity[];
    /** Animation that will be displayed in the game message in chats. Upload via [BotFather](https://t.me/botfather) */
    animation?: IAnimation;
}
