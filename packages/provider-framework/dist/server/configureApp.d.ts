/// <reference types="node" />
/// <reference types="express" />
import * as express from 'express';
import { GraphQLSchema } from 'graphql';
import * as http from 'http';
export declare function configureApp(appConfig: {
    graphqlConfig: {
        resolvers: any[];
        schemas: any[];
    };
    server: http.Server;
    authURL: string;
    graphqlEndpoint: string;
    subscriptionsEndpoint?: string;
    renderHTML: string;
    staticPaths?: string[];
    mergeSchemas?: GraphQLSchema[];
}): express.Express;
