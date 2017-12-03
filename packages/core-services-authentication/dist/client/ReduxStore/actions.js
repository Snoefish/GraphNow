"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
/**
 * Redux action-creator to set the authentication token
 *
 * @export
 * @param {string} token Token to set
 * @returns {SetTokenAction}
 */
function setToken(token) {
    return {
        type: constants_1.SET_TOKEN,
        payload: {
            token: token,
        },
    };
}
exports.setToken = setToken;
/**
 * Redux action creator to clear the authentication token
 *
 * @export
 * @returns {ClearTokenAction}
 */
function clearToken() {
    return {
        type: constants_1.CLEAR_TOKEN,
    };
}
exports.clearToken = clearToken;
//# sourceMappingURL=actions.js.map