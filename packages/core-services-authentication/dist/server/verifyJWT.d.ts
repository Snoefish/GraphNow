import 'isomorphic-fetch';
/**
 * Function to verify a JSON web token
 *
 * @export
 * @param {string} authURL Autentication server url
 * @param {string} token Token to decode
 * @returns {Promise<string | object>} Resolves to the authentication token payload
 */
export declare function verifyJWT(authURL: string, token: string): Promise<string | object>;
