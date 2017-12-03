import * as gql from 'graphql';
import { Field, Table } from './types';

const scalarTypes = [
  'ID',
  'DateTime',
  'String',
  'Int',
  'Boolean',
  'Float',
];

function isScalarType(type: string): boolean {
  return scalarTypes.indexOf(type) > -1;
}

export async function createASTFromDBTables(tables: Table[]): Promise<gql.DocumentNode> {
  const document = {
    kind: gql.Kind.DOCUMENT,
    definitions: tables.map(buildTableType),
  };

  return document;
}

const uniqueDirectiveNode: gql.DirectiveNode = {
  kind: gql.Kind.DIRECTIVE,
  name: {
    kind: gql.Kind.NAME,
    value: 'isUnique',
  },
};

const modelDirectiveNode: gql.DirectiveNode = {
  kind: gql.Kind.DIRECTIVE,
  name: {
    kind: gql.Kind.NAME,
    value: 'model',
  },
};

function createRelationDirectiveNode(relation: string): gql.DirectiveNode {
  return {
    kind: gql.Kind.DIRECTIVE,
    name: {
      kind: gql.Kind.NAME,
      value: 'relation',
    },
    arguments: [{
      kind: gql.Kind.ARGUMENT,
      name: {
        kind: gql.Kind.NAME,
        value: 'name',
      },
      value: {
        kind: gql.Kind.STRING,
        value: relation,
      },
    }],
  };
}

const defaultFields = [
  {
    kind: gql.Kind.FIELD_DEFINITION,
    name: {
      kind: gql.Kind.NAME,
      value: 'id',
    },
    arguments: [],
    type: makeNonNull({
      kind: gql.Kind.NAMED_TYPE,
      name: {
        kind: gql.Kind.NAME,
        value: 'ID',
      },
    }),
    directives: [uniqueDirectiveNode],
  },
  {
    kind: gql.Kind.FIELD_DEFINITION,
    name: {
      kind: gql.Kind.NAME,
      value: 'createdAt',
    },
    arguments: [],
    type: makeNonNull({
      kind: gql.Kind.NAMED_TYPE,
      name: {
        kind: gql.Kind.NAME,
        value: 'DateTime',
      },
    }),
  },
  {
    kind: gql.Kind.FIELD_DEFINITION,
    name: {
      kind: gql.Kind.NAME,
      value: 'updatedAt',
    },
    arguments: [],
    type: makeNonNull({
      kind: gql.Kind.NAMED_TYPE,
      name: {
        kind: gql.Kind.NAME,
        value: 'DateTime',
      },
    }),
  },
];

function buildTableType(table: Table): gql.ObjectTypeDefinitionNode {
  return {
    kind: gql.Kind.OBJECT_TYPE_DEFINITION,
    name: {
      kind: gql.Kind.NAME,
      value: table.name,
    },
    fields: [
      ...defaultFields,
      ...table.fields.map(field => buildFieldType(field, table)),
    ],
    directives: [modelDirectiveNode],
  };
}

function buildFieldType(field: Field, table: Table): gql.FieldDefinitionNode {

  let typeNode: gql.TypeNode = {
    kind: gql.Kind.NAMED_TYPE,
    name: {
      kind: gql.Kind.NAME,
      value: field.type,
    },
  };

  if (field.isList) {
    typeNode = makeList(typeNode);
  }

  if (field.isRequired) {
    typeNode = makeNonNull(typeNode);
  }

  const directives = [];
  if (field.isUnique) directives.push(uniqueDirectiveNode);
  if (!isScalarType(field.type)) directives.push(createRelationDirectiveNode([field.type,table.name].sort().join('')));

  return {
    kind: gql.Kind.FIELD_DEFINITION,
    name: {
      kind: gql.Kind.NAME,
      value: field.name,
    },
    arguments: [],
    type: typeNode,
    directives,
  };
}

function makeList(type: gql.NamedTypeNode): gql.ListTypeNode {
  return {
    kind: gql.Kind.LIST_TYPE,
    type: makeNonNull(type),
  };
}

function makeNonNull(type: gql.NamedTypeNode | gql.ListTypeNode): gql.NonNullTypeNode {
  return {
    kind: gql.Kind.NON_NULL_TYPE,
    type,
  };
}
