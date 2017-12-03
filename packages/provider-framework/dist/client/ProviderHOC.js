"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
var apollo_client_1 = require("apollo-client");
var apollo_link_1 = require("apollo-link");
var apollo_link_http_1 = require("apollo-link-http");
var apollo_link_ws_1 = require("apollo-link-ws");
var apollo_utilities_1 = require("apollo-utilities");
var client_1 = require("core-services-authentication/dist/client");
var notifications_1 = require("notifications");
var React = require("react");
var react_apollo_1 = require("react-apollo");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var redux_persist_1 = require("redux-persist");
function configureProviderHOC(config) {
    /** Configure Redux Store */
    var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != undefined
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : redux_1.compose;
    var storeEnhancers = composeEnhancers(redux_1.applyMiddleware(redux_logger_1.createLogger({ collapsed: true })), redux_persist_1.autoRehydrate({ log: false }));
    var reduxStore = redux_1.createStore(redux_1.combineReducers(__assign({}, config.reducers, { authentication: client_1.reducer, notifications: notifications_1.reducer })), storeEnhancers);
    /** Start persisting store if we can */
    if (typeof localStorage !== 'undefined') {
        redux_persist_1.persistStore(reduxStore, {
            blacklist: ['authentication', 'notifications'],
        });
    }
    /** Configure Apollo Client */
    // Create an http link:
    var apolloLink = new apollo_link_http_1.HttpLink({
        uri: config.graphqlURL,
    });
    // Only try to create a websocket link if we have a subscription url
    if (config.subscriptionURL != undefined) {
        // Create a WebSocket link:
        var wsLink = new apollo_link_ws_1.WebSocketLink({
            uri: config.subscriptionURL,
            options: {
                reconnect: true,
            },
        });
        // Using the ability to split links, you can send data to each link
        // Depending on what kind of operation is being sent
        apolloLink = apollo_link_1.split(
        // Split based on operation type
        function (_a) {
            var query = _a.query;
            var _b = apollo_utilities_1.getMainDefinition(query), kind = _b.kind, operation = _b.operation;
            return kind === 'OperationDefinition' && operation === 'subscription';
        }, wsLink, apolloLink);
    }
    var authAfterware = client_1.configureAuthAfterware({ deauthenticate: function () { return reduxStore.dispatch(client_1.clearToken()); } });
    var authMiddleware = client_1.configureAuthMiddleware({ authToken: function () { return reduxStore.getState().authentication.token; } });
    var apolloClient = new apollo_client_1.ApolloClient({
        connectToDevTools: true,
        link: authAfterware.concat(apollo_link_1.concat(authMiddleware, apolloLink)),
        // TODO: Remove this when https://github.com/apollographql/apollo-client/pull/2592 gets merged
        cache: new apollo_cache_inmemory_1.InMemoryCache(),
    });
    return function createProviderHOC(
        // tslint:disable-next-line:variable-name
        Component) {
        function mapStateToProps(state) {
            return {
                state: state,
            };
        }
        var reduxConnector = react_redux_1.connect(mapStateToProps);
        return /** @class */ (function (_super) {
            __extends(ProviderHOC, _super);
            function ProviderHOC() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProviderHOC.prototype.render = function () {
                // tslint:disable-next-line:variable-name
                var ConnectedComponent = reduxConnector(Component);
                return (React.createElement(react_apollo_1.ApolloProvider, { client: apolloClient },
                    React.createElement(react_redux_1.Provider, { store: reduxStore },
                        React.createElement("div", { style: { height: '100%' } },
                            React.createElement(client_1.Authentication, { onError: function (message) { return reduxStore.dispatch(notifications_1.error({ message: message })); }, authURL: config.authenticationURL }),
                            React.createElement(notifications_1.NotificationSystem, null),
                            React.createElement(ConnectedComponent, __assign({}, this.props))))));
            };
            return ProviderHOC;
        }(React.PureComponent));
    };
}
exports.configureProviderHOC = configureProviderHOC;
//# sourceMappingURL=ProviderHOC.js.map