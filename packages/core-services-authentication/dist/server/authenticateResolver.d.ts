import { GraphQLFieldResolver, GraphQLScalarType } from 'graphql';
export declare type AuthenticationPayload = {
    username: string;
    authorizations: {
        [key: string]: string[];
    };
};
export declare type Context = {
    authentication: AuthenticationPayload;
};
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
export declare function authenticateResolver(resolver: {
    [key: string]: {
        [key: string]: GraphQLFieldResolver<any, any>;
    } | GraphQLScalarType | GraphQLFieldResolver<any, any>;
}, authenticationFunction?: (authPayload: AuthenticationPayload) => void): {};
