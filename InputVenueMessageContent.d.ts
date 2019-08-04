import Float from "./Float";
import String from "./String";

/** Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a venue message to be sent as the result of an inline query. */
export default class InputVenueMessageContent implements IInputVenueMessageContent {
    constructor(data: IInputVenueMessageContent | InputVenueMessageContent, token?: string);
    public latitude: Float;
    public longitude: Float;
    public title: String;
    public address: String;
    public foursquare_id?: String;
    public foursquare_type?: String;
}

export interface IInputVenueMessageContent {
    /** Latitude of the venue in degrees */
    latitude: Float;
    /** Longitude of the venue in degrees */
    longitude: Float;
    /** Name of the venue */
    title: String;
    /** Address of the venue */
    address: String;
    /** Foursquare identifier of the venue, if known */
    foursquare_id?: String;
    /** Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
    foursquare_type?: String;
}
