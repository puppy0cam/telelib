import Array_of_ChatMember from "./Array of ChatMember";
import Array_of_GameHighScore from "./Array of GameHighScore";
import Array_of_InlineQueryResult from "./Array of InlineQueryResult";
import Array_of_InputMediaPhoto_and_InputMediaVideo from "./Array of InputMediaPhoto and InputMediaVideo";
import Array_of_LabeledPrice from "./Array of LabeledPrice";
import Array_of_Message from "./Array of Message";
import Array_of_PassportElementError from "./Array of PassportElementError";
import Array_of_ShippingOption from "./Array of ShippingOption";
import Array_of_String from "./Array of String";
import Array_of_Update from "./Array of Update";
import Boolean from "./Boolean";
import Chat from "./Chat";
import ChatMember from "./ChatMember";
import ChatPermissions from "./ChatPermissions";
import File from "./File";
import Float_number from "./Float number";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply from "./InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply";
import InputFile from "./InputFile";
import InputFile_or_String from "./InputFile or String";
import InputMedia from "./InputMedia";
import Integer from "./Integer";
import Integer_or_String from "./Integer or String";
import MaskPosition from "./MaskPosition";
import Message from "./Message";
import Message_or_True from "./Message or True";
import Poll from "./Poll";
import StickerSet from "./StickerSet";
import String from "./String";
import True from "./True";
import User from "./User";
import UserProfilePhotos from "./UserProfilePhotos";
import WebhookInfo from "./WebhookInfo";

