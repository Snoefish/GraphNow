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
var React = require("react");
var Notifications = require("react-notification-system-redux");
var NotificationSystem = /** @class */ (function (_super) {
    __extends(NotificationSystem, _super);
    function NotificationSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationSystem.prototype.render = function () {
        var notifications = this.props.notifications;
        return (React.createElement(Notifications, { notifications: notifications }));
    };
    return NotificationSystem;
}(React.PureComponent));
exports.NotificationSystem = NotificationSystem;
//# sourceMappingURL=NotificationSystem.js.map