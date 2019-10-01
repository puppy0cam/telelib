import { Location, ILocation, Bot, IForceReply, IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, Message, } from "./_internals.js";

/** This object represents a venue. */
export class Venue extends Bot implements IVenue {
    constructor(data: IVenue, token?: string | Bot) {
        "use strict";
        super(data, token);
        if (this.location) {
            this.location = new Location(this.location, this);
        }
    }
    public location!: Location;
    public title!: string;
    public address!: string;
    public foursquare_id?: string;
    public foursquare_type?: string;
    public sendVenue(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
        /** Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. */
        disable_notification?: boolean;
        /** If the message is a reply, ID of the original message */
        reply_to_message_id?: number;
        /** Additional interface options. A JSON-serialized object for an [inline keyboard](https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating), [custom reply keyboard](https://core.telegram.org/bots#keyboards), instructions to remove reply keyboard or to force a reply from the user. */
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
    }, timeout?: number): Promise<Message> {
        "use strict";
        return super.sendVenue({
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            title: this.title,
            address: this.address,
            foursquare_id: this.foursquare_id,
            foursquare_type: this.foursquare_type,
            ...options,
        }, timeout);
    }
    public sendLocation(options: {
        /** Unique identifier for the target chat or username of the target channel (in the format `@channelusername`) */
        chat_id: number | string;
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
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            ...options,
        }, timeout);
    }
}

/** This object represents a venue. */
export interface IVenue {
    /** Venue location */
    location: ILocation;
    /** Name of the venue */
    title: string;
    /** Address of the venue */
    address: string;
    /** Foursquare identifier of the venue */
    foursquare_id?: string;
    /** Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: string;
}
