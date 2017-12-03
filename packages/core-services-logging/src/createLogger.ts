import * as path from 'path';
import * as winston from 'winston';
/* istanbul ignore next */
export function createLogger(options: {
  dir: string,
  name: string,
}) {
  return new winston.Logger({
    level: 'silly',
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: path.resolve(options.dir, options.name),
      }),
    ],
    exceptionHandlers: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: path.resolve(options.dir, options.name),
      }),
    ],
  });
}
