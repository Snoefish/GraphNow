/**
 * Function to generate a JSON web token
 *
 * @export
 * @param {string} secretKey Secret key to use for encoding
 * @param {(username: string, password: string) => Promise<UserProfile>} authenticate Function for authenticating
 * @param {string} username Username to use for authenticating
 * @param {string} password Password to use for authenticating
 * @returns {Promise<string>} Resolves to the JSON web token
 */
export declare function generateJWT(secretKey: string, authenticate: (username: string, password: string) => Promise<UserProfile>, username: string, password: string): Promise<string>;
export declare type UserProfile = object;
