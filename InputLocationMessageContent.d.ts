import Float from "./Float";
import Integer from "./Integer";

/** Represents the [content](https://core.telegram.org/bots/api#inputmessagecontent) of a location message to be sent as the result of an inline query. */
export default class InputLocationMessageContent implements IInputLocationMessageContent {
    constructor(data: IInputLocationMessageContent | InputLocationMessageContent, token?: string);
    public latitude: Float;
    public longitude: Float;
    public live_period?: Integer;
}

export interface IInputLocationMessageContent {
    /** Latitude of the location in degrees */
    latitude: Float;
    /** Longitude of the location in degrees */
    longitude: Float;
    /** Period in seconds for which the location can be updated, should be between 60 and 86400. */
    live_period?: Integer;
}
