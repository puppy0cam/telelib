export const tokenlessResultWrapping = async (callback, data) => {
    "use strict";
    return callback(await data);
};
