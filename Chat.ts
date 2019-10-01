import { Bot, ChatMember, ChatPhoto, GameHighScore, IChatPermissions, IChatPhoto, IForceReply, IInlineKeyboardMarkup, IInputMedia, IInputMediaPhoto, IInputMediaVideo, ILabeledPrice, IMessage, InputFile, IReplyKeyboardMarkup, IReplyKeyboardRemove, Message, Poll } from "./_internals.js";

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
        return (content: Chat, botId?: number) => {
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
    return (content: Chat) => {
        "use strict";
        return content;
    };
})();

/** This object represents a chat. */
export class Chat extends Bot implements IChat {
    constructor(data: IChat | Chat, token?: string | Bot) {
        "use strict";
        super(data, token);
        const cachedValue = cacheHandler(this, this._getBotId());
        const {
            photo,
            pinned_message,
        } = data;
        if (photo) {
            cachedValue.photo = new ChatPhoto(photo, this);
        }
        if (pinned_message) {
            cachedValue.pinned_message = new Message(pinned_message, this);
        }
        return cachedValue;
    }
    public id!: number;
    public type!: string;
    public title?: string;
    public username?: string;
    public first_name?: string;
    public last_name?: string;
    public photo?: ChatPhoto;
    public description?: string;
    public invite_link?: string;
    public pinned_message?: Message;
    public sticker_set_name?: string;
    public can_set_sticker_set?: boolean;
    public deleteChatPhoto(options?: {}, timeout?: number): Promise<true> {
        "use strict";
        return super.deleteChatPhoto({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public deleteChatStickerSet(options?: {}, timeout?: number): Promise<true> {
        "use strict";
        return super.deleteChatStickerSet({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public deleteMessage(options: {
        /** Identifier of the message to delete */
        message_id: number;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.deleteMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public editMessageCaption(options: {
        /** Identifier of the message to edit */
        message_id: number;
        /** New caption of the message */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.editMessageCaption({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public editMessageLiveLocation(options: {
        /** Identifier of the message with live location to stop */
        message_id: number;
        /** Latitude of new location */
        latitude: number;
        /** Longitude of new location */
        longitude: number;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.editMessageLiveLocation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public editMessageMedia(options: {
        /** Identifier of the message to edit */
        message_id: number;
        /** A JSON-serialized object for a new media content of the message */
        media: IInputMedia;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.editMessageMedia({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public editMessageReplyMarkup(options: {
        /** Identifier of the message to edit */
        message_id: number;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.editMessageReplyMarkup({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public editMessageText(options: {
        /** Identifier of the message to edit */
        message_id: number;
        /** New text of the message */
        text: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: string;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.editMessageText({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public exportChatInviteLink(options?: {}, timeout?: number): Promise<string> {
        "use strict";
        return super.exportChatInviteLink({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    /** Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public forwardMessage(options: {
        /** Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`) */
        from_chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** Message identifier in the chat specified in *from_chat_id* */
        message_id: number;
    }, timeout?: number): Promise<Message>;
    /** Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api#message) is returned. */
    public forwardMessage(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** Message identifier in the chat specified in *from_chat_id* */
        message_id: number;
    }, timeout?: number): Promise<Message>;
    public forwardMessage(options: any, timeout?: number) {
        "use strict";
        return super.forwardMessage({
            chat_id: this.id,
            from_chat_id: this.id,
            ...options,
        }, timeout);
    }
    public getChat(options?: {}, timeout?: number): Promise<Chat> {
        "use strict";
        return super.getChat({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public getChatAdministrators(options?: {}, timeout?: number): Promise<ChatMember[]> {
        "use strict";
        return super.getChatAdministrators({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public getChatMember(options: {
        /** Unique identifier of the target user */
        user_id: number;
    }, timeout?: number): Promise<ChatMember> {
        "use strict";
        return super.getChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public getChatMembersCount(options?: {}, timeout?: number): Promise<number> {
        "use strict";
        return super.getChatMembersCount({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public getGameHighScores(options: {
        /** Target user id */
        user_id: number;
        /** Identifier of the sent message */
        message_id: number;
    }, timeout?: number): Promise<GameHighScore[]> {
        "use strict";
        return super.getGameHighScores({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public kickChatMember(options: {
        /** Unique identifier of the target user */
        user_id: number;
        /** Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever */
        until_date?: Date | number;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.kickeChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public leaveChat(options?: {}, timeout?: number): Promise<true> {
        "use strict";
        return super.leaveChat({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public pinChatMessage(options: {
        /** Identifier of a message to pin */
        message_id: number;
        /** Pass *true*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels. */
        disable_notification?: boolean;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.pinChatMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public promoteChatMember(options: {
        /** Unique identifier of the target user */
        user_id: number;
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
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public restrictChatMember(options: {
        /** Unique identifier of the target user */
        user_id: number;
        /** New user permissions */
        permissions: IChatPermissions;
        /** Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever */
        until_date?: Date | number;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.restrictChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendAnimation(options: {
        /** Animation to send. Pass a file_id as string to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        animation: InputFile | string;
        /** Duration of sent animation in seconds */
        duration?: number;
        /** Animation width */
        width?: number;
        /** Animation height */
        height?: number;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile | string;
        /** Voice message caption, 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendAnimation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendAudio(options: {
        /** Audio file to send. Pass a file_id as string to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        audio: InputFile | string;
        /** Voice message caption, 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Duration of the audio in seconds */
        duration?: number;
        /** Performer */
        performer?: string;
        /** Track name */
        title?: string;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendAudio({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendChatAction(options: {
        /** Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api#sendmessage), *upload_photo* for [photos](https://core.telegram.org/bots/api#sendphoto), *record_video* or *upload_video* for [videos](https://core.telegram.org/bots/api#sendvideo), *record_audio* or *upload_audio* for [audio files](https://core.telegram.org/bots/api#sendaudio), *upload_document* for [general files](https://core.telegram.org/bots/api#senddocument), *find_location* for [location data](https://core.telegram.org/bots/api#sendlocation), *record_video_note* or *upload_video_note* for [video notes](https://core.telegram.org/bots/api#sendvideonote). */
        action: string;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.sendChatAction({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendContact(options: {
        /** Contact's phone number */
        phone_number: string;
        /** Contact's first name */
        first_name: string;
        /** Contact's last name */
        last_name?: string;
        /** Additional data about the contact in the form of a [vCard](https://en.wikipedia.org/wiki/VCard), 0-2048 bytes */
        vcard?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendContact({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendDocument(options: {
        /** File to send. Pass a file_id as string to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        document: InputFile | string;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile | string;
        /** Voice message caption, 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendDocument({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendGame(options: {
        /** Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather). */
        game_short_name: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one ‘Play game_title’ button will be shown. If not empty, the first button must launch the game. */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendGame({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendInvoice(options: {
        /** Product name, 1-32 characters */
        title: string;
        /** Product description, 1-255 characters */
        description: string;
        /** Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. */
        payload: string;
        /** Payments provider token, obtained via [Botfather](https://t.me/botfather) */
        provider_token: string;
        /** Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter */
        start_parameter: string;
        /** Three-letter ISO 4217 currency code, see [more on currencies](https://core.telegram.org/bots/payments#supported-currencies) */
        currency: string;
        /** Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) */
        prices: ILabeledPrice[];
        /** JSON-encoded data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. */
        provider_data?: string;
        /** URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. */
        photo_url?: string;
        /** Photo size */
        photo_size?: number;
        /** Photo width */
        photo_width?: number;
        /** Photo height */
        photo_height?: number;
        /** Pass *true*, if you require the user's full name to complete the order */
        need_name?: boolean;
        /** Pass *true*, if you require the user's phone number to complete the order */
        need_phone_number?: boolean;
        /** Pass *true*, if you require the user's email address to complete the order */
        need_email?: boolean;
        /** Pass *true*, if you require the user's shipping address to complete the order */
        need_shipping_address?: boolean;
        /** Pass *true*, if user's phone number should be sent to provider */
        send_phone_number_to_provider?: boolean;
        /** Pass *true*, if user's email address should be sent to provider */
        send_email_to_provider?: boolean;
        /** Pass *true*, if the final price depends on the shipping method */
        is_flexible?: boolean;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one 'Pay `total price`' button will be shown. If not empty, the first button must be a Pay button. */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendInvoice({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendLocation(options: {
        /** Latitude of the location */
        latitude: number;
        /** Longitude of the location */
        longitude: number;
        /** Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400. */
        live_period?: number;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendLocation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendMediaGroup(options: {
        /** A JSON-serialized array describing photos and videos to be sent, must include 2–10 items */
        media: Array<IInputMediaPhoto | IInputMediaVideo>;
        /** Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the messages are a reply, ID of the original message */
        reply_to_message_id?: number;
    }, timeout?: number): Promise<Message[]> {
        "use strict";
        return super.sendMediaGroup({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendMessage(options: {
        /** Text of the message to be sent */
        text: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: string;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendPhoto(options: {
        /** Photo to send. Pass a file_id as string to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        photo: InputFile | string;
        /** Photo caption (may also be used when resending photos by *file_id*), 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendPhoto({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendPoll(options: {
        /** Poll question, 1-255 characters */
        question: string;
        /** List of answer options, 2-10 strings 1-100 characters each */
        options: string[];
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendPoll({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendSticker(options: {
        /** Sticker to send. Pass a file_id as string to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a .webp file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        sticker: InputFile | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendSticker({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendVenue(options: {
        /** Latitude of the venue */
        latitude: number;
        /** Longitude of the venue */
        longitude: number;
        /** Name of the venue */
        title: string;
        /** Address of the venue */
        address: string;
        /** Foursquare identifier of the venue */
        foursquare_id?: string;
        /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
        foursquare_type?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendVenue({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendVideo(options: {
        /** Video to send. Pass a file_id as string to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        video: InputFile | string;
        /** Duration of sent animation in seconds */
        duration?: number;
        /** Animation width */
        width?: number;
        /** Animation height */
        height?: number;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile | string;
        /** Voice message caption, 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Pass *true*, if the uploaded video is suitable for streaming */
        supports_streaming?: boolean;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendVideo({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendVideoNote(options: {
        /** Video note to send. Pass a file_id as string to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files). Sending video notes by a URL is currently unsupported */
        video_note: InputFile | string;
        /** Duration of sent video in seconds */
        duration?: number;
        /** Video width and height, i.e. diameter of the video message */
        length?: number;
        /** Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can’t be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        thumb?: InputFile | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendvideoNote({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public sendVoice(options: {
        /** Audio file to send. Pass a file_id as string to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        voice: InputFile | string;
        /** Voice message caption, 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Duration of the voice message in seconds */
        duration?: number;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendVoice({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public setChatDescription(options: {
        /** New chat description, 0-255 characters */
        description?: string;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.setChatDescription({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public setChatPermissions(options: {
        /** New default chat permissions */
        permissions: IChatPermissions;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.setChatPermissions({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public setChatPhoto(options: {
        /** New chat photo, uploaded using multipart/form-data */
        photo: InputFile;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.setChatPhoto({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public setChatStickerSet(options: {
        /** Name of the sticker set to be set as the group sticker set */
        sticker_set_name: string;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.setChatStickerSet({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public setChatTitle(options: {
        /** New chat title, 1-255 characters */
        title: string;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.setChatTitle({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public setGameScore(options: {
        /** User identifier */
        user_id: number;
        /** New score, must be non-negative */
        score: number;
        /** Pass true, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: boolean;
        /** Pass true, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: boolean;
        /** Identifier of the sent message */
        message_id: number;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.setGameScore({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public stopMessageLiveLocation(options: {
        /** Identifier of the message with live location to stop */
        message_id: number;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.stopMessageLiveLocation({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public stopPoll(options: {
        /** Identifier of the original message with the poll */
        message_id: number;
        /** A JSON-serialized object for a new message [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Poll> {
        "use strict";
        return super.stopPoll({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public unbanChatMember(options: {
        /** Unique identifier of the target user */
        user_id: number;
    }, timeout?: number): Promise<true> {
        "use strict";
        return super.unbanChatMember({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
    public unpinChatMessage(options?: {}, timeout?: number): Promise<true> {
        "use strict";
        return super.unpinChatMessage({
            chat_id: this.id,
            ...options,
        }, timeout);
    }
}

/** This object represents a chat. */
export interface IChat {
    /** Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
    id: number;
    /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
    type: string;
    /** Title, for supergroups, channels and group chats */
    title?: string;
    /** Username, for private chats, supergroups and channels if available */
    username?: string;
    /** First name of the other party in a private chat */
    first_name?: string;
    /** Last name of the other party in a private chat */
    last_name?: string;
    /** Chat photo. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    photo?: IChatPhoto;
    /** Description, for supergroups and channel chats. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    description?: string;
    /** Chat invite link, for supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using [exportChatInviteLink](https://core.telegram.org/bots/api#exportchatinvitelink). Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    invite_link?: string;
    /** Pinned message, for groups, supergroups and channels. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    pinned_message?: IMessage;
    /** For supergroups, name of group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    sticker_set_name?: string;
    /** true, if the bot can change the group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api#getchat). */
    can_set_sticker_set?: boolean;
}
