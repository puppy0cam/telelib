/**
 * The Promise equivalent of setTimeout. Due to how promises work, you can only supply a single argument as the resolved value.
 * If you wish to pass more than one piece of data back, consider wrapping it in an object or array.
 * @param ms The amount of milliseconds to wait
 * @param resolveInto what the promise should resolve as
 */
export default function wait<T = void>(ms: number, resolveInto?: T): Promise<T>;
