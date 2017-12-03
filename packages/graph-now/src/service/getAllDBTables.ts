import fetch from 'node-fetch';
import { Table } from './types';

export async function getAllDBTables(): Promise<Table[]> {
  const response =  await (await fetch('http://localhost:60000/simple/v1/cjapptdzb00040160sf97d2jg',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': `localhost:3000`,
      },
      body: JSON.stringify({
        operationName: 'GetAllTables',
        query: `
          query GetAllTables {
            allTables {
              name
              fields {
                name
                type
                isRequired
                isUnique
                isList
              }
              id
            }
          }
        `,
      }),

    }).catch(_err => {
      throw new Error('Cannot retrieve tables from DB.');
    })
  ).json();

  return response.data.allTables as Table[];
}
