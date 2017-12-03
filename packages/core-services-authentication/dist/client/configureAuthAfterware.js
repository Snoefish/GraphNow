"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_link_1 = require("apollo-link");
exports.ApolloLink = apollo_link_1.ApolloLink;
var apollo_link_error_1 = require("apollo-link-error");
/**
 * Apollo transport afterware to deauthenticate when the response is unauthorized
 *
 * @param {{ deauthenticate: () => void }} { deauthenticate }
 * @returns {ApolloLink}
 */
exports.configureAuthAfterware = function (_a) {
    var deauthenticate = _a.deauthenticate;
    return apollo_link_error_1.onError(function (props) {
        if (props.response && props.response.errors && props.response.errors.map(function (err) { return err.message; }).includes('Unauthorized')) {
            deauthenticate();
        }
    });
};
//# sourceMappingURL=configureAuthAfterware.js.map