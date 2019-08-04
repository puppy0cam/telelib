import Integer from "./Integer";
import String from "./String";
import ChatPhoto from "./ChatPhoto";
import Message from "./Message";
import Boolean from "./Boolean";
import Integer_or_String from "./Integer or String";
import Array_of_ChatMember from "./Array of ChatMember";
import Array_of_GameHighScore from "./Array of GameHighScore";
import True from "./True";
import ChatPermissions from "./ChatPermissions";
import InputFile_or_String from "./InputFile or String";
import InlineKeyboardMarkup_or_ReplyKeyboardMarkup_or_ReplyKeyboardRemove_or_ForceReply from "./InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply";
import FloatNumber from "./Float number";
import Array_of_InputMediaPhoto_and_InputMediaVideo from "./Array of InputMediaPhoto and InputMediaVideo";
import Array_of_LabeledPrice from "./Array of LabeledPrice";
import Array_of_Message from "./Array of Message";
import Array_of_String from "./Array of String";
import InputFile from "./InputFile";
import Poll from "./Poll";
import InlineKeyboardMarkup from "./InlineKeyboardMarkup";
import ChatMember from "./ChatMember";
import InputMedia from "./InputMedia";

/** This object represents a chat. */
export default class Chat implements IChat {
    constructor(data: IChat | Chat, token?: string);
    public id: Integer;
    public type: String;
    public title?: String;
    public username?: String;
    public first_name?: String;
    public last_name?: String;
    public photo?: ChatPhoto;
    public description?: String;
    public invite_link?: String;
    public pinned_message?: Message;
    public sticker_set_name?: String;
    public can_set_sticker_set?: Boolean;
    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
     */
    public deleteChatPhoto(): Promise<True>;
    /** Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can_set_sticker_set* optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns *True* on success. */
    public deleteChatStickerSet(): Promise<True>;
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
        /** Identifier of the message to delete */
        message_id: Integer;
    }): Promise<True>;
    /** Use this method to edit captions of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageCaption(options: {
        /** Identifier of the message to edit */
        message_id: Integer;
        /** New caption of the message */
        caption?: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: String;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /** Use this method to edit live location messages. A location can be edited until its *live_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api#stopmessagelivelocation). On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise True is returned. */
    public editMessageLiveLocation(options: {
        /** Identifier of the message with live location to stop */
        message_id: Integer;
        /** Latitude of new location */
        latitude: FloatNumber;
        /** Longitude of new location */
        longitude: FloatNumber;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /** Use this method to edit animation, audio, document, photo, or video messages. If a message is a part of a message album, then it can be edited only to a photo or a video. Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded. Use previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageMedia(options: {
        /** Identifier of the message to edit */
        message_id: Integer;
        /** A JSON-serialized object for a new media content of the message */
        media: InputMedia;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /** Use this method to edit only the reply markup of messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageReplyMarkup(options: {
        /** Identifier of the message to edit */
        message_id: Integer;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /** Use this method to edit text and [game](https://core.telegram.org/bots/api#games) messages. On success, if edited message is sent by the bot, the edited [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public editMessageText(options: {
        /** Identifier of the message to edit */
        message_id: Integer;
        /** New text of the message */
        text: String;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: String;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: Boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /**
     * Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.
     * >Note: Each administrator in a chat generates their own invite links. Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) – after this the link will become available to the bot via the [getChat](https://core.telegram.org/bots/api#getchat) method. If your bot needs to generate a new invite link replacing its previous one, use [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink) again.
     */
    public exportChatInviteLink(): Promise<String>;
    /** Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public forwardMessage(options: {
        /** Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`) */
        from_chat_id: Integer_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** Message identifier in the chat specified in *from_chat_id* */
        message_id: Integer;
    }): Promise<Message>;
    /** Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public forwardMessage(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: Integer_or_String;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** Message identifier in the chat specified in *from_chat_id* */
        message_id: Integer;
    }): Promise<Message>;
    /** Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api#chat) object on success. */
    public getChat(): Promise<Chat>;
    /** Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned. */
    public getChatAdministrators(): Promise<Array_of_ChatMember>;
    /** Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object on success. */
    public getChatMember(options: {
        /** Unique identifier of the target user */
        user_id: Integer;
    }): Promise<ChatMember>;
    /** Use this method to get the number of members in a chat. Returns *Int* on success. */
    public getChatMembersCount(): Promise<Integer>;
    /**
     * Use this method to get data for high score tables. Will return the score of the specified user and several of his neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api#gamehighscore) objects.
     * >This method will currently return scores for the target user, plus two of his closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
     */
    public getGameHighScores(options: {
        /** Target user id */
        user_id: Integer;
        /** Identifier of the sent message */
        message_id: Integer;
    }): Promise<Array_of_GameHighScore>;
    /**
     * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group. Otherwise members may only be removed by the group's creator or by the member that added them.
     */
    public kickChatMember(options: {
        /** Unique identifier of the target user */
        user_id: Integer;
        /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever */
        until_date?: Date | number;
    }): Promise<True>;
    /** Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success. */
    public leaveChat(): Promise<True>;
    /** Use this method to pin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns *True* on success. */
    public pinChatMessage(options: {
        /** Identifier of a message to pin */
        message_id: Integer;
        /** Pass *True*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels. */
        disable_notification?: Boolean;
    }): Promise<True>;
    /** Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns *True* on success. */
    public promoteChatMember(options: {
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
        /** Unique identifier of the target user */
        user_id: Integer;
        /** New user permissions */
        permissions: ChatPermissions;
        /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
        until_date?: Date | number;
    }): Promise<True>;
    /** Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future. */
    public sendAnimation(options: {
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
        /** Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api#sendmessage), *upload_photo* for [photos](https://core.telegram.org/bots/api#sendphoto), *record_video* or *upload_video* for [videos](https://core.telegram.org/bots/api#sendvideo), *record_audio* or *upload_audio* for [audio files](https://core.telegram.org/bots/api#sendaudio), *upload_document* for [general files](https://core.telegram.org/bots/api#senddocument), *find_location* for [location data](https://core.telegram.org/bots/api#sendlocation), *record_video_note* or *upload_video_note* for [video notes](https://core.telegram.org/bots/api#sendvideonote). */
        action: String;
    }): Promise<True>;
    /** Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendContact(options: {
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
        /** Latitude of the location */
        latitude: FloatNumber;
        /** Longitude of the location */
        longitude: FloatNumber;
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
        /** A JSON-serialized array describing photos and videos to be sent, must include 2–10 items */
        media: Array_of_InputMediaPhoto_and_InputMediaVideo;
        /** Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: Boolean;
        /** If the messages are a reply, ID of the original message */
        reply_to_message_id?: Integer;
    }): Promise<Array_of_Message>;
    /** Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public sendMessage(options: {
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
        /** Latitude of the venue */
        latitude: FloatNumber;
        /** Longitude of the venue */
        longitude: FloatNumber;
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
        /** New chat description, 0-255 characters */
        description?: String;
    }): Promise<True>;
    /** Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can_restrict_members* admin rights. Returns *True* on success. */
    public setChatPermissions(options: {
        /** New default chat permissions */
        permissions: ChatPermissions;
    }): Promise<True>;
    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
     */
    public setChatPhoto(options: {
        /** New chat photo, uploaded using multipart/form-data */
        photo: InputFile;
    }): Promise<True>;
    /** Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can_set_sticker_set* optionally returned in [getChat](https://core.telegram.org/bots/api#getchat) requests to check if the bot can use this method. Returns *True* on success. */
    public setChatStickerSet(options: {
        /** Name of the sticker set to be set as the group sticker set */
        sticker_set_name: String;
    }): Promise<True>;
    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
     * >Note: In regular groups (non-supergroups), this method will only work if the ‘All Members Are Admins’ setting is off in the target group.
     */
    public setChatTitle(options: {
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
        /** Identifier of the sent message */
        message_id: Integer;
    }): Promise<Message>;
    /** Use this method to stop updating a live location message before *live_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api#message) is returned, otherwise *True* is returned. */
    public stopMessageLiveLocation(options: {
        /** Identifier of the message with live location to stop */
        message_id: Integer;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Message>;
    /** Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api#poll) with the final results is returned. */
    public stopPoll(options: {
        /** Identifier of the original message with the poll */
        message_id: Integer;
        /** A JSON-serialized object for a new message [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }): Promise<Poll>;
    /** Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. Returns *True* on success. */
    public unbanChatMember(options: {
        /** Unique identifier of the target user */
        user_id: Integer;
    }): Promise<True>;
    /** Use this method to unpin a message in a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the ‘can_pin_messages’ admin right in the supergroup or ‘can_edit_messages’ admin right in the channel. Returns *True* on success. */
    public unpinChatMessage(): Promise<True>;
}

export interface IChat {
    /** Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
    id: Integer;
    /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: String;
    /** Title, for supergroups, channels and group chats */
    title?: String;
    /** Username, for private chats, supergroups and channels if available */
    username?: String;
    /** First name of the other party in a private chat */
    first_name?: String;
    /** Last name of the other party in a private chat */
    last_name?: String;
    /** Chat photo. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    photo?: ChatPhoto;
    /** Description, for supergroups and channel chats. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    description?: String;
    /** Chat invite link, for supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink). Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    invite_link?: String;
    /** Pinned message, for groups, supergroups and channels. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    pinned_message?: Message;
    /** For supergroups, name of group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    sticker_set_name?: String;
    /** True, if the bot can change the group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    can_set_sticker_set?: Boolean;
}
