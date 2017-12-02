// Type definitions for graphql-iso-date 3.3
// Project: https://github.com/excitement-engineer/graphql-iso-date
// Definitions by: Dylan Stewart <https://github.com/dyst5422>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'graphql-iso-date' {
  import { GraphQLScalarType } from 'graphql';

  export const GraphQLDate: GraphQLScalarType;
  export const GraphQLDateTime: GraphQLScalarType;
  export const GraphQLTime: GraphQLScalarType;

}