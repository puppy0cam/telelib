export default (callback, asConstructor) => {
    "use strict";
    asConstructor = asConstructor ? true : false;
    const cache = new Map();
    return asConstructor ?
    token => {
        "use strict";
        return cache.has(token) ? cache.get(token) : cache.set(token, data => {
            "use strict";
            return new callback(data, token);
        }).get(token);
    }
    :
    token => {
        "use strict";
        return cache.has(token) ? cache.get(token) : cache.set(token, data => {
            "use strict";
            return callback(data, token);
        }).get(token);
    };
}
