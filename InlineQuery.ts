import { Bot, User, IUser, Location, ILocation, IInlineQueryResult } from "./_internals.js";

/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
export class InlineQuery extends Bot implements IInlineQuery {
    constructor(data: IInlineQuery, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new User(this.from, this);
        }
        if (this.location) {
            this.location = new Location(this.location, this);
        }
    }
    public id!: string;
    public from!: User;
    public location?: Location;
    public query!: string;
    public offset!: string;
    /**
     * Use this method to send answers to an inline query. On success, *True* is returned.
     *
     * No more than **50** results per query are allowed.
     */
    public answerInlineQuery(options: {
        /** A JSON-serialized array of results for the inline query */
        results: IInlineQueryResult;
        /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
        cache_time?: number;
        /** Pass *True*, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query */
        is_personal?: boolean;
        /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes. */
        next_offset?: string;
        /** If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter *switch_pm_parameter* */
        switch_pm_text?: string;
        /**
         * [Deep-linking](https://core.telegram.org/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.
         *
         * *Example:* An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a ‘Connect your YouTube account’ button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [switch_inline](https://core.telegram.org/bots/api#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
         */
        switch_pm_parameter?: string;
    }): Promise<true>;
}

/** This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results. */
export interface IInlineQuery {
    /** Unique identifier for this query */
    id: string;
    /** Sender */
    from: IUser;
    /** Sender location, only for bots that request user location */
    location?: ILocation;
    /** Text of the query (up to 512 characters) */
    query: string;
    /** Offset of the results to be returned, can be controlled by the bot */
    offset: string;
}
