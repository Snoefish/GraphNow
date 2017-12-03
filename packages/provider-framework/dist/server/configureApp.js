"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var bodyParser = require("body-parser");
var authentication = require("core-services-authentication/dist/server");
var cors = require("cors");
var express = require("express");
var graphql_1 = require("graphql");
var graphql_tag_1 = require("graphql-tag");
var graphql_tools_1 = require("graphql-tools");
var ramda_1 = require("ramda");
var subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
var rootResolver = {
    Queries: {
        _: function () { return true; },
    },
    Mutations: {
        _: function () { return true; },
    },
    Subscriptions: {
        _: function () { return true; },
    },
};
var rootSchema = (_a = ["\n  type Queries {\n    _: Boolean\n  }\n  type Mutations {\n    _: Boolean\n  }\n  type Subscriptions {\n    _: Boolean\n  }\n\n  schema {\n    query: Queries\n    mutation: Mutations\n    subscription: Subscriptions\n  }\n"], _a.raw = ["\n  type Queries {\n    _: Boolean\n  }\n  type Mutations {\n    _: Boolean\n  }\n  type Subscriptions {\n    _: Boolean\n  }\n\n  schema {\n    query: Queries\n    mutation: Mutations\n    subscription: Subscriptions\n  }\n"], graphql_tag_1.default(_a));
function configureApp(appConfig) {
    var expressRouter = express();
    expressRouter.use(cors());
    expressRouter.use(bodyParser.urlencoded({
        extended: true,
    }));
    expressRouter.use(bodyParser.json());
    var app = appConfig.graphqlConfig;
    var schema = graphql_tools_1.makeExecutableSchema({
        resolvers: ramda_1.reduce(ramda_1.mergeDeepRight, {}, [
            rootResolver
        ].concat(app.resolvers)),
        typeDefs: [
            rootSchema
        ].concat(app.schemas),
    });
    if (appConfig.mergeSchemas != undefined) {
        schema = graphql_tools_1.mergeSchemas({
            schemas: [
                schema
            ].concat(appConfig.mergeSchemas),
        });
    }
    if (appConfig.staticPaths != undefined) {
        for (var _i = 0, _a = appConfig.staticPaths; _i < _a.length; _i++) {
            var staticPath = _a[_i];
            expressRouter.use(express.static(staticPath));
        }
    }
    expressRouter.use("/" + appConfig.graphqlEndpoint, authentication.configureDecodeTokenExpressMiddleware(appConfig.authURL), apollo_server_express_1.graphqlExpress(function (_req, res) {
        return ({
            schema: schema,
            context: {
                authentication: res != undefined ? res.locals.authPayload : {},
            },
        });
    }));
    expressRouter.get('*', function (_req, res) {
        res.send(appConfig.renderHTML);
    });
    if (appConfig.subscriptionsEndpoint != undefined) {
        // tslint:disable-next-line:no-unused-expression
        new subscriptions_transport_ws_1.SubscriptionServer({
            execute: graphql_1.execute,
            subscribe: graphql_1.subscribe,
            schema: schema,
            onOperation: authentication.configureDecodeTokenSocketMiddleware(appConfig.authURL),
        }, {
            server: appConfig.server,
            path: "/" + appConfig.subscriptionsEndpoint,
        });
    }
    return expressRouter;
}
exports.configureApp = configureApp;
var _a;
//# sourceMappingURL=configureApp.js.map