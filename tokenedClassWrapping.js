export const tokenedClassWrapping = async (callback, data, token) => {
    "use strict";
    return new callback(await data, token);
};
