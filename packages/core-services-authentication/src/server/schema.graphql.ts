import gql from 'graphql-tag';

export const schema = gql`
  type Authentication {
    getToken(username: String!, password: String!): String!
    verifyToken(token: String!): AuthenticationTokenPayload!
  }

  type AuthenticationTokenPayload {
    username: String!
    authorizations: Authorizations!
  }

  type Authorizations {
    graphNow: [String!]!
  }

  extend type Queries {
    Authentication: Authentication!
  }
`;
