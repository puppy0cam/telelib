import String from "./String";
import Boolean from "./Boolean";
import Integer from "./Integer";
import Date from "./Date";
import Array_of_String from "./Array of String";

/** Contains information about the current status of a webhook. */
export default class WebhookInfo implements IWebhookInfo {
    constructor(data: IWebhookInfo | WebhookInfo, token?: string);
    public url: String;
    public has_custom_certificate: Boolean;
    public pending_update_count: Integer;
    public last_error_date?: Date;
    public last_error_message?: String;
    public max_connection?: Integer;
    public allowed_updates?: Array_of_String;
}

export interface IWebhookInfo {
    /** Webhook URL, may be empty if webhook is not set up */
    url: String;
    /** True, if a custom certificate was provided for webhook certificate checks */
    has_custom_certificate: Boolean;
    /** Number of updates awaiting delivery */
    pending_update_count: Integer;
    /** Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_date?: Date;
    /** Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: String;
    /** Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    max_connection?: Integer;
    /** A list of update types the bot is subscribed to. Defaults to all update types */
    allowed_updates?: Array_of_String;
}
