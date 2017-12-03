/// <reference types="express" />
import * as express from 'express';
export declare function configureDecodeTokenExpressMiddleware(authURL: string): (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>;
