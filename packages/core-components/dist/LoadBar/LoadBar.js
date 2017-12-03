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
Object.defineProperty(exports, "__esModule", { value: true });
var core_styles_1 = require("core-styles");
var React = require("react");
var typestyle_1 = require("typestyle");
var keyframe = typestyle_1.keyframes({
    'from': {
        left: '-200px',
        width: '30%',
    },
    '50%': {
        width: '30%',
    },
    '70%': {
        width: '70%',
    },
    '80%': {
        left: '50%',
    },
    '95%': {
        left: '120%',
    },
    'to': {
        left: '100%',
    },
});
var loader = core_styles_1.prefixedStyle({
    height: '4px',
    width: '100%',
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    $nest: {
        '&:before': {
            display: 'block',
            position: 'absolute',
            content: '""',
            left: '-200px',
            width: '200px',
            height: '4px',
            backgroundColor: '#2980b9',
            animationName: keyframe,
            animationDuration: '2s',
            animationIterationCount: 'infinite',
        },
    },
});
var LoadBar = /** @class */ (function (_super) {
    __extends(LoadBar, _super);
    function LoadBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadBar.prototype.render = function () {
        return React.createElement("div", { className: loader });
    };
    return LoadBar;
}(React.PureComponent));
exports.LoadBar = LoadBar;
//# sourceMappingURL=LoadBar.js.map