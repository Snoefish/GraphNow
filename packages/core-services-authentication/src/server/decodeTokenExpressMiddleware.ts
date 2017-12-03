import * as express from 'express';
import { verifyJWT } from './verifyJWT';

export function configureDecodeTokenExpressMiddleware(authURL: string) {
  return async function decodeTokenExpressMiddleware(
    req: express.Request,
    res: express.Response, // tslint:disable-line no-any
    next: express.NextFunction,
  ) {
    const authHeader = req.headers.authorization;
    try {
      if (authHeader != undefined && typeof authHeader === 'string') {
        const match = authHeader.match(/Bearer (\S+)/);
        if (match != undefined) {
          const token = match[1];
          res.locals.authPayload = await verifyJWT(authURL, token);
        }
      } else {
        throw new Error('Invalid Token');
      }
    } catch(e) {
      res.locals.authPayload = {};
    }

    next();
  };
}
