"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
/* istanbul ignore next */
function generateToken(encryptionKey, jwtPayload) {
    var token = jwt.sign(jwtPayload, encryptionKey);
    return token;
}
var secretKey = 'devSecretKey';
var payload = {
    username: 'MSLICE',
    authorizations: {
        dataManagement: ['read'],
        prontto: ['read', 'write'],
        timelineTrending: ['read'],
        activitySearch: ['read'],
        activityStatistics: ['read'],
        powerModeling: ['read'],
        seqgenSearch: ['read'],
    },
};
console.log(generateToken(secretKey, payload));
//# sourceMappingURL=generateToken.js.map