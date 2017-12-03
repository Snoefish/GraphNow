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
var LoginDialog = /** @class */ (function (_super) {
    __extends(LoginDialog, _super);
    function LoginDialog() {
        var _this = _super.call(this) || this;
        _this._handleInputUsernameChange = function (event) {
            _this.setState({
                inputUsername: event.currentTarget.value,
            });
        };
        _this._handleInputPasswordChange = function (event) {
            _this.setState({
                inputPassword: event.currentTarget.value,
            });
        };
        _this._handleAuthenticate = function () {
            var _a = _this.state, inputUsername = _a.inputUsername, inputPassword = _a.inputPassword;
            var authenticate = _this.props.authenticate;
            if (inputUsername != undefined && inputPassword != undefined) {
                authenticate(inputUsername, inputPassword);
            }
        };
        _this._handleEnterPress = function (event) {
            if (event.keyCode === 13) {
                _this._handleAuthenticate();
            }
        };
        _this.state = {
            inputUsername: '',
            inputPassword: '',
        };
        return _this;
    }
    LoginDialog.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: core_styles_1.modalBackgroundClass }),
            React.createElement("div", { className: typestyle_1.classes(core_styles_1.cardClass, core_styles_1.modalClass, core_styles_1.pageMiddleClass, core_styles_1.pageCenterClass) },
                React.createElement("span", { style: { fontSize: '1.5rem' } }, "Authentication"),
                React.createElement("div", null,
                    React.createElement("input", { style: { margin: '5px' }, type: 'text', placeholder: 'username', onChange: this._handleInputUsernameChange, onKeyUp: this._handleEnterPress, autoFocus: true }),
                    React.createElement("input", { style: { margin: '5px' }, type: 'password', placeholder: 'password', onChange: this._handleInputPasswordChange, onKeyUp: this._handleEnterPress })),
                React.createElement("button", { style: { float: 'right' }, type: 'button', onClick: this._handleAuthenticate }, "Login"))));
    };
    return LoginDialog;
}(React.Component));
exports.LoginDialog = LoginDialog;
//# sourceMappingURL=LoginDialog.js.map