import fetch from 'node-fetch';

type Field = {
  name: string;
  type: string;
  isUnique: boolean;
  isRequired: boolean;
};

type Table = {
  name: string;
  fields: Field[]
};


export async function getAllTables(): Promise<Table[]> {
  return (await (await fetch('http://localhost:60000/simple/v1/cjapptdzb00040160sf97d2jg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': `localhost:3000`,
      },
      body: JSON.stringify({
        operationName: 'GetAllTables',
        query: `
          query GetAllTables{
            allTables{
              name
              fields {
                name
                type
                isRequired
                isUnique
                relation
              }
              id
            }
          }
        `,
      }),

    })
  ).json()).data.allTables as Table[];
}
