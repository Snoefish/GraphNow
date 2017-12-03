"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
function increment(value) {
    return {
        type: constants_1.INCREMENT,
        payload: {
            value: value,
        },
    };
}
exports.increment = increment;
function decrement(value) {
    return {
        type: constants_1.DECREMENT,
        payload: {
            value: value,
        },
    };
}
exports.decrement = decrement;
//# sourceMappingURL=actions.js.map