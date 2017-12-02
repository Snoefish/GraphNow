import * as gql from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import { getAllTables } from './getAllTables';

const defaultFieldMap = {
  id: {
    type: new gql.GraphQLNonNull(gql.GraphQLString)
  },
  createdAt: {
    type: new gql.GraphQLNonNull(GraphQLDateTime)
  },
  updatedAt: {
    type: new gql.GraphQLNonNull(GraphQLDateTime)
  },
};

export async function createSchemaFromDB() {
  const dbInfo = await getAllTables();

  const tableObjects = dbInfo.map(table => {
    return new gql.GraphQLObjectType({
      name: table.name,
      fields: table.fields.reduce((fieldMap, field) => {
        const fieldType = field.isRequired
          ? new gql.GraphQLNonNull(GraphQLTypeFromString(field.type))
          : GraphQLTypeFromString(field.type);

        return {
          ...fieldMap,
          [field.name]: {
            type: fieldType,
          },
        };
      }, defaultFieldMap),
    });
  });

  tableObjects.forEach(tableObject => console.log(gql.printType(tableObject)));

  debugger;
}

createSchemaFromDB();

function GraphQLTypeFromString(type: string): gql.GraphQLOutputType {
  switch (type) {
    case 'String': {
      return gql.GraphQLString;
    }
    default: {
      throw new TypeError('Unknown type');
    }
  }
}
