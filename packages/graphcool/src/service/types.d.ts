export type Field = {
  name: string;
  type: string;
  isUnique: boolean;
  isRequired: boolean;
  isList: boolean;
};

export type Table = {
  name: string;
  fields: Field[]
};