/**
 * Authentication resolver
 *
 * @export
 * @param {string} secretKey Secret key to use for JWT token encoding
 * @returns
 */
export declare function resolver(secretKey: string): {
    Queries: {
        Authentication: () => {
            getToken: (args: {
                username: string;
                password: string;
            }) => Promise<string>;
            verifyToken: (args: {
                token: string;
            }) => string | object;
        };
    };
};
