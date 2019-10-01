export const tokenedClassWrapping = async <T, R>(callback: new (data: T, token?: string) => R, data: Promise<T>, token?: string) => {
    "use strict";
    return new callback(await data, token);
}
