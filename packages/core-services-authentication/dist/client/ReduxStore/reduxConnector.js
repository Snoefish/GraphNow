"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var actions_1 = require("./actions");
function mapStateToProps(state) {
    return {
        token: state.authentication.token,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setToken: function (token) { return dispatch(actions_1.setToken(token)); },
        clearToken: function () { return dispatch(actions_1.clearToken()); },
    };
}
/**
 * Connect Authentication component to the store
 *
 * @export
 * @template P
 * @param {React.ComponentType<P>} component
 * @returns {(React.ComponentType<Omit<P, keyof (ReduxStateProps & ReduxDispatchProps)>>)}
 */
function reduxConnector(component) {
    return react_redux_1.connect(mapStateToProps, mapDispatchToProps)(component);
}
exports.reduxConnector = reduxConnector;
//# sourceMappingURL=reduxConnector.js.map