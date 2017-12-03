import { resolver as authResolver, schema as authSchema } from 'core-services-authentication/dist/server';
import { readFileSync } from 'fs';
import * as path from 'path';

export async function configureGraphql(): Promise<{ resolvers: any[], schemas: any[]}>{

  const config = JSON.parse(readFileSync(path.resolve(__dirname, '../../config/http.config.json')).toString());

  const resolvers = [
    {
      ...authResolver(config.AUTH_SERVER.authSecretKey),
    },
  ];

  const schemas = [
    authSchema,
  ];

  return { resolvers, schemas };
}
