import { GraphQLError, GraphQLFieldResolver, GraphQLResolveInfo, GraphQLScalarType } from 'graphql';

export type AuthenticationPayload = {
  username: string;
  authorizations: {
    [key: string]: string[];
  };
};

export type Context = {
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
export function authenticateResolver(
  resolver: { [key: string]: { [key: string]: GraphQLFieldResolver<any, any> } | GraphQLScalarType | GraphQLFieldResolver<any, any>},
  authenticationFunction?: (authPayload: AuthenticationPayload) => void,
) {
  return Object.keys(resolver).reduce((reducedObject, key) => {
    const resolverBranch = resolver[key];

    if (resolverBranch instanceof GraphQLScalarType) {
      return {
        ...reducedObject,
        [key]: resolverBranch,
      };
    } else if (typeof resolverBranch === 'object'){
      return {
        ...reducedObject,
        [key]: Object.keys(resolverBranch).reduce((reducedBranch, branchKey) => {
          return {
            ...reducedBranch,
            [branchKey]: (obj: any, args: any, context: Context, info: GraphQLResolveInfo) => {
              if (authenticationFunction != undefined) {
                authenticationFunction(context.authentication);
              } else {
                if (typeof context.authentication.username !== 'string') {
                  throw new Error('Unauthorized');
                }
              }
              return resolverBranch[branchKey](obj, args, context, info);
            },
          };
        }, {}),
      };
    } else if (typeof resolverBranch === 'function') {
      return {
        ...reducedObject,
        [key]: (obj: any, args: any, context: Context, info: GraphQLResolveInfo) => {
          if (authenticationFunction != undefined) {
            authenticationFunction(context.authentication);
          } else {
            if (typeof context.authentication.username !== 'string') {
              throw new Error('Unauthorized');
            }
          }
          return resolverBranch(obj, args, context, info);
        },
      };
    } else {
      throw new GraphQLError('Invalid resolver');
    }
  }, {});
}
