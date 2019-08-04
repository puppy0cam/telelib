export default (validatorCreator) => {
    "use strict";
    return (data, token) => {
        "use strict";
        return data.map(validatorCreator(token));
    };
}
