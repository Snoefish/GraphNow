import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
export { ApolloLink };

/**
 * Apollo transport afterware to deauthenticate when the response is unauthorized
 *
 * @param {{ deauthenticate: () => void }} { deauthenticate }
 * @returns {ApolloLink}
 */
export const configureAuthAfterware = ({ deauthenticate }: { deauthenticate: () => void }) => {
  return onError(props => {
    if (props.response && props.response.errors && props.response.errors.map(err => err.message).includes('Unauthorized')) {
      deauthenticate();
    }
  });
};
