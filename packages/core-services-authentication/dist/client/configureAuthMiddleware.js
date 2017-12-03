"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_link_1 = require("apollo-link");
/**
 * Middleware to add authentication header to all requests
 *
 * @param {BatchMiddlewareRequest} req
 * @param {Function} next
 */
exports.configureAuthMiddleware = function (_a) {
    var authToken = _a.authToken;
    return new apollo_link_1.ApolloLink(function (operation, forward) {
        // Add the authorization to the headers
        operation.setContext({
            headers: {
                authorization: "Bearer " + authToken(),
            },
        });
        // Add onto payload for websocket authentication
        operation.authToken = authToken();
        return forward(operation);
    });
};
//# sourceMappingURL=configureAuthMiddleware.js.map