"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var initialState = {
    counter: 0,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.INCREMENT: {
            return __assign({}, state, { counter: state.counter + action.payload.value });
        }
        case constants_1.DECREMENT: {
            return __assign({}, state, { counter: state.counter - action.payload.value });
        }
        default: {
            return state;
        }
    }
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map