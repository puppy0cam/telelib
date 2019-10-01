export const tokenedResultWrapping = async (callback, data, token) => {
    "use strict";
    return callback(await data, token);
};
