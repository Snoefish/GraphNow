import { ApolloLink, Operation } from 'apollo-link';

/**
 * Middleware to add authentication header to all requests
 *
 * @param {BatchMiddlewareRequest} req
 * @param {Function} next
 */
export const configureAuthMiddleware = ({ authToken }: { authToken: () => string | undefined }) => {
  return new ApolloLink((operation, forward) => {
    // Add the authorization to the headers
    operation.setContext({
      headers: {
        authorization: `Bearer ${authToken()}`,
      },
    });

    // Add onto payload for websocket authentication
    (operation as Operation & { authToken: string | undefined }).authToken = authToken();


    return (forward as any)(operation);
  });
};
