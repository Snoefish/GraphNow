import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';

export type Field = {
  id: string;
  name: string;
  type: string;
  isUnique: boolean;
  isRequired: boolean;
  isList: boolean;
};

export type Table = {
  id: string;
  name: string;
  fields: Field[]
};

export type QueryResult = {
  allTables: Table[];
};

export type Variable = {
};


const getTables = gql`
  query GetAllTables{
    allTables {
      id
      name
      fields {
        id
        name
        type
        isUnique
        isRequired
        isList
      }
    }
  }
`;

export function GetTables<OwnProps, InputProps = OwnProps & { data?: QueryResult & QueryProps }>(
  component: React.ComponentType<InputProps>,
 ): React.ComponentType<OwnProps & Variable> {
  return graphql(getTables)(component) as React.ComponentClass<OwnProps & Variable>;
}
