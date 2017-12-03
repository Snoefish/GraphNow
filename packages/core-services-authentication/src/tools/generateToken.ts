import * as jwt from 'jsonwebtoken';

/* istanbul ignore next */
function generateToken(encryptionKey: string, jwtPayload: any): string {// tslint:disable-line:no-any
  const token = jwt.sign(jwtPayload,
    encryptionKey,
    // { expiresIn: '180d' },
  );

  return token;
}

const secretKey = 'devSecretKey';

const payload = {
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
