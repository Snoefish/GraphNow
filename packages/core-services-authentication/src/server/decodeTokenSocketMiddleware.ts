import { verifyJWT } from './verifyJWT';

export function configureDecodeTokenSocketMiddleware(authURL: string) {
  return async function decodeTokenSocketMiddleware(message: { payload: { authToken: string } }, operationParams: object) {
    let authPayload;
    try {
      if (typeof message.payload.authToken === 'string') {
        authPayload = await verifyJWT(authURL, message.payload.authToken);
      } else {
        throw new Error('Auth Token not available');
      }
    } catch(e) {
      authPayload = {};
    }

    return {
      ...operationParams,
      context: {
        authentication: authPayload,
      },
    };
  };
}

