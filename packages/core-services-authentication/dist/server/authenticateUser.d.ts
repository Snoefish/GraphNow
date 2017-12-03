export declare type UserProfile = {
    username: string;
    authorizations: {
        [key: string]: string[];
    };
};
/**
 * Function to authenticate a username and password against JPL LDAP
 *
 * @export
 * @param {string} userName
 * @param {string} password
 * @returns {Promise<ILDAPUserProfile>}
 */
export declare function authenticateUser(inUsername: string, inPassword: string): Promise<UserProfile>;
