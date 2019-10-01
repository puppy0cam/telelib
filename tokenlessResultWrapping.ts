export const tokenlessResultWrapping = async <T, R>(callback: (data: T) => R, data: Promise<T>) => {
    "use strict";
    return callback(await data);
}
