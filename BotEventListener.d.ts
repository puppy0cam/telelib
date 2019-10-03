import { BotController, Update } from "./_internals.js";
export declare class BotEventListener<T> {
    type?: "poll" | "message" | "edited_message" | "chosen_inline_result" | "inline_query" | "callback_query" | "shipping_query" | "pre_checkout_query";
    command?: string;
    filters: Array<boolean | PromiseLike<boolean> | ((value: T, bot: BotController) => boolean | PromiseLike<boolean>)>;
    callback(data: T, bot: BotController): void | PromiseLike<void>;
    constructor(type?: "poll" | "message" | "edited_message" | "chosen_inline_result" | "inline_query" | "callback_query" | "shipping_query" | "pre_checkout_query", callback?: (data: any, bot: BotController) => void | PromiseLike<void>, ...filters: Array<string | boolean | PromiseLike<boolean> | ((data: any, bot: BotController) => boolean | PromiseLike<boolean>)>);
    getContentFromUpdate(update: Update): T | undefined;
    passEvent(update: Update, bot: BotController): Promise<void>;
}
