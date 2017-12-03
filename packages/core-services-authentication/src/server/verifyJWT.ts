// tslint:disable-next-line:no-import-side-effect
import 'isomorphic-fetch';

/**
 * Function to verify a JSON web token
 *
 * @export
 * @param {string} authURL Autentication server url
 * @param {string} token Token to decode
 * @returns {Promise<string | object>} Resolves to the authentication token payload
 */
export async function verifyJWT(authURL: string, token: string): Promise<string | object> {
  const response = await fetch(authURL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Origin': `localhost:3000`,
    }),
    body: JSON.stringify({
      operationName: 'VerifyToken',
      query: `
        query VerifyToken($token: String!) {
          Authentication {
            verifyToken(token: $token){
              username
              authorizations {
                graphNow
              }
            }
          }
        }
      `,
      variables: {
        token,
      },
    }),
  });

  return (await response.json()).data.Authentication.verifyToken;
}
