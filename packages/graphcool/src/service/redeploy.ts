import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as gql from 'graphql';
import * as path from 'path';
import { createASTFromDBTables } from './createASTFromDBTables';
import { getAllDBTables } from './getAllDBTables';

export async function redeploy() {
  const tables = await getAllDBTables();
  const documentNode = await createASTFromDBTables(tables);
  const schema = gql.print(documentNode);

  console.log(schema);

  fs.writeFileSync(path.resolve(path.join(__dirname, 'generatedTypes.graphql')), schema);

  try {
    const response = childProcess.execSync(`graphcool deploy --force`,
    {
      cwd: path.resolve(path.join(__dirname)),
    }).toString();

    console.log(response);
  }catch(e) {
    debugger;
  }

}

redeploy();
