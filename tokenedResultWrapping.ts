export const tokenedResultWrapping = async <T, R>(callback: (data: T, token?: string) => R, data: Promise<T>, token?: string) => {
    "use strict";
    return callback(await data, token);
}
