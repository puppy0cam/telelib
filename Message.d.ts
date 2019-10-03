import { Animation, Audio, Bot, Chat, Contact, Document, Game, GameHighScore, IAnimation, IAudio, IChat, IContact, IDocument, IForceReply, IGame, IInlineKeyboardMarkup, IInputMedia, IInputMediaPhoto, IInputMediaVideo, IInvoice, ILabeledPrice, ILocation, IMessageEntity, InlineKeyboardMarkup, InputFile, Invoice, IPassportData, IPhotoSize, IPoll, IReplyKeyboardMarkup, IReplyKeyboardRemove, ISticker, ISuccessfulPayment, IUser, IVenue, IVideo, IVideoNote, IVoice, Location, MessageEntity, PassportData, PhotoSize, Poll, Sticker, SuccessfulPayment, User, Venue, Video, VideoNote, Voice } from "./_internals.js";
/** This object represents a message. */
export declare class Message extends Bot implements IMessage {
    constructor(data: IMessage, token?: string | Bot);
    message_id: number;
    from?: User;
    date: Date;
    chat: Chat;
    forward_from?: User;
    forward_from_chat?: Chat;
    forward_from_message_id?: number;
    forward_signature?: string;
    forward_date?: Date;
    reply_to_message?: Message;
    edit_date?: Date;
    media_group_id?: string;
    author_signature?: string;
    text?: string;
    entities?: MessageEntity[];
    caption_entities?: MessageEntity[];
    audio?: Audio;
    document?: Document;
    animation?: Animation;
    game?: Game;
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    voice?: Voice;
    video_note?: VideoNote;
    caption?: string;
    contact?: Contact;
    location?: Location;
    venue?: Venue;
    poll?: Poll;
    new_chat_members?: User[];
    left_chat_member?: User;
    new_chat_title?: string;
    new_chat_photo?: PhotoSize[];
    delete_chat_photo?: true;
    group_chat_created?: true;
    supergroup_chat_created?: true;
    channel_chat_created?: true;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: Message;
    invoice?: Invoice;
    successful_payment?: SuccessfulPayment;
    connected_website?: string;
    passport_data?: PassportData;
    reply_markup?: InlineKeyboardMarkup;
    /**
     * Will try to retrieve the text content of the message.
     * Possible sources include:
     * * `text`
     * * `caption`
     * * `game.text`
     *
     * Note: You are not guarunteed to find text in a message.
     */
    getMessageText(): string | undefined;
    /**
     * Will try to retrieve the text entity content of the message.
     * Possible sources include:
     * * `entities`
     * * `caption_entities`
     * * `game.text_entities`
     *
     * Note: You are not guarunteed to find entities in a message,
     * even if there is text in the message if there are no entities,
     * the result could be undefined.
     */
    getMessageEntities(): MessageEntity[] | undefined;
    deleteMessage(options?: {}, timeout?: number): Promise<true>;
    editMessageCaption(options?: {
        /** New caption of the message */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    editMessageLiveLocation(options: {
        /** Latitude of new location */
        latitude: number;
        /** Longitude of new location */
        longitude: number;
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    editMessageMedia(options: {
        /** A JSON-serialized object for a new media content of the message */
        media: IInputMedia;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    editMessageReplyMarkup(options?: {
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: IInlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    editMessageText(options: {
        /** New text of the message */
        text: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: string;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    forwardMessage(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
    }, timeout?: number): Promise<Message>;
    getGameHighScores(options: {
        /** Target user id */
        user_id: number;
    }, timeout?: number): Promise<GameHighScore[]>;
    pinChatMessage(options?: {
        /** Pass *true*, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels. */
        disable_notification?: boolean;
    }, timeout?: number): Promise<true>;
    sendAnimation(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendAudio(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendContact(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendDocument(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendGame(options: {
        /** Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather). */
        game_short_name: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one ‘Play game_title’ button will be shown. If not empty, the first button must launch the game. */
        reply_markup?: InlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    sendInvoice(options: {
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
        /** A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). If empty, one 'Pay `total price`' button will be shown. If not empty, the first button must be a Pay button. */
        reply_markup?: InlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    sendLocation(options: {
        /** Latitude of the location */
        latitude: number;
        /** Longitude of the location */
        longitude: number;
        /** Period in seconds for which the location will be updated (see [Live Locations](https://telegram.org/blog/live-locations), should be between 60 and 86400. */
        live_period?: number;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendMediaGroup(options: {
        /** A JSON-serialized array describing photos and videos to be sent, must include 2–10 items */
        media: Array<IInputMediaPhoto | IInputMediaVideo>;
        /** Sends the messages [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
    }, timeout?: number): Promise<Message[]>;
    sendMessage(options: {
        /** Text of the message to be sent */
        text: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in your bot's message. */
        parse_mode?: string;
        /** Disables link previews for links in this message */
        disable_web_page_preview?: boolean;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendPhoto(options: {
        /** Photo to send. Pass a file_id as string to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        photo: InputFile | string;
        /** Photo caption (may also be used when resending photos by *file_id*), 0-1024 characters */
        caption?: string;
        /** Send [*Markdown*](https://core.telegram.org/bots/api#markdown-style) or [*HTML*](https://core.telegram.org/bots/api#html-style), if you want Telegram apps to show [bold, italic, fixed-width text or inline URLs](https://core.telegram.org/bots/api#formatting-options) in the media caption. */
        parse_mode?: string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendPoll(options: {
        /** Poll question, 1-255 characters */
        question: string;
        /** List of answer options, 2-10 strings 1-100 characters each */
        options: string[];
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendSticker(options: {
        /** Sticker to send. Pass a file_id as string to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a string for Telegram to get a .webp file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api#sending-files) */
        sticker: InputFile | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendVenue(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendVideo(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendVideoNote(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    sendVoice(options: {
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
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message>;
    setGameScore(options: {
        /** User identifier */
        user_id: number;
        /** New score, must be non-negative */
        score: number;
        /** Pass true, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        force?: boolean;
        /** Pass true, if the game message should not be automatically edited to include the current scoreboard */
        disable_edit_message?: boolean;
    }, timeout?: number): Promise<Message>;
    stopMessageLiveLocation(options?: {
        /** A JSON-serialized object for a new [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }, timeout?: number): Promise<Message>;
    stopPoll(options?: {
        /** A JSON-serialized object for a new message [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating). */
        reply_markup?: InlineKeyboardMarkup;
    }, timeout?: number): Promise<Poll>;
}
/** This object represents a message. */
export interface IMessage {
    /** Unique message identifier inside this chat */
    message_id: number;
    /** Sender, empty for messages sent to channels */
    from?: IUser;
    /** Date the message was sent in Unix time */
    date: Date | number;
    /** Conversation the message belongs to */
    chat: IChat;
    /** For forwarded messages, sender of the original message */
    forward_from?: IUser;
    /** For messages forwarded from channels, information about the original channel */
    forward_from_chat?: IChat;
    /** For messages forwarded from channels, identifier of the original message in the channel */
    forward_from_message_id?: number;
    /** Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
    forward_signature?: string;
    /** For forwarded messages, date the original message was sent in Unix time */
    forward_date?: Date | number;
    /** For replies, the original message. Note that the Message object in this field will not contain further *reply_to_message* fields even if it itself is a reply. */
    reply_to_message?: IMessage;
    /** Date the message was last edited in Unix time */
    edit_date?: Date | number;
    /** The unique identifier of a media message group this message belongs to */
    media_group_id?: string;
    /** Signature of the post author for messages in channels */
    author_signature?: string;
    /** For text messages, the actual UTF-8 text of the message, 0-4096 characters. */
    text?: string;
    /** For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
    entities?: IMessageEntity[];
    /** For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
    caption_entities?: IMessageEntity[];
    /** Message is an audio file, information about the file */
    audio?: IAudio;
    /** Message is a general file, information about the file */
    document?: IDocument;
    /** Message is an animation, information about the animation. For backward compatibility, when this field is set, the *document* field will also be set */
    animation?: IAnimation;
    /** Message is a game, information about the game. [More about games »](https://core.telegram.org/bots/api#games) */
    game?: IGame;
    /** Message is a photo, available sizes of the photo */
    photo?: IPhotoSize[];
    /** Message is a sticker, information about the sticker */
    sticker?: ISticker;
    /** Message is a video, information about the video */
    video?: IVideo;
    /** Message is a voice message, information about the file */
    voice?: IVoice;
    /** Message is a video note, information about the video message */
    video_note?: IVideoNote;
    /** Caption for the animation, audio, document, photo, video or voice, 0-1024 characters */
    caption?: string;
    /** Message is a shared contact, information about the contact */
    contact?: IContact;
    /** Message is a shared location, information about the location */
    location?: ILocation;
    /** Message is a venue, information about the venue */
    venue?: IVenue;
    /** Message is a native poll, information about the poll */
    poll?: IPoll;
    /** New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
    new_chat_members?: IUser[];
    /** A member was removed from the group, information about them (this member may be the bot itself) */
    left_chat_member?: IUser;
    /** A chat title was changed to this value */
    new_chat_title?: string;
    /** A chat photo was change to this value */
    new_chat_photo?: IPhotoSize[];
    /** Service message: the chat photo was deleted */
    delete_chat_photo?: true;
    /** Service message: the group has been created */
    group_chat_created?: true;
    /** Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
    supergroup_chat_created?: true;
    /** Service message: the channel has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
    channel_chat_created?: true;
    /** The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: number;
    /** The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
    migrate_from_chat_id?: number;
    /** Specified message was pinned. Note that the Message object in this field will not contain further *reply_to_message* fields even if it is itself a reply. */
    pinned_message?: IMessage;
    /** Message is an invoice for a [payment](https://core.telegram.org/bots/api#payments), information about the invoice. [More about payments »](https://core.telegram.org/bots/api#payments) */
    invoice?: IInvoice;
    /** Message is a service message about a successful payment, information about the payment. [More about payments »](https://core.telegram.org/bots/api#payments) */
    successful_payment?: ISuccessfulPayment;
    /** The domain name of the website on which the user has logged in. [More about Telegram Login »](https://core.telegram.org/widgets/login */
    connected_website?: string;
    /** Telegram Passport data */
    passport_data?: IPassportData;
    /** Inline keyboard attached to the message. `login_url` buttons are represented as ordinary `url` buttons. */
    reply_markup?: IInlineKeyboardMarkup;
}
