import String from "./String";
import Array_of_PhotoSize from "./Array of PhotoSize";
import Array_of_MessageEntity from "./Array of MessageEntity";
import Animation from "./Animation";

/** This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers. */
export default class Game implements IGame {
    constructor(data: IGame | Game, token?: string);
    public title: String;
    public description: String;
    public photo: Array_of_PhotoSize;
    public text?: String;
    public text_entities?: Array_of_MessageEntity;
    public animation?: Animation;
}

export interface IGame {
    /** Title of the game */
    title: String;
    /** Description of the game */
    description: String;
    /** Photo that will be displayed in the game message in chats. */
    photo: Array_of_PhotoSize;
    /** Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.telegram.org/bots/api#setgamescore), or manually edited using [editMessageText](https://core.telegram.org/bots/api#editmessagetext). 0-4096 characters. */
    text?: String;
    /** Special entities that appear in *text*, such as usernames, URLs, bot commands, etc. */
    text_entities?: Array_of_MessageEntity;
    /** Animation that will be displayed in the game message in chats. Upload via [BotFather](https://t.me/botfather) */
    animation?: Animation;
}
