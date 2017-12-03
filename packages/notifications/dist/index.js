"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_notification_system_redux_1 = require("react-notification-system-redux");
exports.show = react_notification_system_redux_1.show;
exports.success = react_notification_system_redux_1.success;
exports.error = react_notification_system_redux_1.error;
exports.warning = react_notification_system_redux_1.warning;
exports.info = react_notification_system_redux_1.info;
exports.hide = react_notification_system_redux_1.hide;
exports.removeAll = react_notification_system_redux_1.removeAll;
exports.reducer = react_notification_system_redux_1.reducer;
var Components_1 = require("./Components");
var ReduxStore_1 = require("./ReduxStore");
// tslint:disable-next-line:variable-name
exports.NotificationSystem = ReduxStore_1.reduxConnector(Components_1.NotificationSystem);
//# sourceMappingURL=index.js.map