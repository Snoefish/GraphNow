export type UserProfile = {
  username: string;
  authorizations: {
    [key: string]: string[],
  }
};

const userProfiles: {
  [key: string]: {
    username: string,
    password: string,
    authorizations: {
      [key: string]: string[],
    },
  },
} = {
  dyst5422: {
    username: 'dyst5422',
    password: 'password',
    authorizations: {
      graphNow: ['read', 'write'],
    },
  },
  kevin: {
    username: 'kevin',
    password: 'password',
    authorizations: {
      graphNow: ['read', 'write'],
    },
  },
};


/**
 * Function to authenticate a username and password against JPL LDAP
 *
 * @export
 * @param {string} userName
 * @param {string} password
 * @returns {Promise<ILDAPUserProfile>}
 */
/* istanbul ignore next */
export async function authenticateUser(inUsername: string, inPassword: string): Promise<UserProfile> {
  if (userProfiles[inUsername] != undefined) {
    if (userProfiles[inUsername].password === inPassword) {
      const { password, ...profile } = userProfiles[inUsername];
      return {...profile};
    } else {
      throw new Error('Invalid credentials');
    }
  } else {
    throw new Error('Username not found');
  }
}
