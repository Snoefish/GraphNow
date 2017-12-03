import { ApolloLink } from 'apollo-link';
export { ApolloLink };
/**
 * Apollo transport afterware to deauthenticate when the response is unauthorized
 *
 * @param {{ deauthenticate: () => void }} { deauthenticate }
 * @returns {ApolloLink}
 */
export declare const configureAuthAfterware: ({deauthenticate}: {
    deauthenticate: () => void;
}) => ApolloLink;
