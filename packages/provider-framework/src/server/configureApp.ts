import { graphqlExpress } from 'apollo-server-express';
import * as bodyParser from 'body-parser';
import * as authentication from 'core-services-authentication/dist/server';
import * as cors from 'cors';
import * as express from 'express';
import { execute, subscribe, GraphQLSchema } from 'graphql';
import gql from 'graphql-tag';
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import * as http from 'http';
import { mergeDeepRight, reduce } from 'ramda';
import { SubscriptionServer } from 'subscriptions-transport-ws';

const rootResolver = {
  Queries: {
    _: () => true,
  },
  Mutations: {
    _: () => true,
  },
  Subscriptions: {
    _: () => true,
  },
};

const rootSchema = gql`
  type Queries {
    _: Boolean
  }
  type Mutations {
    _: Boolean
  }
  type Subscriptions {
    _: Boolean
  }

  schema {
    query: Queries
    mutation: Mutations
    subscription: Subscriptions
  }
`;

export function configureApp(appConfig: {
  graphqlConfig: { resolvers: any[], schemas: any[] },
  server: http.Server,
  authURL: string,
  graphqlEndpoint: string,
  subscriptionsEndpoint?: string,
  renderHTML: string,
  staticPaths?: string[],
  mergeSchemas?: GraphQLSchema[],
}): express.Express {
  const expressRouter = express();

  expressRouter.use(cors());

  expressRouter.use(bodyParser.urlencoded({
    extended: true,
  }));
  expressRouter.use(bodyParser.json());

  const app = appConfig.graphqlConfig;

  let schema: GraphQLSchema = makeExecutableSchema({
    resolvers: reduce(mergeDeepRight, {}, [
      rootResolver,
      ...app.resolvers,
    ]),
    typeDefs: [
      rootSchema,
      ...app.schemas,
    ],
  });

  if (appConfig.mergeSchemas != undefined) {
    schema = mergeSchemas({
      schemas: [
        schema,
        ...appConfig.mergeSchemas,
      ],
    });
  }

  if (appConfig.staticPaths != undefined) {
    for (const staticPath of appConfig.staticPaths) {
      expressRouter.use(express.static(staticPath));
    }
  }

  expressRouter.use(`/${appConfig.graphqlEndpoint}`,
    authentication.configureDecodeTokenExpressMiddleware(appConfig.authURL),
    graphqlExpress((_req, res) => {
      return ({
        schema,
        context: {
          authentication: res != undefined ? res.locals.authPayload : {},
        },
      });
    }),
  );

  expressRouter.get('*', (_req, res) => {
    res.send(appConfig.renderHTML);
  });


  if (appConfig.subscriptionsEndpoint != undefined) {
    // tslint:disable-next-line:no-unused-expression
    new SubscriptionServer({
      execute,
      subscribe,
      schema,
      onOperation: authentication.configureDecodeTokenSocketMiddleware(appConfig.authURL),
    }, {
      server: appConfig.server,
      path: `/${appConfig.subscriptionsEndpoint}`,
    });
  }

  return expressRouter;
}
