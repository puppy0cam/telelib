import { Message, Bot, User, Update, InlineQuery, ChosenInlineResult, CallbackQuery, ShippingQuery, PreCheckoutQuery, Poll, BotEventListener } from "./_internals.js";
export declare class BotController extends Bot {
    #private;
    constructor(token: string | Bot);
    getMe(): Promise<User>;
    on(type: "message" | "edited_message" | "channel_post" | "edited_channel_post", callback: (message: Message, bot: BotController) => void | PromiseLike<void>, command?: string, ...filters: Array<boolean | PromiseLike<boolean> | ((message: Message, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Message>;
    on(type: "message" | "edited_message" | "channel_post" | "edited_channel_post", callback: (message: Message, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((message: Message, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Message>;
    on(type: "chosen_inline_result", callback: (chosenInlineResult: ChosenInlineResult, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((chosenInlineResult: ChosenInlineResult, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<ChosenInlineResult>;
    on(type: "inline_query", callback: (inlineQuery: InlineQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((inlineQuery: InlineQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<InlineQuery>;
    on(type: "callback_query", callback: (callbackQuery: CallbackQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((callbackQuery: CallbackQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<CallbackQuery>;
    on(type: "shipping_query", callback: (shippingQuery: ShippingQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((shippingQuery: ShippingQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<ShippingQuery>;
    on(type: "pre_checkout_query", callback: (preCheckoutQuery: PreCheckoutQuery, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((preCheckoutQuery: PreCheckoutQuery, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<PreCheckoutQuery>;
    on(type: "poll", callback: (poll: Poll, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((poll: Poll, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Poll>;
    on(callback: (update: Update, bot: BotController) => void | PromiseLike<void>, ...filters: Array<boolean | PromiseLike<boolean> | ((update: Update, bot: BotController) => boolean | PromiseLike<boolean>)>): BotEventListener<Update>;
    on<T>(listener: BotEventListener<T>): BotEventListener<T>;
    off(listener: BotEventListener<any>): boolean;
    emit(update: Update): Array<Promise<void>>;
    tick(options?: Parameters<typeof Update["prototype"]["getUpdates"]>[0]): Promise<void>;
    /**
     * Start the bot's getUpdates process.
     */
    start(): void;
    /**
     * Make the current getUpdates process be the last.
     */
    stop(): void;
}
