import String from "./String";
import Integer from "./Integer";
import User from "./User";

/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export default class MessageEntity implements IMessageEntity {
    constructor(data: IMessageEntity | MessageEntity, token?: string);
    public type: String;
    public offset: Integer;
    public length: Integer;
    public url?: String;
    public user?: User;
}

export interface IMessageEntity {
    /** Type of the entity. Can be mention (`@username`), *hashtag*, *cashtag*, *bot_command*, *url*, *email*, *phone_number*, *bold* (bold text), *italic* (italic text), *code* (monowidth string), *pre* (monowidth block), *text_link* (for clickable text URLs), *text_mention* (for users without usernames) */
    type: String;
    /** Offset in UTF-16 code units to the start of the entity */
    offset: Integer;
    /** Length of the entity in UTF-16 code units */
    length: Integer;
    /** For “text_link” only, url that will be opened after user taps on the text */
    url?: String;
    /** For “text_mention” only, the mentioned user */
    user?: User;
}
