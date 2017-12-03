"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var winston = require("winston");
/* istanbul ignore next */
function createLogger(options) {
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
exports.createLogger = createLogger;
//# sourceMappingURL=createLogger.js.map