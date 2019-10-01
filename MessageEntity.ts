import { Bot, User, IUser } from "./_internals.js";

/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export class MessageEntity extends Bot implements IMessageEntity {
    constructor(data: IMessageEntity, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.user) {
            this.user = new User(this.user, this);
        }
    }
    public type!: string;
    public offset!: number;
    public length!: number;
    public url?: string;
    public user?: User;
}

/** This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc. */
export interface IMessageEntity {
    /** Type of the entity. Can be mention (`@username`), *hashtag*, *cashtag*, *bot_command*, *url*, *email*, *phone_number*, *bold* (bold text), *italic* (italic text), *code* (monowidth string), *pre* (monowidth block), *text_link* (for clickable text URLs), *text_mention* (for users without usernames) */
    type: string;
    /** Offset in UTF-16 code units to the start of the entity */
    offset: number;
    /** Length of the entity in UTF-16 code units */
    length: number;
    /** For “text_link” only, url that will be opened after user taps on the text */
    url?: string;
    /** For “text_mention” only, the mentioned user */
    user?: IUser;
}
