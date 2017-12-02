import * as gql from 'graphql';

const schema = gql.buildSchema(`
type User {
  id: String @deprecated
  name: String
}

type Query {
  user(id: String): User
}
`);

console.log(schema);