export default class Bot {
    public constructor(token?: string);
    /** Use this method to add a new sticker to a set created by the bot. Returns *True* on success. */
    public addStickerToSet(options: {
        /** User identifier of sticker set owner */
        user_id: Integer;
        /** Sticker set name */
        name: String;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a *file_id* as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile_or_String;
        /** One or more emoji corresponding to the sticker */
        emojis: String;
        /** A JSON-serialized object for position where the mask should be placed on faces */
        mask_position?: MaskPosition;
    }): Promise<True>;
    /**
     * Use this method to send answers to callback queries sent from [inline keyboards](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.
     * >Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
     */
    public answerCallbackQuery(options: {
        /** Unique identifier for the query to be answered */
        callback_query_id: String;
        /** Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters */
        text?: String;
        /** If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*. */
        show_alert?: Boolean;
        /**
         * URL that will be opened by the user's client. If you have created a [Game](https://core.telegram.org/bots/api#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game – note that this will only work if the query comes from a [*callback_game*](https://core.telegram.org/bots/api#inlinekeyboardbutton) button.
         *
         * Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
         */
        url?: String;
        /** The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. */
        cache_time?: Integer;
    }): Promise<True>;
    /**
     * Use this method to send answers to an inline query. On success, *True* is returned.
     *
     * No more than **50** results per query are allowed.
     */
    public answerInlineQuery(options: {
        /** Unique identifier for the answered query */
        inline_query_id: String;
        /** A JSON-serialized array of results for the inline query */
        results: Array_of_InlineQueryResult;
        /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
        cache_time?: Integer;
        /** Pass *True*, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query */
        is_personal?: Boolean;
        /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don‘t support pagination. Offset length can’t exceed 64 bytes. */
        next_offset?: String;
        /** If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter *switch_pm_parameter* */
        switch_pm_text?: String;
        /**
         * [Deep-linking](https://core.telegram.org/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only `A-Z`, `a-z`, `0-9`, `_` and `-` are allowed.
         *
         * *Example:* An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a ‘Connect your YouTube account’ button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [switch_inline](https://core.telegram.org/bots/api#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
         */
        switch_pm_parameter?: String;
    }): Promise<True>;
    /** Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api#update) with the field *pre_checkout_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent. */
    public answerPreCheckoutQuery(options: {
        /** Unique identifier for the query to be answered */
        pre_checkout_query: String;
        /** Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. */
        ok: Boolean;
        /** Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
        error_message?: String;
    }): Promise<True>;
    /** If you sent an invoice requesting a shipping address and the parameter *is_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api#update) with a *shipping_query* field to the bot. Use this method to reply to shipping queries. On success, *True* is returned. */
    public answerShippingQuery(options: {
        /** Unique identifier for the query to be answered */
        shipping_query_id: String;
        /** Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) */
        ok: Boolean;
        /** Required if *ok* is True. A JSON-serialized array of available shipping options. */
        shipping_options?: Array_of_ShippingOption;
        /** Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. */
        error_message?: String;
    }): Promise<True>;
    /** Use this method to create new sticker set owned by a user. The bot will be able to edit the created sticker set. Returns *True* on success. */
    public createNewStickerSet(options: {
        /** User identifier of created sticker set owner */
        user_id: Integer;
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
    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
     */
    public deleteChatPhoto(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<True>;
    /** Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can_set_sticker_set* optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns *True* on success. */
    public deleteChatStickerSet(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<True>;
    /**
     * Use this method to delete a message, including service messages, with the following limitations:
     * - A message can only be deleted if it was sent less than 48 hours ago.
     * - Bots can delete outgoing messages in private chats, groups, and supergroups.
     * - Bots can delete incoming messages in private chats.
     * - Bots granted *can_post_messages* permissions can delete outgoing messages in channels.
     * - If the bot is an administrator of a group, it can delete any message there.
     * - If the bot has *can_delete_messages* permission in a supergroup or a channel, it can delete any message there.
     * Returns *True* on success.
     */
    public deleteMessage(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Identifier of the message to delete */
        message_id: Integer;
    }): Promise<True>;
    /** Use this method to delete a sticker from a set created by the bot. Returns *True* on success. */
    public deleteStickerFromSet(options: {
        /** File identifier of the sticker */
        sticker: String;
    }): Promise<True>;
    /** Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api#getupdates). Returns True on success. Requires no parameters. */
    public deleteWebhook(): Promise<True>;
    /** Use this method to edit captions of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageCaption(options?: {
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id?: Integer_or_String;
        /** Required if *inline_message_id* is not specified. Identifier of the message to edit */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
        /** New caption of the message */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit live location messages. A location can be edited until its *live_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation). On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. */
    public editMessageLiveLocation(options: {
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id?: Integer_or_String;
        /** Required if *inline_message_id* is not specified. Identifier of the message with live location to stop */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
        /** Latitude of new location */
        latitude: Float_number;
        /** Longitude of new location */
        longitude: Float_number;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit animation, audio, document, photo, or video messages. If a message is a part of a message album, then it can be edited only to a photo or a video. Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded. Use previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageMedia(options: {
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id?: Integer_or_String;
        /** Required if *inline_message_id* is not specified. Identifier of the message to edit */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
        /** A JSON-serialized object for a new media content of the message */
        media: InputMedia;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit only the reply markup of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageReplyMarkup(options?: {
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id?: Integer_or_String;
        /** Required if *inline_message_id* is not specified. Identifier of the message to edit */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to edit text and [game](https://core.telegram.org/bots/api#games) messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageText(options: {
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id?: Integer_or_String;
        /** Required if *inline_message_id* is not specified. Identifier of the message to edit */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
        /** New text of the message */
        text: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: String;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: Boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /**
     * Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.
     * >Note: Each administrator in a chat generates their own invite links. Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) – after this the link will become available to the bot via the [getChat](https://core.telegram.org/bots/api#getchat) method. If your bot needs to generate a new invite link replacing its previous one, use [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) again.
     */
    public exportChatInviteLink(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
    }): Promise<String>;
    /** Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public forwardMessage(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`) */
        from_chat_id: Integer_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** Message identifier in the chat specified in *from_chat_id* */
        message_id: Integer;
    }): Promise<Message>;
    /** Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api#chat) object on success. */
    public getChat(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<Chat>;
    /** Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned. */
    public getChatAdministrators(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<Array_of_ChatMember>;
    /** Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object on success. */
    public getChatMember(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** Unique identifier of the target user */
        user_id: Integer;
    }): Promise<ChatMember>;
    /** Use this method to get the number of members in a chat. Returns *Int* on success. */
    public getChatMembersCount(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<Integer>;
    /**
     * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api#getfile) again.
     *
     * **Note:** This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.
     */
    public getFile(options: {
        /** File identifier to get info about */
        file_id: String;
    }): Promise<File>;
    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api#gamehighscore) objects.
     * >This method will currently return scores for the target user, plus two of his closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
     */
    public getGameHighScores(options: {
        /** Target user id */
        user_id: Integer;
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat */
        chat_id?: Integer;
        /** Required if *inline_message_id* is not specified. Identifier of the sent message */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
    }): Promise<Array_of_GameHighScore>;
    /** A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api#user) object. */
    public getMe(): Promise<User>;
    /** Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned. */
    public getStickerSet(options: {
        /** Name of the sticker set */
        name: String;
    }): Promise<StickerSet>;
    /**
     * Use this method to receive incoming updates using long polling ([wiki](http://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api#update) objects is returned.
     * >**Notes**
     * 1. This method will not work if an outgoing webhook is set up.
     * 2. In order to avoid getting duplicate updates, recalculate *offset* after each server response.
     */
    public getUpdates(options?: {
        /** Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as [getUpdates](https://core.telegram.org/bots/api#getupdates) is called with an *offset* higher than its *update_id*. The negative offset can be specified to retrieve updates starting from *-offset* update from the end of the updates queue. All previous updates will forgotten. */
        offset?: Integer;
        /** Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100. */
        limit?: Integer;
        /** Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. */
        timeout?: Integer;
        /**
         * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
         *
         * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
         */
        allowed_updates?: Array_of_String;
    }): Promise<Array_of_Update>;
    /** Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object. */
    public getUserProfilePhotos(options: {
        /** Unique identifier of the target user */
        user_id: Integer;
        /** Sequential number of the first photo to be returned. By default, all photos are returned. */
        offset?: Integer;
        /** Limits the number of photos to be retrieved. Values between 1—100 are accepted. Defaults to 100. */
        limit?: Integer;
    }): Promise<UserProfilePhotos>;
    /** Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api#getupdates), will return an object with the *url* field empty. */
    public getWebhookInfo(): Promise<WebhookInfo>;
    /**
     * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group. Otherwise members may only be removed by the group's creator or by the member that added them.
     */
    public kickChatMember(options: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Unique identifier of the target user */
        user_id: Integer;
        /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever */
        until_date?: Date;
    }): Promise<True>;
    /** Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success. */
    public leaveChat(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<True>;
    /** Use this method to pin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns *True* on success. */
    public pinChatMessage(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** Identifier of a message to pin */
        message_id: Integer;
        /** Pass *True*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels. */
        disable_notification?: Boolean;
    }): Promise<True>;
    /** Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns *True* on success. */
    public promoteChatMember(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Unique identifier of the target user */
        user_id: Integer;
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
        /** Unique identifier of the target user */
        user_id: Integer;
        /** New user permissions */
        permissions: ChatPermissions;
        /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
        until_date?: Date;
    }): Promise<True>;
    /** Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future. */
    public sendAnimation(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        animation: InputFile_or_String;
        /** Duration of sent animation in seconds */
        duration?: Integer;
        /** Animation width */
        width?: Integer;
        /** Animation height */
        height?: Integer;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile_or_String;
        /** Voice message caption, 0-1024 characters */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /**
     * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .mp3 format. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
     *
     * For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api#sendvoice) method instead.
     */
    public sendAudio(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        audio: InputFile_or_String;
        /** Voice message caption, 0-1024 characters */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** Duration of the audio in seconds */
        duration?: Integer;
        /** Performer */
        performer?: String;
        /** Track name */
        title?: String;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /**
     * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns *True* on success.
     * >Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api#sendchataction) with *action = upload_photo*. The user will see a “sending photo” status for the bot.
     *
     * We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.
     */
    public sendChatAction(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api#sendmessage), *upload_photo* for [photos](https://core.telegram.org/bots/api#sendphoto), *record_video* or *upload_video* for [videos](https://core.telegram.org/bots/api#sendvideo), *record_audio* or *upload_audio* for [audio files](https://core.telegram.org/bots/api#sendaudio), *upload_document* for [general files](https://core.telegram.org/bots/api#senddocument), *find_location* for [location data](https://core.telegram.org/bots/api#sendlocation), *record_video_note* or *upload_video_note* for [video notes](https://core.telegram.org/bots/api#sendvideonote). */
        action: String;
    }): Promise<True>;
    /** Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendContact(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Contact's phone number */
        phone_number: String;
        /** Contact's first name */
        first_name: String;
        /** Contact's last name */
        last_name?: String;
        /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes */
        vcard?: String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future. */
    public sendDocument(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        document: InputFile_or_String;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile_or_String;
        /** Voice message caption, 0-1024 characters */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendGame(options: {
        /** Unique identifier for the target chat */
        chat_id: Integer;
        /** Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather). */
        game_short_name: String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one ‘Play game_title’ button will be shown. If not empty, the first button must launch the game. */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /** Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendInvoice(options: {
        /** Unique identifier for the target private chat */
        chat_id: Integer;
        /** Product name, 1-32 characters */
        title: String;
        /** Product description, 1-255 characters */
        description: String;
        /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
        payload: String;
        /** Payments provider token, obtained via [Botfather](https://t.me/botfather) */
        provider_token: String;
        /** Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter */
        start_parameter: String;
        /** Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies) */
        currency: String;
        /** Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
        prices: Array_of_LabeledPrice;
        /** JSON-encoded data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
        provider_data?: String;
        /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
        photo_url?: String;
        /** Photo size */
        photo_size?: Integer;
        /** Photo width */
        photo_width?: Integer;
        /** Photo height */
        photo_height?: Integer;
        /** Pass *True*, if you require the user's full name to complete the order */
        need_name?: Boolean;
        /** Pass *True*, if you require the user's phone number to complete the order */
        need_phone_number?: Boolean;
        /** Pass *True*, if you require the user's email address to complete the order */
        need_email?: Boolean;
        /** Pass *True*, if you require the user's shipping address to complete the order */
        need_shipping_address?: Boolean;
        /** Pass *True*, if user's phone number should be sent to provider */
        send_phone_number_to_provider?: Boolean;
        /** Pass *True*, if user's email address should be sent to provider */
        send_email_to_provider?: Boolean;
        /** Pass *True*, if the final price depends on the shipping method */
        is_flexible?: Boolean;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one 'Pay `total price`' button will be shown. If not empty, the first button must be a Pay button. */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /** Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendLocation(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Latitude of the location */
        latitude: Float_number;
        /** Longitude of the location */
        longitude: Float_number;
        /** Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400. */
        live_period?: Integer;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send a group of photos or videos as an album. On success, an array of the sent [Messages](https://core.telegram.org/bots/api#message) is returned. */
    public sendMediaGroup(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** A JSON-serialized array describing photos and videos to be sent, must include 2–10 items */
        media: Array_of_InputMediaPhoto_and_InputMediaVideo;
        /** Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the messages are a reply, ID of the original message */
        reply_to_message_id?: Integer;
    }): Promise<Array_of_Message>;
    /** Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendMessage(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Text of the message to be sent */
        text: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: String;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: Boolean;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendPhoto(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        photo: InputFile_or_String;
        /** Photo caption (may also be used when resending photos by *file_id*), 0-1024 characters */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send a native poll. A native poll can't be sent to a private chat. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendPoll(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`). A native poll can't be sent to a private chat. */
        chat_id: Message;
        /** Poll question, 1-255 characters */
        question: String;
        /** List of answer options, 2-10 strings 1-100 characters each */
        options: Array_of_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send .webp stickers. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendSticker(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .webp file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        sticker: InputFile_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendVenue(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Latitude of the venue */
        latitude: Float_number;
        /** Longitude of the venue */
        longitude: Float_number;
        /** Name of the venue */
        title: String;
        /** Address of the venue */
        address: String;
        /** Foursquare identifier of the venue */
        foursquare_id?: String;
        /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
        foursquare_type?: String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api#document)). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future. */
    public sendVideo(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        video: InputFile_or_String;
        /** Duration of sent animation in seconds */
        duration?: Integer;
        /** Animation width */
        width?: Integer;
        /** Animation height */
        height?: Integer;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile_or_String;
        /** Voice message caption, 0-1024 characters */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** Pass *True*, if the uploaded video is suitable for streaming */
        supports_streaming?: Boolean;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendVideoNote(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files). Sending video notes by a URL is currently unsupported */
        video_note: InputFile_or_String;
        /** Duration of sent video in seconds */
        duration?: Integer;
        /** Video width and height, i.e. diameter of the video message */
        length?: Integer;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .ogg file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api#audio) or [Document](https://core.telegram.org/bots/api#document)). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future. */
    public sendVoice(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        voice: InputFile_or_String;
        /** Voice message caption, 0-1024 characters */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** Duration of the voice message in seconds */
        duration?: Integer;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: Integer;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply;
    }): Promise<Message>;
    /** Use this method to change the description of a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success. */
    public setChatDescription(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** New chat description, 0-255 characters */
        description?: String;
    }): Promise<True>;
    /** Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can_restrict_members* admin rights. Returns *True* on success. */
    public setChatPermissions(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** New default chat permissions */
        permissions: ChatPermissions;
    }): Promise<True>;
    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
     */
    public setChatPhoto(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** New chat photo, uploaded using multipart/form-data */
        photo: InputFile;
    }): Promise<True>;
    /** Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can_set_sticker_set* optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns *True* on success. */
    public setChatStickerSet(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** Name of the sticker set to be set as the group sticker set */
        sticker_set_name: String;
    }): Promise<True>;
    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
     */
    public setChatTitle(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
        /** New chat title, 1-255 characters */
        title: String;
    }): Promise<True>;
    /** Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*. */
    public setGameScore(options: {
        /** User identifier */
        user_id: Integer;
        /** New score, must be non-negative */
        score: Integer;
        /** Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: Boolean;
        /** Pass True, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: Boolean;
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat */
        chat_id?: Integer;
        /** Required if *inline_message_id* is not specified. Identifier of the sent message */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
    }): Promise<Message_or_True>;
    /**
     * Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.
     *
     * Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
     */
    public setPassportDataErrors(options: {
        /** User identifier */
        user_id: Integer;
        /** A JSON-serialized array describing the errors */
        errors: Array_of_PassportElementError;
    }): Promise<True>;
    /** Use this method to move a sticker in a set created by the bot to a specific position . Returns *True* on success. */
    public setStickerPositionInSet(options: {
        /** File identifier of the sticker */
        sticker: String;
        /** New sticker position in the set, zero-based */
        position: Integer;
    }): Promise<True>;
    /**
     * Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized [Update](https://core.telegram.org/bots/api#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns *True* on success.
     *
     * If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot‘s token, you can be pretty sure it’s us.
     * >**Notes**
     * 1. You will not be able to receive updates using [getUpdates](https://core.telegram.org/bots/api#getupdates) for as long as an outgoing webhook is set up.
     * 2. To use a self-signed certificate, you need to upload your [public key certificate](https://core.telegram.org/bots/self-signed) using *certificate* parameter. Please upload as InputFile, sending a String will not work.
     * 3. Ports currently supported for *Webhooks*: **443, 80, 88, 8443**.
     *
     * **NEW!** If you're having any trouble setting up webhooks, please check out this [amazing guide to Webhooks](https://core.telegram.org/bots/webhooks).
     */
    public setWebhook(options: {
        /** HTTPS url to send updates to. Use an empty string to remove webhook integration */
        url: String;
        /** Upload your public key certificate so that the root certificate in use can be checked. See our [self-signed guide](https://core.telegram.org/bots/self-signed) for details. */
        certificate?: InputFile;
        /** Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot‘s server, and higher values to increase your bot’s throughput. */
        max_connections?: Integer;
        /**
         * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See [Update](https://core.telegram.org/bots/api#update) for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
         *
         * Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
         */
        allowed_updates?: Array_of_String;
    }): Promise<True>;
    /** Use this method to stop updating a live location message before *live_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public stopMessageLiveLocation(options?: {
        /** Required if *inline_message_id* is not specified. Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id?: Integer_or_String;
        /** Required if *inline_message_id* is not specified. Identifier of the message with live location to stop */
        message_id?: Integer;
        /** Required if *chat_id* and *message_id* are not specified. Identifier of the inline message */
        inline_message_id?: String;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message_or_True>;
    /** Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api#poll) with the final results is returned. */
    public stopPoll(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Identifier of the original message with the poll */
        message_id: Integer;
        /** A JSON-serialized object for a new message [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Poll>;
    /** Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. Returns *True* on success. */
    public unbanChatMember(options: {
        /** Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`) */
        chat_id: Integer_or_String;
        /** Unique identifier of the target user */
        user_id: Integer;
    }): Promise<True>;
    /** Use this method to unpin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns *True* on success. */
    public unpinChatMessage(options: {
        /** Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`) */
        chat_id: Integer_or_String;
    }): Promise<True>;
    /** Use this method to upload a .png file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success. */
    public uploadStickerFile(options: {
        /** User identifier of sticker file owner */
        user_id: Integer;
        /** **Png** image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        png_sticker: InputFile;
    }): Promise<File>;
}
