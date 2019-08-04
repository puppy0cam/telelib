import Integer from "./Integer";
import Boolean from "./Boolean";
import String from "./String";
import InputFile_or_String from "./InputFile or String";
import MaskPosition from "./MaskPosition";
import True from "./True";
import Integer_or_String from "./Integer or String";
import ChatMember from "./ChatMember";
import Array_of_GameHighScore from "./Array of GameHighScore";
import UserProfilePhotos from "./UserProfilePhotos";
import ChatPermissions from "./ChatPermissions";
import Message from "./Message";
import Array_of_PassportElementError from "./Array of PassportElementError";
import File from "./File";
import InputFile from "./InputFile";

/** This object represents a Telegram user or bot. */
export default class User implements IUser {
    constructor(data: IUser | User, token?: string);
    public id: Integer;
    public is_bot: Boolean;
    public first_name: String;
    public last_name?: String;
    public username?: String;
    public language_code?: String;
    /** Use this method to add a new sticker to a set created by the bot. Returns *True* on success. */
    public addStickerToSet(options: {
        /** Sticker set name */
        name: String;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile_or_String;
        /** One or more emoji corresponding to the sticker */
        emojis: String;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition;
    }): Promise<True>;
    /** Use this method to create new sticker set owned by a user. The bot will be able to edit the created sticker set. Returns *True* on success. */
    public createNewStickerSet(options: {
        /** Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“_by_<bot username>”*. *<bot_username>* is case insensitive. 1-64 characters. */
        name: String;
        /** Sticker set title, 1-64 characters */
        title: String;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile_or_String;
        /** One or more emoji corresponding to the sticker */
        emojis: String;
        /** Pass *True*, if a set of mask stickers should be created */
        contains_masks?: Boolean;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition;
    }): Promise<True>;
    /** Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object on success. */
    public getChatMember(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<ChatMember>;
    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api#gamehighscore) objects.
     * >This method will currently return scores for the target user, plus two of his closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
     */
    public getGameHighScores(options: {
        /** Unique identifier for the target chat */
        chat_id: Integer;
        /** Identifier of the sent message */
        message_id: Integer;
    } | {
        /** Identifier of the inline message */
        inline_message_id?: String;
    }): Promise<Array_of_GameHighScore>;
    /** Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object. */
    public getUserProfilePhotos(options?: {
        /** Sequential number of the first photo to be returned. By default, all photos are returned. */
        offset?: Integer;
        /** Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100. */
        limit?: Integer;
    }): Promise<UserProfilePhotos>;
    /**
     * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group. Otherwise members may only be removed by the group's creator or by the member that added them.
     */
    public kickChatMember(options: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever */
        until_date?: Date;
    }): Promise<True>;
    /** Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns *True* on success. */
    public promoteChatMember(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Pass True, if the administrator can change chat title, photo and other settings */
        can_change_info?: Boolean;
        /** Pass True, if the administrator can create channel posts, channels only */
        can_post_messages?: Boolean;
        /** Pass True, if the administrator can edit messages of other users and can pin messages, channels only */
        can_edit_messages?: Boolean;
        /** Pass True, if the administrator can delete messages of other users */
        can_delete_messages?: Boolean;
        /** Pass True, if the administrator can invite new users to the chat */
        can_invite_users?: Boolean;
        /** Pass True, if the administrator can restrict, ban or unban chat members */
        can_restrict_members?: Boolean;
        /** Pass True, if the administrator can pin messages, supergroups only */
        can_pin_messages?: Boolean;
        /** Pass True, if the administrator can add new administrators with a subset of his own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him) */
        can_promote_members?: Boolean;
    }): Promise<True>;
    /** Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all boolean parameters to lift restrictions from a user. Returns *True* on success. */
    public restrictChatMember(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** New user permissions */
        permissions: ChatPermissions;
        /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
        until_date?: Date;
    }): Promise<True>;
    /** Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*. */
    public setGameScore(options: {
        /** New score, must be non-negative */
        score: Integer;
        /** Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: Boolean;
        /** Pass True, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: Boolean;
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat */
        chat_id: Integer;
        /** Required if *inline_message_id* is not specified. Identifier of the sent message */
        message_id: Integer;
    }): Promise<Message>;
    /** Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*. */
    public setGameScore(options: {
        /** New score, must be non-negative */
        score: Integer;
        /** Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: Boolean;
        /** Pass True, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: Boolean;
        /** Identifier of the inline message */
        inline_message_id: String;
    }): Promise<True>;
    /**
     * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.
     *
     * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
     */
    public setPassportDataErrors(options: {
        /** A JSON-serialized array describing the errors */
        errors: Array_of_PassportElementError;
    }): Promise<True>;
    /** Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. Returns *True* on success. */
    public unbanChatMember(options: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`) */
        chat_id: Integer_or_String;
    }): Promise<True>;
    /** Use this method to upload a .png file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success. */
    public uploadStickerFile(options: {
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile;
    }): Promise<File>;
}

export interface IUser {
    /** Unique identifier for this user or bot */
    id: Integer;
    /** True, if this user is a bot */
    is_bot: Boolean;
    /** User's or bot's first name */
    first_name: String;
    /** User's or bot's last name */
    last_name?: String;
    /** User's or bot's username */
    username?: String;
    /** <a href="https://en.wikipedia.org/wiki/IETF_language_tag">IETF language tag</a> of the user's language */
    language_code?: String;
}
