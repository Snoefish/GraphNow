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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function configureLoadQueryHOC(options) {
    return function createLoadQueryHOC(// tslint:disable-line:typedef
        Component) {
        return /** @class */ (function (_super) {
            __extends(LoadQueryHOC, _super);
            function LoadQueryHOC() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._hasData = false;
                return _this;
            }
            LoadQueryHOC.prototype.render = function () {
                var _a = this.props, data = _a.data, onQueryError = _a.onQueryError, ownProps = __rest(_a, ["data", "onQueryError"]);
                if (data == undefined) {
                    if (options != undefined && options.InitialLoadingComponent != undefined) {
                        return React.createElement(options.InitialLoadingComponent, __assign({}, ownProps));
                    }
                    else {
                        return React.createElement("span", null, "Loading...");
                    }
                }
                else if (data.error != undefined) {
                    if (options != undefined && options.ErrorComponent != undefined) {
                        if (options.onQueryError != undefined)
                            options.onQueryError(data.error);
                        if (onQueryError != undefined)
                            onQueryError(data.error);
                        return React.createElement(options.ErrorComponent, __assign({ error: data.error }, ownProps));
                    }
                    else {
                        return null; // tslint:disable-line:no-null-keyword
                    }
                }
                else if (data.loading && !this._hasData) {
                    if (options != undefined && options.InitialLoadingComponent != undefined) {
                        return React.createElement(options.InitialLoadingComponent, __assign({}, ownProps));
                    }
                    else {
                        return React.createElement("span", null, "Loading...");
                    }
                }
                else {
                    this._hasData = true;
                    return [
                        data.loading && options != undefined && options.NewDataLoadingComponent != undefined ? (React.createElement(options.NewDataLoadingComponent, __assign({ key: 1 }, ownProps))) : null,
                        React.createElement(Component, __assign({ key: 2, data: data }, ownProps)),
                    ];
                }
            };
            return LoadQueryHOC;
        }(React.PureComponent));
    };
}
exports.configureLoadQueryHOC = configureLoadQueryHOC;
//# sourceMappingURL=LoadQueryHOC.js.map