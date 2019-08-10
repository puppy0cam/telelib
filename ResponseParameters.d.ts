import Integer from "./Integer";

/** Contains information about why a request was unsuccessful. */
export default class ResponseParameters implements IResponseParameters {
    constructor(data: IResponseParameters | ResponseParameters, token?: string);
    public migrate_to_chat_id?: Integer;
    public retry_after?: Integer;
    /**
     * Will return a promise that will resolve in the object's specified retry after.
     * If there is not retry after, it will reject the returned promise.
     */
    public waitRetryTime(): Promise<void>;
}

export interface IResponseParameters {
    /** The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. */
    migrate_to_chat_id?: Integer;
    /** In case of exceeding flood control, the number of seconds left to wait before the request can be repeated */
    retry_after?: Integer;
}
