"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Components_1 = require("./Components");
var ReduxStore_1 = require("./ReduxStore");
var ReduxStore_2 = require("./ReduxStore");
exports.reducer = ReduxStore_2.reducer;
// tslint:disable-next-line:variable-name
exports.DatabaseManager = ReduxStore_1.reduxConnector(Components_1.DatabaseManager);
//# sourceMappingURL=index.js.map