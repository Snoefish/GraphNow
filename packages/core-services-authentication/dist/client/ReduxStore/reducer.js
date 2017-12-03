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
var jwtDecode = require("jwt-decode");
var constants_1 = require("./constants");
var initialState = {
    token: undefined,
    username: undefined,
};
/**
 * Redux state reducer for Authentication
 *
 * @export
 * @param {State} [state=initialState]
 * @param {Action} action
 * @returns {State}
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.SET_TOKEN: {
            if (typeof localStorage !== 'undefined')
                localStorage.setItem('authentication-token', action.payload.token);
            return __assign({}, state, { token: action.payload.token, username: getNameFromToken(action.payload.token) });
        }
        case constants_1.CLEAR_TOKEN: {
            if (typeof localStorage !== 'undefined')
                localStorage.removeItem('authentication-token');
            return __assign({}, state, { token: undefined, username: undefined });
        }
        default: {
            return state;
        }
    }
}
exports.reducer = reducer;
/**
 * Retrieve username from a JWT token payload
 *
 * @param {string} jwt JWT Token to retrieve username from
 * @returns {(string | undefined)} username or undefined
 */
function getNameFromToken(jwt) {
    if (jwt != undefined) {
        try {
            var payload = jwtDecode(jwt); // tslint:disable-line:no-any
            if (payload.username != undefined && typeof payload.username === 'string') {
                return payload.username;
            }
        }
        catch (e) {
            return undefined;
        }
    }
    return undefined;
}
//# sourceMappingURL=reducer.js.map