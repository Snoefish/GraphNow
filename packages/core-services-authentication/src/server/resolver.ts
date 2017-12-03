import * as jwt from 'jsonwebtoken';
import { authenticateUser } from './authenticateUser';
import { generateJWT } from './generateJWT';

/**
 * Authentication resolver
 *
 * @export
 * @param {string} secretKey Secret key to use for JWT token encoding
 * @returns
 */
export function resolver(secretKey: string) {
  return {
    Queries: {
      Authentication: () => ({
        getToken: (args: { username: string, password: string }) => {
          return generateJWT(secretKey, authenticateUser, args.username, args.password);
        },
        verifyToken: (args: { token: string }) => {
          return jwt.verify(args.token, secretKey);
        },
      }),
    },
  };
}
