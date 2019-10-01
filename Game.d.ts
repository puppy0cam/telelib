import { Bot, Animation, IAnimation, MessageEntity, IMessageEntity, PhotoSize, IPhotoSize } from "./_internals.js";
/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export declare class Game extends Bot implements IGame {
    constructor(data: IGame, token?: string | Bot);
    title: string;
    description: string;
    photo: PhotoSize[];
    text?: string;
    text_entities?: MessageEntity[];
    animation?: Animation;
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
