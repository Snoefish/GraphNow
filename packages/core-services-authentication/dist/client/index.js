"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Components_1 = require("./Components");
var ReduxStore_1 = require("./ReduxStore");
var ReduxStore_2 = require("./ReduxStore");
exports.setToken = ReduxStore_2.setToken;
exports.clearToken = ReduxStore_2.clearToken;
exports.reducer = ReduxStore_2.reducer;
__export(require("./configureAuthAfterware"));
__export(require("./configureAuthMiddleware"));
// tslint:disable-next-line:variable-name
exports.Authentication = ReduxStore_1.reduxConnector(Components_1.Authentication);
//# sourceMappingURL=index.js.map