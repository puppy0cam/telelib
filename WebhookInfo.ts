import { Bot } from "./_internals.js";

/** Contains information about the current status of a webhook. */
export class WebhookInfo extends Bot implements IWebhookInfo {
    constructor(data: IWebhookInfo, token?: string | Bot) {
        "use strict";
        super(data, token);
        const last_error_date = data.last_error_date;
        if (last_error_date) {
            if (last_error_date.valueOf() < 9999999999) {
                this.last_error_date = new Date(last_error_date.valueOf() * 1000);
            } else {
                this.last_error_date = new Date(last_error_date);
            }
            if (!isFinite(this.last_error_date.valueOf())) {
                this.last_error_date = data.last_error_date as Date;
            }
        }
    };
    public url!: string;
    public has_custom_certificate!: boolean;
    public pending_update_count!: number;
    public last_error_date?: Date;
    public last_error_message?: string;
    public max_connection?: number;
    public allowed_updates?: string[];
}

/** Contains information about the current status of a webhook. */
export interface IWebhookInfo {
    /** Webhook URL, may be empty if webhook is not set up */
    url: string;
    /** True, if a custom certificate was provided for webhook certificate checks */
    has_custom_certificate: boolean;
    /** Number of updates awaiting delivery */
    pending_update_count: number;
    /** Unix time for the most recent error that happened when trying to deliver an update via webhook */
    last_error_date?: Date | number;
    /** Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
    last_error_message?: string;
    /** Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
    max_connection?: number;
    /** A list of update types the bot is subscribed to. Defaults to all update types */
    allowed_updates?: string[];
}
