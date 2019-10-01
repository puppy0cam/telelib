import { Bot, User, IUser, Location, ILocation, IInlineKeyboardMarkup, IInputMedia } from "./_internals.js";

/**
 * Represents a [result](https://core.telegram.org/bots/api#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.
 *
 * **Note:** It is necessary to enable [inline feedback](https://core.telegram.org/bots/inline#collecting-feedback) via [@Botfather](https://t.me/botfather) in order to receive these objects in updates.
 */
export class ChosenInlineResult extends Bot implements IChosenInlineResult {
    constructor(data: IChosenInlineResult, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.from) {
            this.from = new User(this.from, this);
        }
        if (this.location) {
            this.location = new Location(this.location, this);
        }
    }
    public result_id!: string;
    public from!: User;
    public location?: Location;
    public inline_message_id?: string;
    public query!: string;
    public editMessageCaption(options?: {
        /** New caption of the message */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.editMessageCaption({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    public editMessageLiveLocation(options: {
        /** Latitude of new location */
        latitude: number;
        /** Longitude of new location */
        longitude: number;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.editMessageLiveLocation({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    public editMessageMedia(options: {
        /** A JSON-serialized object for a new media content of the message */
        media: IInputMedia;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.editMessageMedia({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    public editMessageReplyMarkup(options?: {
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.editMessageReplyMarkup({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
    public editMessageText(options: {
        /** New text of the message */
        text: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: string;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.editMessageText({
            inline_message_id: this.inline_message_id,
            ...options,
        }, timeout);
    }
}

/**
 * Represents a [result](https://core.telegram.org/bots/api#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.
 *
 * **Note:** It is necessary to enable [inline feedback](https://core.telegram.org/bots/inline#collecting-feedback) via [@Botfather](https://t.me/botfather) in order to receive these objects in updates.
 */
export interface IChosenInlineResult {
    /** The unique identifier for the result that was chosen */
    result_id: string;
    /** The user that chose the result */
    from: IUser;
    /** Sender location, only for bots that require user location */
    location?: ILocation;
    /** Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.telegram.org/bots/api#inlinekeyboardmarkup) attached to the message. Will be also received in [callback queries](https://core.telegram.org/bots/api#callbackquery) and can be used to [edit](https://core.telegram.org/bots/api#updating-messages) the message. */
    inline_message_id?: string;
    /** The query that was used to obtain the result */
    query: string;
}
