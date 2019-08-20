/**
 * Will send a request to the Telegram Bot API.
 * This method respects retry_after errors returned from the API and will retry if the retry_after returned can execute before the request will time out
 * @param token The bot token
 * @param method The method to use. You may append querystring options to this if you want to.
 * @param options data to send as form data.
 * @param timeout the timeout for when to give up on the request
 */
export default function sendRequest(token: string, method: string, options: object, timeout?: number): Promise<any>;
