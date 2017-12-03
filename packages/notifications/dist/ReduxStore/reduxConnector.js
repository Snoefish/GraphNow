"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
function mapStateToProps(state) {
    return {
        notifications: state.notifications,
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
    return react_redux_1.connect(mapStateToProps)(component);
}
exports.reduxConnector = reduxConnector;
//# sourceMappingURL=reduxConnector.js.map