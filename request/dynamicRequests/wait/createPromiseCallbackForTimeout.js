export default (ms, resolveInto) => {
    "use strict";
    return resolve => {
        "use strict";
        setTimeout(resolve, ms, resolveInto);
    }
}
