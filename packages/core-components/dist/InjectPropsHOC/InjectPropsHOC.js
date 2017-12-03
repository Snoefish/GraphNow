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
var React = require("react");
// tslint:disable-next-line:typedef
function configureInjectPropsHOC(injectedProps) {
    // : new() => React.Component<ChildProps<OwnProps & QueryLoaderProps, GraphQLResponse>>
    return function createInjectPropsHOC(Component) {
        // tslint:disable-next-line:no-any
        return /** @class */ (function (_super) {
            __extends(InjectPropsHOC, _super);
            function InjectPropsHOC() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // tslint:disable-next-line:typedef
            InjectPropsHOC.prototype.render = function () {
                return React.createElement(Component, __assign({}, this.props, injectedProps));
            };
            return InjectPropsHOC;
        }(React.PureComponent));
    };
}
exports.configureInjectPropsHOC = configureInjectPropsHOC;
//# sourceMappingURL=InjectPropsHOC.js.map