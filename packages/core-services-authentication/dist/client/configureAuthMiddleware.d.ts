import { ApolloLink } from 'apollo-link';
/**
 * Middleware to add authentication header to all requests
 *
 * @param {BatchMiddlewareRequest} req
 * @param {Function} next
 */
export declare const configureAuthMiddleware: ({authToken}: {
    authToken: () => string | undefined;
}) => ApolloLink;
