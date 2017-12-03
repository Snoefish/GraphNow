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
var graphql_1 = require("graphql");
/**
 * Authenticate a GraphQL Resolver path. This assumes a standard namespacing convention
 * where the root resolver is a simple object with resolver functions as keys.
 *
 * {
 *   Queries: {
 *     Namespace: {
 *       resolver1: (obj: any, args: any, context: Context, info: GraphQLResolveInfo) => any;
 *       resolver2: (obj: any, args: any, context: Context, info: GraphQLResolveInfo) => any;
 *     }
 *   }
 * }
 *
 * @export
 * @param {({ [key: string]: { [key: string]: GraphQLFieldResolver<any, any> } | GraphQLScalarType })} resolver Resolver to authenticate
 * @param {(authPayload: AuthenticationPayload) => void} [authenticationFunction] Function to implement more specific authorization
 * @returns Authentication protected resolver function
 */
function authenticateResolver(resolver, authenticationFunction) {
    return Object.keys(resolver).reduce(function (reducedObject, key) {
        var resolverBranch = resolver[key];
        if (resolverBranch instanceof graphql_1.GraphQLScalarType) {
            return __assign({}, reducedObject, (_a = {}, _a[key] = resolverBranch, _a));
        }
        else if (typeof resolverBranch === 'object') {
            return __assign({}, reducedObject, (_b = {}, _b[key] = Object.keys(resolverBranch).reduce(function (reducedBranch, branchKey) {
                return __assign({}, reducedBranch, (_a = {}, _a[branchKey] = function (obj, args, context, info) {
                    if (authenticationFunction != undefined) {
                        authenticationFunction(context.authentication);
                    }
                    else {
                        if (typeof context.authentication.username !== 'string') {
                            throw new Error('Unauthorized');
                        }
                    }
                    return resolverBranch[branchKey](obj, args, context, info);
                }, _a));
                var _a;
            }, {}), _b));
        }
        else if (typeof resolverBranch === 'function') {
            return __assign({}, reducedObject, (_c = {}, _c[key] = function (obj, args, context, info) {
                if (authenticationFunction != undefined) {
                    authenticationFunction(context.authentication);
                }
                else {
                    if (typeof context.authentication.username !== 'string') {
                        throw new Error('Unauthorized');
                    }
                }
                return resolverBranch(obj, args, context, info);
            }, _c));
        }
        else {
            throw new graphql_1.GraphQLError('Invalid resolver');
        }
        var _a, _b, _c;
    }, {});
}
exports.authenticateResolver = authenticateResolver;
//# sourceMappingURL=authenticateResolver.js.map