/// <reference types="winston" />
import * as winston from 'winston';
export declare function createLogger(options: {
    dir: string;
    name: string;
}): winston.LoggerInstance;
