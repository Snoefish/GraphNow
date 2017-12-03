"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var authenticateUser_1 = require("./authenticateUser");
var generateJWT_1 = require("./generateJWT");
/**
 * Authentication resolver
 *
 * @export
 * @param {string} secretKey Secret key to use for JWT token encoding
 * @returns
 */
function resolver(secretKey) {
    return {
        Queries: {
            Authentication: function () { return ({
                getToken: function (args) {
                    return generateJWT_1.generateJWT(secretKey, authenticateUser_1.authenticateUser, args.username, args.password);
                },
                verifyToken: function (args) {
                    return jwt.verify(args.token, secretKey);
                },
            }); },
        },
    };
}
exports.resolver = resolver;
//# sourceMappingURL=resolver.js.map