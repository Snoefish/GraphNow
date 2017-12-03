"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var actions_1 = require("./actions");
function mapStateToProps(state) {
    return {
        counter: state.databaseManager.counter,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        increment: function (value) { return dispatch(actions_1.increment(value)); },
        decrement: function (value) { return dispatch(actions_1.decrement(value)); },
    };
}
/**
 * Function to connect the database manager component to a redux store
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