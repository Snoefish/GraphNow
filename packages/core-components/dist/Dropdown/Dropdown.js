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
var core_styles_1 = require("core-styles");
var React = require("react");
var ReactDOM = require("react-dom");
var md_1 = require("react-icons/lib/md");
var typestyle_1 = require("typestyle");
var utils_1 = require("../utils");
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super.call(this) || this;
        _this._toggleDropdown = function () {
            _this.setState({ showing: !_this.state.showing });
        };
        _this.state = {
            showing: false,
        };
        return _this;
    }
    Dropdown.prototype.componentWillMount = function () {
        if (typeof document !== 'undefined') {
            this._dropdownElement = document.createElement('div');
            document.body.appendChild(this._dropdownElement);
        }
    };
    Dropdown.prototype.componentWillUnmount = function () {
        if (typeof document !== 'undefined') {
            document.body.removeChild(this._dropdownElement);
        }
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        return (React.createElement("button", { onClick: this._toggleDropdown, style: this.props.buttonStyle, ref: function (ref) { return (_this._buttonElement = ref); } },
            React.createElement("div", { className: core_styles_1.flexRowContainerClass },
                this.props.buttonDisplay,
                this.state.showing ? React.createElement(md_1.MdArrowDropUp, null) : React.createElement(md_1.MdArrowDropDown, null)),
            this.state.showing && this._buttonElement != undefined ? (ReactDOM.createPortal(React.createElement("div", { className: typestyle_1.classes(core_styles_1.cardClass, core_styles_1.flexColumnContainerClass), style: __assign({ position: 'absolute', top: utils_1.elementPosition(this._buttonElement).bottom, left: utils_1.elementPosition(this._buttonElement).left, margin: 0, zIndex: 10, width: 'max-content' }, this.props.dropdownStyle) }, this.props.children), this._dropdownElement)) : (undefined)));
    };
    return Dropdown;
}(React.PureComponent));
exports.Dropdown = Dropdown;
//# sourceMappingURL=Dropdown.js.map