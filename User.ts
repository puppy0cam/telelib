import { Bot, ChatMember, File, GameHighScore, IChatPermissions, InputFile, IMaskPosition, IPassportElementError, Message, UserProfilePhotos } from "./_internals.js";

const cacheHandler = (() => { // cache handler if available. See https://github.com/tc39/proposal-weakrefs for more info.
    if (typeof FinalizationGroup === "function" && typeof WeakRef === "function") {
        const cache = new Map();
        const cleanup = new FinalizationGroup(iterator => {
            "use strict";
            for (const key of iterator) {
                const ref = cache.get(key);
                if (ref && !ref.deref()) cache.delete(key);
            }
        });
        return (content: User, botId?: number) => {
            "use strict";
            if (botId === undefined) {
                return content;
            }
            const key = `${botId}_${content.id}`;
            const ref = cache.get(key);
            if (ref) {
                const cached = ref.deref();
                if (cached !== undefined) {
                    return cached;
                }
            }
            cache.set(key, new WeakRef(content));
            cleanup.register(content, key);
            return content;
        }
    }
    return (content: User) => {
        "use strict";
        return content;
    };
})();

/** This object represents a Telegram user or bot. */
export class User extends Bot implements IUser {
    constructor(data: IUser, token?: string | Bot) {
        "use strict";
        super(data, token);
        const cachedValue = cacheHandler(this);
        if (cachedValue) {
            return cachedValue;
        }
    };
    public id!: number;
    public is_bot!: boolean;
    public first_name!: string;
    public last_name?: string;
    public username?: string;
    public language_code?: string;
    public addStickerToSet(options: {
        /** Sticker set name */
        name: string;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile | string;
        /** One or more emoji corresponding to the sticker */
        emojis: string;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: IMaskPosition;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.addStickerToSet({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public createNewStickerSet(options: {
        /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“_by_<bot username>”*. *<bot_username>* is case insensitive. 1-64 characters. */
        name: string;
        /** Sticker set title, 1-64 characters */
        title: string;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile | string;
        /** One or more emoji corresponding to the sticker */
        emojis: string;
        /** Pass *true*, if a set of mask stickers should be created */
        contains_masks?: boolean;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: IMaskPosition;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.createNewStickerSet({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public getChatMember(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: number | string;
    }, timeout?: number): Promise<ChatMember> {
        "use strict";
        return super.getChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public getGameHighScores(options: {
        /** Unique identifier for the target chat */
        chat_id: number;
        /** Identifier of the sent message */
        message_id: number;
    } | {
        /** Identifier of the inline message */
        inline_message_id?: string;
    }, timeout?: number): Promise<GameHighScore[]> {
        "use strict";
        return super.getGameHighScores({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public getUserProfilePhotos(options?: {
        /** Sequential number of the first photo to be returned. By default, all photos are returned. */
        offset?: number;
        /** Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100. */
        limit?: number;
    }, timeout?: number): Promise<UserProfilePhotos> {
        "use strict";
        return super.getUserProfilePhotos({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public kickChatMember(options: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever */
        until_date?: Date;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.kickChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public promoteChatMember(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Pass true, if the administrator can change chat title, photo and other settings */
        can_change_info?: boolean;
        /** Pass true, if the administrator can create channel posts, channels only */
        can_post_messages?: boolean;
        /** Pass true, if the administrator can edit messages of other users and can pin messages, channels only */
        can_edit_messages?: boolean;
        /** Pass true, if the administrator can delete messages of other users */
        can_delete_messages?: boolean;
        /** Pass true, if the administrator can invite new users to the chat */
        can_invite_users?: boolean;
        /** Pass true, if the administrator can restrict, ban or unban chat members */
        can_restrict_members?: boolean;
        /** Pass true, if the administrator can pin messages, supergroups only */
        can_pin_messages?: boolean;
        /** Pass true, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him) */
        can_promote_members?: boolean;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.promoteChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public restrictChatMember(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: number | string;
        /** New user permissions */
        permissions: IChatPermissions;
        /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
        until_date?: Date;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.restrictChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    /** Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api#message), otherwise returns *true*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*. */
    public setGameScore(options: {
        /** New score, must be non-negative */
        score: number;
        /** Pass true, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: boolean;
        /** Pass true, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: boolean;
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat */
        chat_id: number | string;
        /** Required if *inline_message_id* is not specified. Identifier of the sent message */
        message_id: number;
    }, timeout?: number): Promise<Message>;
    /** Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api#message), otherwise returns *true*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*. */
    public setGameScore(options: {
        /** New score, must be non-negative */
        score: number;
        /** Pass true, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: boolean;
        /** Pass true, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: boolean;
        /** Identifier of the inline message */
        inline_message_id: string;
    }, timeout?: number): Promise<true>;
    public setGameScore(options: any, timeout?: number) {
        "use strict";
        return super.setGameScore({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public setPassportDataErrors(options: {
        /** A JSON-serialized array describing the errors */
        errors: IPassportElementError[];
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.setPassportDataErrors({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    public unbanChatMember(options: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`) */
        chat_id: number | string;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.unbanChatMember({
            user_id: this.id,
            ...options,
        }, timeout);
    }
    /** Use this method to upload a .png file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success. */
    public uploadStickerFile(options: {
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile;
    }, timeout?: number): Promise<File> {
        "use strict";
        return super.uploadStickerFile({
            user_id: this.id,
            ...options,
        }, timeout);
    }
}

/** This object represents a Telegram user or bot. */
export interface IUser {
    /** Unique identifier for this user or bot */
    id: number;
    /** true, if this user is a bot */
    is_bot: boolean;
    /** User's or bot's first name */
    first_name: string;
    /** User's or bot's last name */
    last_name?: string;
    /** User's or bot's username */
    username?: string;
    /** <a href="https://en.wikipedia.org/wiki/IETF_language_tag">IETF language tag</a> of the user's language */
    language_code?: string;
}
